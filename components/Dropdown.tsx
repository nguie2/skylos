"use client";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type CSSProperties,
} from "react";
import { createPortal } from "react-dom";
import { cn } from "@/lib/utils";

export type DropdownOption = {
  value: string | number;
  label: string;
  description?: string;
  count?: number;
};

type DropdownPanelProps = {
  open: boolean;
  closing: boolean;
  anchorRef: React.RefObject<HTMLElement | null>;
  align: "left" | "right";
  label: string;
  options: readonly DropdownOption[];
  value: string | number;
  onSelect: (value: string | number) => void;
  onClose: () => void;
};

function DropdownPanel({
  open,
  closing,
  anchorRef,
  align,
  label,
  options,
  value,
  onSelect,
  onClose,
}: DropdownPanelProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<CSSProperties>({});

  const updatePosition = useCallback(() => {
    const anchor = anchorRef.current;
    if (!anchor) return;

    const rect = anchor.getBoundingClientRect();
    const panelWidth = 280;
    const left =
      align === "right"
        ? Math.max(16, rect.right - panelWidth)
        : Math.min(rect.left, window.innerWidth - panelWidth - 16);

    setStyle({
      top: rect.bottom + 8,
      left,
      width: panelWidth,
    });
  }, [align, anchorRef]);

  useLayoutEffect(() => {
    if (!open && !closing) return;
    updatePosition();
  }, [open, closing, updatePosition]);

  useEffect(() => {
    if (!open && !closing) return;

    const handleScrollOrResize = () => updatePosition();
    window.addEventListener("scroll", handleScrollOrResize, true);
    window.addEventListener("resize", handleScrollOrResize);
    return () => {
      window.removeEventListener("scroll", handleScrollOrResize, true);
      window.removeEventListener("resize", handleScrollOrResize);
    };
  }, [open, closing, updatePosition]);

  useEffect(() => {
    if (!open) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  if (!open && !closing) return null;

  return createPortal(
    <>
      <button
        type="button"
        aria-label="Fermer le menu"
        className={cn(
          "dropdown-backdrop fixed inset-0 z-[60] bg-on-surface/10 backdrop-blur-[1px]",
          closing ? "dropdown-backdrop-closing" : "dropdown-backdrop-open",
        )}
        onClick={onClose}
      />
      <div
        ref={panelRef}
        role="listbox"
        aria-label={label}
        style={style}
        className={cn(
          "dropdown-panel fixed z-[70] bg-surface-container-lowest border border-outline-variant/20 rounded-xl shadow-[0_12px_32px_rgba(19,66,53,0.12)] overflow-hidden",
          closing ? "dropdown-panel-closing" : "dropdown-panel-open",
        )}
      >
        <div className="px-4 py-3 border-b border-outline-variant/15 bg-surface-container-low/60">
          <p className="text-label-md font-label-md text-primary">{label}</p>
        </div>
        <ul className="max-h-[320px] overflow-y-auto py-1">
          {options.map((option) => {
            const selected = option.value === value;
            return (
              <li key={String(option.value)} role="option" aria-selected={selected}>
                <button
                  type="button"
                  onClick={() => onSelect(option.value)}
                  className={cn(
                    "dropdown-option w-full text-left px-4 py-3 flex items-start gap-3 transition-colors",
                    selected
                      ? "bg-secondary-container/35 text-primary"
                      : "text-on-surface-variant hover:bg-surface-container-high hover:text-primary",
                  )}
                >
                  <span
                    className={cn(
                      "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border transition-colors",
                      selected
                        ? "border-primary bg-primary text-on-primary"
                        : "border-outline-variant/40 bg-surface",
                    )}
                  >
                    {selected && (
                      <span className="material-symbols-outlined text-[14px]">
                        check
                      </span>
                    )}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex items-center justify-between gap-2">
                      <span
                        className={cn(
                          "text-label-md font-label-md",
                          selected && "font-bold",
                        )}
                      >
                        {option.label}
                      </span>
                      {option.count !== undefined && (
                        <span className="shrink-0 rounded-full bg-surface-container-low px-2 py-0.5 text-label-sm font-label-md font-bold text-outline">
                          {option.count}
                        </span>
                      )}
                    </span>
                    {option.description && (
                      <span className="mt-0.5 block text-label-md font-body-md leading-snug text-outline">
                        {option.description}
                      </span>
                    )}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </>,
    document.body,
  );
}

function useDropdown() {
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openMenu = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setClosing(false);
    setOpen(true);
  }, []);

  const closeMenu = useCallback(() => {
    if (!open || closing) return;
    setClosing(true);
    closeTimer.current = setTimeout(() => {
      setOpen(false);
      setClosing(false);
    }, 180);
  }, [open, closing]);

  const toggleMenu = useCallback(() => {
    if (open) closeMenu();
    else openMenu();
  }, [open, closeMenu, openMenu]);

  useEffect(
    () => () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    },
    [],
  );

  return { open, closing, openMenu, closeMenu, toggleMenu };
}

type FilterDropdownProps = {
  label: string;
  prefix: string;
  options: readonly DropdownOption[];
  value: string | number;
  onChange: (value: string | number) => void;
  active?: boolean;
};

export function FilterDropdown({
  label,
  prefix,
  options,
  value,
  onChange,
  active,
}: FilterDropdownProps) {
  const anchorRef = useRef<HTMLButtonElement>(null);
  const { open, closing, toggleMenu, closeMenu } = useDropdown();
  const selected = options.find((option) => option.value === value);

  return (
    <>
      <button
        ref={anchorRef}
        type="button"
        onClick={toggleMenu}
        aria-expanded={open}
        aria-haspopup="listbox"
        className={cn(
          "filter-chip whitespace-nowrap px-4 py-2 rounded-full text-label-md font-label-md flex items-center gap-1.5",
          active || open
            ? "bg-secondary-container text-on-secondary-container shadow-[0_2px_8px_rgba(114,92,0,0.12)]"
            : "bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high border border-outline-variant/20",
        )}
      >
        {prefix} : {selected?.label ?? label}
        <span
          className={cn(
            "material-symbols-outlined text-[18px] transition-transform duration-200",
            open && "rotate-180",
          )}
        >
          expand_more
        </span>
      </button>

      <DropdownPanel
        open={open}
        closing={closing}
        anchorRef={anchorRef}
        align="left"
        label={label}
        options={options}
        value={value}
        onSelect={(nextValue) => {
          onChange(nextValue);
          closeMenu();
        }}
        onClose={closeMenu}
      />
    </>
  );
}

type SortDropdownProps = {
  options: readonly DropdownOption[];
  value: string;
  onChange: (value: string) => void;
};

export function SortDropdown({ options, value, onChange }: SortDropdownProps) {
  const anchorRef = useRef<HTMLButtonElement>(null);
  const { open, closing, toggleMenu, closeMenu } = useDropdown();
  const selected = options.find((option) => option.value === value);

  return (
    <>
      <button
        ref={anchorRef}
        type="button"
        onClick={toggleMenu}
        aria-expanded={open}
        aria-haspopup="listbox"
        className={cn(
          "filter-chip flex items-center gap-1.5 rounded-full px-3 py-2 transition-colors",
          open
            ? "bg-surface-container-high text-primary"
            : "text-on-surface-variant hover:text-primary hover:bg-surface-container-low",
        )}
      >
        Trier par : {selected?.label}
        <span
          className={cn(
            "material-symbols-outlined text-[18px] transition-transform duration-200",
            open && "rotate-180",
          )}
        >
          expand_more
        </span>
      </button>

      <DropdownPanel
        open={open}
        closing={closing}
        anchorRef={anchorRef}
        align="right"
        label="Trier par"
        options={options}
        value={value}
        onSelect={(nextValue) => {
          onChange(String(nextValue));
          closeMenu();
        }}
        onClose={closeMenu}
      />
    </>
  );
}
