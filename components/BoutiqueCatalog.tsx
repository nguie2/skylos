"use client";

import { useMemo, useState } from "react";
import { PageContainer } from "@/components/PageContainer";
import { Pagination } from "@/components/Pagination";
import { CategoryFilter, ProductCard } from "@/components/ProductCard";
import { SubscriptionBento } from "@/components/SubscriptionBento";
import {
  boutiqueCategories,
  boutiqueSortOptions,
  products,
} from "@/lib/data";
import type { Product } from "@/lib/types";
import { getTotalPages, paginate } from "@/lib/utils";

const PER_PAGE = 8;

function sortProducts(items: Product[], sort: string): Product[] {
  const sorted = [...items];
  switch (sort) {
    case "price-asc":
      return sorted.sort((a, b) => a.price - b.price);
    case "price-desc":
      return sorted.sort((a, b) => b.price - a.price);
    case "rating":
      return sorted.sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0));
    default:
      return sorted;
  }
}

export function BoutiqueCatalog() {
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("recent");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    const base =
      category === "all"
        ? products
        : products.filter((product) => product.category === category);
    return sortProducts(base, sort);
  }, [category, sort]);

  const totalPages = getTotalPages(filtered.length, PER_PAGE);
  const currentPage = Math.min(page, totalPages);
  const pageItems = paginate(filtered, currentPage, PER_PAGE);

  const handleCategoryChange = (value: string) => {
    setCategory(value);
    setPage(1);
  };

  const handlePageChange = (nextPage: number) => {
    setPage(nextPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <PageContainer>
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-md mb-md">
        <div className="max-w-2xl">
          <h1 className="type-page-title mb-xs">
            Des soins sélectionnés pour chaque compagnon
          </h1>
          <p className="type-body">
            Produits éthiques, approuvés par nos nutritionnistes, pensés pour
            les propriétaires qui valorisent la qualité et la planète.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            className="bg-primary text-on-primary px-4 py-2 sm:px-5 sm:py-2.5 rounded-full type-btn flex items-center gap-1.5"
          >
            <span className="material-symbols-outlined text-[18px]">tune</span>
            Filtrer
          </button>
          <label className="relative">
            <span className="sr-only">Trier les produits</span>
            <select
              value={sort}
              onChange={(event) => {
                setSort(event.target.value);
                setPage(1);
              }}
              className="appearance-none bg-surface-container-lowest text-on-surface border border-outline-variant/60 px-4 py-2 sm:px-5 sm:py-2.5 pr-10 rounded-full type-btn cursor-pointer hover:bg-surface-container-low transition-colors"
            >
              {boutiqueSortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[18px]">
              expand_more
            </span>
          </label>
        </div>
      </header>

      <CategoryFilter
        categories={[...boutiqueCategories]}
        active={category}
        onChange={handleCategoryChange}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md">
        {pageItems.map((product, index) => (
          <ProductCard
            key={product.slug}
            product={product}
            variant="boutique"
            priority={index < 2}
          />
        ))}
        {currentPage === 1 && <SubscriptionBento />}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-xl bg-surface-container-low rounded-xl border border-outline-variant/20">
          <span className="material-symbols-outlined text-primary text-[48px] mb-sm">
            shopping_bag
          </span>
          <h3 className="type-card-title mb-xs">
            Aucun produit trouvé
          </h3>
          <p className="text-body-md text-on-surface-variant">
            Essayez une autre catégorie pour découvrir nos essentiels.
          </p>
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
