/** Shared typography — matches landing page scale site-wide. */
export const type = {
  heroTitle:
    "font-display text-[1.65rem] leading-tight sm:text-headline-lg-mobile md:text-headline-lg lg:text-display-lg text-primary",
  pageTitle:
    "font-display text-headline-lg-mobile md:text-headline-lg text-primary leading-tight",
  sectionTitle:
    "font-display text-headline-lg-mobile md:text-headline-lg text-primary",
  cardTitle: "font-display text-headline-md text-primary",
  cardTitleSurface: "font-display text-headline-md text-on-surface",
  body: "text-body-md font-body-md text-on-surface-variant",
  bodyPrimary: "text-body-md font-body-md text-on-surface",
  label: "text-label-md font-label-md",
  labelSm: "text-label-sm font-label-md",
  caption: "text-label-sm font-label-md text-outline uppercase tracking-wider",
  meta: "text-label-sm font-label-md text-outline",
  btn: "text-label-sm sm:text-label-md font-label-md",
  statValue: "font-display text-headline-md text-primary leading-none",
  statLabel: "text-label-sm font-label-md text-on-surface-variant",
} as const;
