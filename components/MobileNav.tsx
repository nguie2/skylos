"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/lib/data";
import { cn } from "@/lib/utils";

export function MobileNav() {
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <nav
      className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 py-2 pb-safe bg-surface-container-low shadow-[0_-4px_12px_rgba(19,66,53,0.05)] rounded-t-xl"
      aria-label="Navigation mobile"
    >
      {navItems.map((item) => {
        const active = isActive(item.href);
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex flex-col items-center justify-center p-2 transition-all duration-200",
              active
                ? "bg-secondary-container text-on-secondary-container rounded-full px-4 py-1 active:scale-90"
                : "text-on-surface-variant",
            )}
          >
            <span className="material-symbols-outlined">{item.icon}</span>
            <span className="text-label-md font-label-md">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
