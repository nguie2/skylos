import { cn } from "@/lib/utils";

type PageContainerProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  as?: "main" | "section" | "div";
  size?: "wide" | "medium" | "narrow";
};

const sizeClasses = {
  wide: "max-w-[1520px]",
  medium: "max-w-4xl",
  narrow: "max-w-3xl",
};

export function PageContainer({
  children,
  className,
  id,
  as: Tag = "main",
  size = "wide",
}: PageContainerProps) {
  return (
    <Tag
      id={id}
      className={cn(
        "pt-6 pb-6 md:pb-lg w-full mx-auto px-margin-mobile md:px-margin-desktop",
        sizeClasses[size],
        className,
      )}
    >
      {children}
    </Tag>
  );
}
