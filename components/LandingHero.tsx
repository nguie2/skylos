"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { hero } from "@/lib/data";

const WelcomeDogRive = dynamic(
  () =>
    import("@/components/WelcomeDogRive").then((mod) => mod.WelcomeDogRive),
  {
    ssr: false,
    loading: () => (
      <div
        className="h-36 w-36 sm:h-40 sm:w-40 md:h-48 md:w-48 lg:h-[17rem] lg:w-[17rem] animate-pulse shrink-0 bg-primary/5 rounded-2xl"
        aria-hidden="true"
      />
    ),
  },
);

export function LandingHero() {
  return (
    <section className="landing-hero relative overflow-hidden flex flex-col">
      <div className="relative z-10 flex-1 flex items-center">
        <div className="max-w-[1520px] mx-auto px-margin-mobile md:px-margin-desktop w-full py-6 md:py-8 lg:py-10 pb-24 md:pb-28 lg:pb-32">
          <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-8 lg:gap-12 w-full">
            <div className="flex-1 min-w-0 z-10 lg:pr-6 text-center md:text-left">
              <h1 className="type-hero-title mb-1 sm:mb-xs max-w-3xl lg:max-w-4xl mx-auto md:mx-0">
                {hero.title}
              </h1>
              <p className="type-body mb-3 sm:mb-md max-w-2xl lg:max-w-3xl leading-snug mx-auto md:mx-0">
                {hero.subtitle}
              </p>

              <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-4 sm:mb-5">
                <Link
                  href={hero.primaryCta.href}
                  className="inline-flex items-center gap-1 bg-primary text-on-primary px-4 py-2 sm:px-5 sm:py-2.5 rounded-full font-label-md text-label-sm sm:text-label-md hover:bg-primary-container hover:text-on-primary-container transition-all active:scale-95"
                >
                  {hero.primaryCta.label}
                  <span className="material-symbols-outlined text-[15px] sm:text-[16px]">
                    arrow_forward
                  </span>
                </Link>
                <Link
                  href={hero.secondaryCta.href}
                  className="inline-flex items-center gap-1 bg-surface-container-lowest/80 text-primary px-4 py-2 sm:px-5 sm:py-2.5 rounded-full font-label-md text-label-sm sm:text-label-md border border-outline-variant/60 hover:bg-surface-container-high transition-all active:scale-95"
                >
                  {hero.secondaryCta.label}
                </Link>
              </div>

              <ul className="flex flex-wrap gap-2 justify-center md:justify-start max-w-md md:max-w-none mx-auto md:mx-0">
                {hero.highlights.map((item) => (
                  <li
                    key={item.label}
                    className="inline-flex items-center gap-1.5 rounded-full border border-outline-variant/25 bg-surface-container-lowest/70 px-2.5 py-1 sm:px-3 sm:py-1.5 text-label-sm font-label-md text-on-surface-variant"
                  >
                    <span className="material-symbols-outlined text-primary text-[14px] sm:text-[16px]">
                      {item.icon}
                    </span>
                    {item.label}
                  </li>
                ))}
              </ul>
            </div>

            <div className="shrink-0 flex justify-center md:justify-end w-full md:w-auto">
              <WelcomeDogRive variant="hero" showHint={false} />
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 border-t border-outline-variant/20 bg-surface/40 backdrop-blur-sm">
        <div className="max-w-[1520px] mx-auto px-margin-mobile md:px-margin-desktop py-3.5 md:py-4 lg:py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-3 gap-y-3 md:gap-6">
            {hero.stats.map((stat) => (
              <div key={stat.label} className="text-center md:text-left">
                <p className="font-display text-[1.125rem] sm:text-headline-md text-primary leading-none mb-0.5">
                  {stat.value}
                </p>
                <p className="text-label-sm font-label-md text-on-surface-variant leading-tight">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Link
        href="#catalogue"
        className="absolute bottom-[5.5rem] lg:bottom-[6.25rem] left-1/2 -translate-x-1/2 z-10 hidden lg:inline-flex flex-col items-center gap-0.5 text-label-sm font-label-md text-outline/80 hover:text-primary transition-colors"
        aria-label="Faire défiler vers les chiens disponibles"
      >
        <span>Découvrir</span>
        <span className="material-symbols-outlined text-[20px] animate-bounce">
          expand_more
        </span>
      </Link>
    </section>
  );
}
