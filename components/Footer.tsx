import Link from "next/link";
import { footerLinks, site } from "@/lib/data";

export function Footer() {
  return (
    <footer className="bg-primary text-on-primary mt-xl">
      <div className="max-w-[1520px] mx-auto px-margin-mobile md:px-margin-desktop py-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-lg">
          <div>
            <Link
              href="/"
              className="font-label-md text-label-md font-semibold tracking-tight hover:opacity-80 transition-opacity"
            >
              {site.name}
            </Link>
            <p className="mt-sm text-body-md text-primary-fixed">
              {site.tagline}. Nous accompagnons les familles gabonaises dans
              l&apos;adoption responsable et le bien-être de leurs compagnons.
            </p>
          </div>

          <div>
            <h3 className="text-label-md font-label-md uppercase tracking-wider text-secondary-fixed mb-sm">
              Navigation
            </h3>
            <ul className="space-y-2">
              {footerLinks.navigation.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-body-md text-primary-fixed hover:text-on-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-label-md font-label-md uppercase tracking-wider text-secondary-fixed mb-sm">
              Contact
            </h3>
            <ul className="space-y-2 text-body-md text-primary-fixed">
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[20px] mt-0.5">
                  location_on
                </span>
                {site.address}
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[20px]">
                  call
                </span>
                <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="hover:text-on-primary transition-colors">
                  {site.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[20px]">
                  mail
                </span>
                <a href={`mailto:${site.email}`} className="hover:text-on-primary transition-colors">
                  {site.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[20px]">
                  schedule
                </span>
                {site.hours}
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-label-md font-label-md uppercase tracking-wider text-secondary-fixed mb-sm">
              Informations
            </h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-body-md text-primary-fixed hover:text-on-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-md text-body-md text-primary-fixed/80">
              Paiements acceptés en FCFA. Livraison disponible sur Libreville.
            </p>
          </div>
        </div>

        <div className="mt-lg pt-md border-t border-primary-container flex flex-col sm:flex-row justify-between items-center gap-sm text-body-md text-primary-fixed/80">
          <p>© {new Date().getFullYear()} {site.name}. Tous droits réservés.</p>
          <p>Fait avec soin au Gabon.</p>
        </div>
      </div>
    </footer>
  );
}
