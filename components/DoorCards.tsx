import Link from "next/link";
import { localePath, type Locale } from "@/lib/locales";
import type { HomeContent } from "@/lib/content-types";

// Tres tarjetas del mismo peso visual; cada una lleva a su ruta.
export default function DoorCards({ doors, locale }: { doors: HomeContent["doors"]; locale: Locale }) {
  return (
    <ul className="doors">
      {doors.map((door) => (
        <li key={door.href}>
          <Link
            className="door"
            href={localePath(locale, door.href)}
            data-track="door_click"
            data-track-label={door.track}
          >
            <span className="door__title">{door.title}</span>
            <span className="door__sub">{door.subtitle}</span>
            <span className="door__go" aria-hidden="true">
              →
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
