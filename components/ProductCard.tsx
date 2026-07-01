"use client";

import Image from "next/image";
import { useApp } from "@/context/AppContext";
import { formatPrice } from "@/lib/data";
import type { Product } from "@/lib/types";
import { cn } from "@/lib/utils";

type ProductCardProps = {
  product: Product;
  variant?: "default" | "boutique";
  priority?: boolean;
};

export function ProductCard({
  product,
  variant = "default",
  priority = false,
}: ProductCardProps) {
  const { addToCart } = useApp();

  if (variant === "boutique") {
    return (
      <div className="bento-card group bg-surface-container-lowest rounded-xl overflow-hidden border border-outline-variant/20 p-md flex flex-col">
        <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden mb-sm">
          {product.badge && (
            <span className="absolute top-2 left-2 z-10 bg-secondary text-on-secondary text-label-sm font-label-md uppercase tracking-wider font-bold px-2 py-0.5 rounded">
              {product.badge}
            </span>
          )}
          <Image
            src={product.image}
            alt={product.alt}
            fill
            priority={priority}
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="flex flex-col flex-grow">
          <div className="flex justify-between items-start gap-2 mb-1">
            <p className="type-caption">{product.categoryLabel}</p>
            {product.rating && (
              <div className="flex items-center gap-0.5 shrink-0">
                <span
                  className="material-symbols-outlined text-secondary text-[16px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
                <span className="text-label-sm font-label-md text-on-surface-variant">
                  {product.rating.toFixed(1)}
                </span>
              </div>
            )}
          </div>
          <h3 className="type-card-title mb-xs">{product.name}</h3>
          {product.description && (
            <p className="text-body-md font-body-md text-on-surface-variant line-clamp-2 mb-sm flex-grow">
              {product.description}
            </p>
          )}
          <div className="flex items-baseline gap-2 mb-sm">
            <p className="text-label-md font-label-md text-primary">
              {formatPrice(product.price)}
            </p>
            {product.originalPrice && (
              <span className="text-label-sm font-label-md text-outline line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>
          <button
            type="button"
            onClick={() => addToCart(product)}
            className="mt-auto w-full py-3 bg-primary text-on-primary rounded-full text-label-md font-label-md flex items-center justify-center gap-2 hover:bg-primary-container hover:text-on-primary-container transition-all active:scale-[0.98]"
          >
            Ajouter au panier
            <span className="material-symbols-outlined text-[18px]">
              add_shopping_cart
            </span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bento-card group bg-surface-container-lowest rounded-xl overflow-hidden border border-outline-variant/20 p-md flex flex-col">
      <div className="relative w-full aspect-square rounded-lg overflow-hidden mb-sm">
        <Image
          src={product.image}
          alt={product.alt}
          fill
          priority={priority}
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {product.badge && (
          <span className="absolute top-3 left-3 bg-secondary text-on-secondary text-label-sm font-label-md uppercase tracking-wider font-bold px-2 py-1 rounded">
            {product.badge}
          </span>
        )}
      </div>
      <div className="flex flex-col flex-grow">
        <p className="type-caption mb-1">
          {product.categoryLabel}
        </p>
        <h3 className="type-card-title mb-xs">
          {product.name}
        </h3>
        <p className="text-body-md text-on-surface-variant line-clamp-2 mb-sm flex-grow">
          {product.description}
        </p>
        <div className="flex items-center justify-between gap-3 mt-auto">
          <p className="text-label-md font-label-md text-primary">
            {formatPrice(product.price)}
          </p>
          <button
            type="button"
            onClick={() => addToCart(product)}
            className="px-4 py-2 bg-primary text-on-primary rounded-full text-label-md font-label-md hover:bg-primary-container transition-all active:scale-95"
          >
            Ajouter
          </button>
        </div>
      </div>
    </div>
  );
}

export function CategoryFilter({
  categories,
  active,
  onChange,
}: {
  categories: { value: string; label: string }[];
  active: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="flex overflow-x-auto hide-scrollbar gap-2 mb-md pb-1">
      {categories.map((category) => (
        <button
          key={category.value}
          type="button"
          onClick={() => onChange(category.value)}
          className={cn(
            "filter-chip whitespace-nowrap px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-label-sm sm:text-label-md font-label-md transition-all",
            active === category.value
              ? "bg-secondary-container text-on-secondary-container shadow-sm"
              : "bg-surface-container-low text-on-surface-variant border border-outline-variant hover:bg-secondary-container/70",
          )}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
}
