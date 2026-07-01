"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useApp } from "@/context/AppContext";
import { headerNavItems, navItems, site } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const { cartCount, mobileMenuOpen, setMobileMenuOpen } = useApp();
  const isHome = pathname === "/";

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname, setMobileMenuOpen]);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header
        data-site-header
        className={cn(
          "relative z-50 h-14 flex items-center px-margin-mobile md:px-margin-desktop transition-all duration-300 font-sans",
          isHome
            ? "glass-nav border-b border-outline-variant/10"
            : "glass-nav border-b border-outline-variant/15 shadow-sm",
        )}
      >
        <div className="w-full grid grid-cols-[1fr_auto_1fr] items-center gap-2">
          <div className="flex items-center gap-1 md:gap-sm min-w-0">
            <button
              type="button"
              className="md:hidden p-1.5 text-primary active:scale-95 transition-transform shrink-0"
              aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="material-symbols-outlined text-[22px]">
                {mobileMenuOpen ? "close" : "menu"}
              </span>
            </button>

            <nav
              className="hidden md:flex items-center gap-sm"
              aria-label="Navigation principale"
            >
              {headerNavItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "font-label-md text-label-sm transition-colors whitespace-nowrap",
                    isActive(item.href)
                      ? "text-primary font-semibold"
                      : "text-on-surface-variant hover:text-primary",
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <Link
            href="/"
            className="font-display text-headline-md md:text-headline-lg text-primary font-bold tracking-tight hover:opacity-80 transition-opacity justify-self-center whitespace-nowrap"
          >
            {site.name}
          </Link>

          <div className="flex items-center justify-end gap-1 sm:gap-2 min-w-0">
            <Link
              href="/club"
              className="hidden sm:inline-flex items-center gap-0.5 bg-surface-container-lowest/90 text-primary font-label-md text-label-sm px-4 py-1.5 rounded-full border border-outline-variant/70 hover:bg-primary hover:text-on-primary transition-all duration-300 active:scale-95 whitespace-nowrap"
            >
              Rejoindre le Club
              <span className="material-symbols-outlined text-[14px] hidden lg:inline">
                chevron_right
              </span>
            </Link>
            <div className="flex items-center gap-0.5">
              <Link
                href="/profil"
                className="p-1.5 rounded-full hover:bg-surface-container transition-colors text-primary"
                aria-label="Profil"
              >
                <span className="material-symbols-outlined text-[22px]">
                  account_circle
                </span>
              </Link>
              <Link
                href="/panier"
                className="relative p-1.5 rounded-full hover:bg-surface-container transition-colors text-primary"
                aria-label={`Panier${cartCount > 0 ? `, ${cartCount} article${cartCount > 1 ? "s" : ""}` : ""}`}
              >
                <span className="material-symbols-outlined text-[22px]">
                  shopping_cart
                </span>
                {cartCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 min-w-[16px] h-4 px-1 rounded-full bg-primary text-on-primary text-[9px] font-bold flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </div>
      </header>

      {mobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-on-surface/30 backdrop-blur-sm md:hidden"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />
          <nav
            className="fixed top-[calc(var(--announcement-h)+var(--header-h))] left-0 right-0 z-50 md:hidden bg-surface-container-lowest border-b border-outline-variant/20 shadow-lg max-h-[calc(100vh-var(--announcement-h)-var(--header-h))] overflow-y-auto"
            aria-label="Menu mobile"
          >
            <div className="px-margin-mobile py-md flex flex-col gap-1">
              {headerNavItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 px-4 py-2.5 rounded-xl font-label-md text-label-sm transition-colors",
                    isActive(item.href)
                      ? "bg-secondary-container text-on-secondary-container font-semibold"
                      : "text-on-surface-variant hover:bg-surface-container-high hover:text-primary",
                  )}
                >
                  {item.label}
                </Link>
              ))}
              <div className="my-2 border-t border-outline-variant/20" />
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 rounded-xl text-label-md font-label-md transition-colors",
                    isActive(item.href)
                      ? "bg-secondary-container text-on-secondary-container font-bold"
                      : "text-on-surface-variant hover:bg-surface-container-high hover:text-primary",
                  )}
                >
                  <span className="material-symbols-outlined">{item.icon}</span>
                  {item.label}
                  {item.href === "/panier" && cartCount > 0 && (
                    <span className="ml-auto bg-primary text-on-primary text-label-sm font-label-md font-bold px-2 py-0.5 rounded-full">
                      {cartCount}
                    </span>
                  )}
                </Link>
              ))}
              <Link
                href="/club"
                className="mt-2 flex items-center justify-center gap-2 bg-primary text-on-primary px-5 py-3 rounded-full text-label-md font-label-md hover:bg-primary-container transition-all"
              >
                Rejoindre le Club
              </Link>
            </div>
          </nav>
        </>
      )}
    </>
  );
}
