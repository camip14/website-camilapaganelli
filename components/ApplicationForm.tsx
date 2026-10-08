"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import RichText from "@/components/RichText";
import { siteConfig } from "@/site.config";
import type { EmprendimientosFull } from "@/lib/content-types";
import { localePath, type Locale } from "@/lib/locales";
import { getUtm, track } from "@/lib/track";

type Status = "idle" | "sending" | "success" | "error" | "no-endpoint";

export default function ApplicationForm({
  form,
  locale,
}: {
  form: EmprendimientosFull["form"];
  locale: Locale;
}) {
  const [status, setStatus] = useState<Status>("idle");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formEl = event.currentTarget;
    if (!formEl.reportValidity()) return;

    const data = new FormData(formEl);
    const answers: Record<string, string> = {};
    for (const field of form.fields) answers[field.id] = String(data.get(field.id) ?? "");

    if (!siteConfig.formEndpoint) {
      // Sin destino definido no se simula un envío exitoso.
      setStatus("no-endpoint");
      return;
    }

    setStatus("sending");
    fetch(siteConfig.formEndpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        form: "programa-comunitario",
        locale,
        privacyAccepted: true,
        answers,
        utm: getUtm(),
      }),
    })
      .then((response) => {
        if (!response.ok) throw new Error(String(response.status));
        setStatus("success");
        track("form_submit_comunitario");
        formEl.reset();
      })
      .catch(() => setStatus("error"));
  }

  return (
    <form className="form" onSubmit={onSubmit} noValidate={false}>
      {form.fields.map((field) => {
        const required = field.required ? { required: true } : {};

        if (field.type === "radio") {
          return (
            <fieldset key={field.id} className="field field--choices">
              <legend>{field.label}</legend>
              {(field.options ?? []).map((option) => (
                <label key={option} className="choice">
                  <input type="radio" name={field.id} value={option} {...required} />
                  {option}
                </label>
              ))}
            </fieldset>
          );
        }

        return (
          <div key={field.id} className="field">
            <label htmlFor={field.id}>
              {field.label}
              {field.required && <span aria-hidden="true"> *</span>}
            </label>
            {field.type === "textarea" ? (
              <textarea id={field.id} name={field.id} {...required} />
            ) : field.type === "select" && field.options && field.options.length > 0 ? (
              <select id={field.id} name={field.id} defaultValue="" {...required}>
                <option value="" disabled>
                  —
                </option>
                {field.options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ) : (
              <>
                {/* Un "select" sin opciones definidas cae a texto libre hasta que se carguen los rangos. */}
                <input id={field.id} name={field.id} type="text" {...required} />
                {field.pendingOptions && (
                  <RichText text={`{{pending:${field.pendingOptions}}}`} />
                )}
              </>
            )}
          </div>
        );
      })}

      <div className="field field--check">
        <input id="privacy" name="privacy" type="checkbox" required />
        <label htmlFor="privacy">
          {form.privacyLabel} <Link href={localePath(locale, "privacidad")}>{form.privacyLink}</Link>. *
        </label>
      </div>

      <div>
        <button className="btn btn--primary" type="submit" disabled={status === "sending"}>
          {status === "sending" ? form.sending : form.submit}
        </button>
      </div>

      <div role="status" aria-live="polite">
        {status === "success" && (
          <p className="form__status">
            <RichText text={form.confirmation} />
          </p>
        )}
        {status === "error" && <p className="form__status form__status--error">{form.error}</p>}
        {status === "no-endpoint" && (
          <p className="form__status form__status--error">
            Modo desarrollo: no hay destino configurado (NEXT_PUBLIC_FORM_ENDPOINT), no se envió nada.
          </p>
        )}
      </div>
    </form>
  );
}
