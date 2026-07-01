type RiveSlotProps = {
  id: string;
  className?: string;
  label: string;
};

export function RiveSlot({ id, className = "", label }: RiveSlotProps) {
  return (
    <div
      id={id}
      data-rive-slot={id}
      aria-hidden="true"
      className={`rive-slot ${className}`}
      title={label}
    />
  );
}
