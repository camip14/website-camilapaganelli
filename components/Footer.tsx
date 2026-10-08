import Link from "next/link";
import { siteConfig } from "@/site.config";
import { getContent } from "@/lib/content";
import { localePath, type Locale } from "@/lib/locales";

export default function Footer({ locale }: { locale: Locale }) {
  const common = getContent("common", locale);

  return (
    <footer className="footer">
      <div className="wrap footer__inner">
        <p>
          {common.footer.rights} · {common.footer.location}
        </p>
        <div className="footer__links">
          {siteConfig.linkedinUrl && (
            <a href={siteConfig.linkedinUrl} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          )}
          <Link href={localePath(locale, "privacidad")}>{common.footer.privacy}</Link>
        </div>
      </div>
    </footer>
  );
}
