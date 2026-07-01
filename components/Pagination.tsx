"use client";

import { cn } from "@/lib/utils";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="mt-xl flex justify-center items-center gap-4">
      <button
        type="button"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="w-12 h-12 rounded-full border border-outline-variant/30 flex items-center justify-center text-primary hover:bg-surface-container-high transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
        aria-label="Page précédente"
      >
        <span className="material-symbols-outlined">chevron_left</span>
      </button>
      <div className="flex gap-2">
        {pages.map((page) => (
          <button
            key={page}
            type="button"
            onClick={() => onPageChange(page)}
            aria-current={page === currentPage ? "page" : undefined}
            className={cn(
              "w-12 h-12 rounded-full font-bold text-label-md transition-colors",
              page === currentPage
                ? "bg-primary text-on-primary"
                : "bg-surface-container-low text-primary hover:bg-surface-container-high",
            )}
          >
            {page}
          </button>
        ))}
      </div>
      <button
        type="button"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="w-12 h-12 rounded-full border border-outline-variant/30 flex items-center justify-center text-primary hover:bg-surface-container-high transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
        aria-label="Page suivante"
      >
        <span className="material-symbols-outlined">chevron_right</span>
      </button>
    </div>
  );
}
