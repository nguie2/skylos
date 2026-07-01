import type { BadgeVariant } from "@/lib/types";

export function Badge({
  label,
  variant,
}: {
  label: string;
  variant: BadgeVariant;
}) {
  const classes =
    variant === "primary"
      ? "bg-primary/90 text-on-primary"
      : "bg-secondary text-on-secondary";

  return (
    <span
      className={`${classes} text-label-sm font-label-md uppercase tracking-wider font-bold px-2 py-1 rounded`}
    >
      {label}
    </span>
  );
}
