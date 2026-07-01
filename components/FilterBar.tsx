"use client";

import { useMemo } from "react";
import { FilterDropdown, SortDropdown } from "@/components/Dropdown";
import { useApp } from "@/context/AppContext";
import { getEnrichedFilterOptions } from "@/lib/filter-counts";

type FilterBarProps = {
  totalCount: number;
};

export function FilterBar({ totalCount }: FilterBarProps) {
  const { filters, setFilter, resetFilters } = useApp();
  const options = useMemo(() => getEnrichedFilterOptions(), []);

  const hasActiveFilters =
    filters.breed !== "all" ||
    filters.age !== "all" ||
    filters.size !== "all" ||
    filters.distance !== 10;

  return (
    <section className="mb-md flex flex-col gap-sm lg:flex-row lg:flex-wrap lg:items-center">
      <div className="flex items-center gap-2 bg-surface-container-low px-4 py-2 rounded-full border border-outline-variant/30 w-fit">
        <span className="material-symbols-outlined text-primary text-[20px]">
          filter_list
        </span>
        <span className="text-label-md font-label-md text-on-surface">
          Filtres :
        </span>
        {hasActiveFilters && (
          <button
            type="button"
            onClick={resetFilters}
            className="text-label-sm font-label-md text-primary underline underline-offset-2 hover:opacity-80"
          >
            Réinitialiser
          </button>
        )}
      </div>

      <div className="flex flex-wrap gap-2">
        <FilterDropdown
          label="Choisir une race"
          prefix="Race"
          options={options.breeds}
          value={filters.breed}
          onChange={(value) => setFilter("breed", String(value))}
          active={filters.breed !== "all"}
        />
        <FilterDropdown
          label="Choisir un âge"
          prefix="Âge"
          options={options.ages}
          value={filters.age}
          onChange={(value) => setFilter("age", String(value))}
          active={filters.age !== "all"}
        />
        <FilterDropdown
          label="Choisir une taille"
          prefix="Taille"
          options={options.sizes}
          value={filters.size}
          onChange={(value) => setFilter("size", String(value))}
          active={filters.size !== "all"}
        />
        <FilterDropdown
          label="Choisir une distance"
          prefix="Distance"
          options={options.distances}
          value={filters.distance}
          onChange={(value) => setFilter("distance", Number(value))}
          active={filters.distance !== 10}
        />
      </div>

      <div className="flex items-center gap-4 text-on-surface-variant text-label-md lg:ml-auto">
        <span>
          {totalCount} chien{totalCount !== 1 ? "s" : ""} affiché
          {totalCount !== 1 ? "s" : ""}
        </span>
        <SortDropdown
          options={options.sorts}
          value={filters.sort}
          onChange={(value) =>
            setFilter("sort", value as "recent" | "name" | "age")
          }
        />
      </div>
    </section>
  );
}
