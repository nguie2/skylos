"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { DogCard } from "@/components/DogCard";
import { FilterBar } from "@/components/FilterBar";
import { PageContainer } from "@/components/PageContainer";
import { Pagination } from "@/components/Pagination";
import { PromoBanner } from "@/components/PromoBanner";
import { useApp } from "@/context/AppContext";
import { dogs } from "@/lib/data";
import {
  filterAndSortDogs,
  getTotalPages,
  paginate,
} from "@/lib/utils";

const PER_PAGE = 4;

export function HomeCatalog() {
  const searchParams = useSearchParams();
  const breedParam = searchParams.get("breed");
  const { filters, setFilter } = useApp();
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (breedParam) {
      setFilter("breed", breedParam);
    }
  }, [breedParam, setFilter]);

  useEffect(() => {
    setPage(1);
  }, [filters]);

  const filtered = useMemo(
    () => filterAndSortDogs(dogs, filters),
    [filters],
  );

  const totalPages = getTotalPages(filtered.length, PER_PAGE);
  const currentPage = Math.min(page, totalPages);
  const pageItems = paginate(filtered, currentPage, PER_PAGE);

  const handlePageChange = (nextPage: number) => {
    setPage(nextPage);
    const section = document.getElementById("catalogue");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <PageContainer
      id="catalogue"
      className="scroll-mt-[calc(var(--top-chrome)+1rem)] pt-12 md:pt-16 lg:pt-20 border-t border-outline-variant/15"
    >
      <section className="mb-md">
        <h2 className="type-section-title mb-xs">
          Trouvez Votre Nouveau Meilleur Ami
        </h2>
        <p className="text-body-md font-body-md text-on-surface-variant max-w-2xl">
          Découvrez des compagnons qui attendent un foyer pour la vie. Chaque
          chien a une histoire unique et un cœur plein d&apos;amour.
        </p>
      </section>

      <FilterBar totalCount={filtered.length} />

      {filtered.length === 0 ? (
        <div className="text-center py-xl bg-surface-container-low rounded-xl border border-outline-variant/20">
          <span className="material-symbols-outlined text-primary text-[48px] mb-sm">
            pets
          </span>
          <h3 className="type-card-title mb-xs">
            Aucun chien trouvé
          </h3>
          <p className="text-body-md text-on-surface-variant">
            Essayez d&apos;élargir vos filtres pour découvrir plus de compagnons.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md">
          {pageItems.map((dog, index) => (
            <DogCard key={dog.slug} dog={dog} priority={index === 0} />
          ))}
          {currentPage === 1 && <PromoBanner />}
        </div>
      )}

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </PageContainer>
  );
}
