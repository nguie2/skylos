"use client";

import Image from "next/image";
import Link from "next/link";
import { PageContainer } from "@/components/PageContainer";
import { useApp } from "@/context/AppContext";
import { formatPrice } from "@/lib/data";

export default function PanierPage() {
  const {
    cart,
    cartTotal,
    cartCount,
    updateQuantity,
    removeFromCart,
    clearCart,
  } = useApp();

  if (cart.length === 0) {
    return (
      <PageContainer size="narrow" className="text-center">
        <span className="material-symbols-outlined text-primary text-[64px] mb-md">
          shopping_cart
        </span>
        <h1 className="type-page-title mb-xs">
          Votre panier est vide
        </h1>
        <p className="type-body mb-lg">
          Découvrez nos produits premium pour prendre soin de votre compagnon.
        </p>
        <Link
          href="/boutique"
          className="inline-flex items-center gap-2 bg-primary text-on-primary px-6 py-3 rounded-full text-label-md font-label-md hover:bg-primary-container transition-all"
        >
          Explorer la boutique
          <span className="material-symbols-outlined">arrow_forward</span>
        </Link>
      </PageContainer>
    );
  }

  return (
    <PageContainer size="medium">
      <div className="flex items-center justify-between mb-lg">
        <div>
          <h1 className="type-page-title mb-xs">
            Panier
          </h1>
          <p className="text-body-md font-body-md text-on-surface-variant">
            {cartCount} article{cartCount > 1 ? "s" : ""}
          </p>
        </div>
        <button
          type="button"
          onClick={clearCart}
          className="text-label-md font-label-md text-outline hover:text-primary transition-colors"
        >
          Vider le panier
        </button>
      </div>

      <div className="space-y-md mb-lg">
        {cart.map(({ product, quantity }) => (
          <div
            key={product.slug}
            className="flex gap-md bg-surface-container-lowest rounded-xl border border-outline-variant/20 p-md"
          >
            <div className="relative w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
              <Image
                src={product.image}
                alt={product.alt}
                fill
                className="object-cover"
                sizes="96px"
              />
            </div>
            <div className="flex-grow min-w-0">
              <h2 className="type-card-title truncate">
                {product.name}
              </h2>
              <p className="text-body-md text-on-surface-variant line-clamp-1 mb-sm">
                {product.description}
              </p>
              <p className="text-label-md font-label-md text-primary">
                {formatPrice(product.price)}
              </p>
            </div>
            <div className="flex flex-col items-end justify-between">
              <button
                type="button"
                onClick={() => removeFromCart(product.slug)}
                className="text-outline hover:text-primary transition-colors"
                aria-label={`Retirer ${product.name}`}
              >
                <span className="material-symbols-outlined">delete</span>
              </button>
              <div className="flex items-center gap-2 bg-surface-container-low rounded-full px-2 py-1">
                <button
                  type="button"
                  onClick={() => updateQuantity(product.slug, quantity - 1)}
                  className="w-8 h-8 rounded-full hover:bg-surface-container-high transition-colors"
                  aria-label="Diminuer la quantité"
                >
                  <span className="material-symbols-outlined text-[18px]">
                    remove
                  </span>
                </button>
                <span className="text-label-md font-label-md w-6 text-center">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => updateQuantity(product.slug, quantity + 1)}
                  className="w-8 h-8 rounded-full hover:bg-surface-container-high transition-colors"
                  aria-label="Augmenter la quantité"
                >
                  <span className="material-symbols-outlined text-[18px]">
                    add
                  </span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-primary rounded-xl p-lg text-on-primary">
        <div className="flex justify-between items-center mb-md">
          <span className="text-body-md font-body-md">Total</span>
          <span className="font-display text-headline-md text-on-primary">
            {formatPrice(cartTotal)}
          </span>
        </div>
        <p className="text-body-md text-primary-fixed mb-lg">
          Paiement en FCFA. Livraison sur Libreville sous 48h ouvrées.
        </p>
        <button
          type="button"
          className="w-full py-3 bg-secondary text-on-secondary rounded-full text-label-md font-label-md hover:scale-[1.02] transition-transform active:scale-95"
        >
          Passer la commande
        </button>
      </div>
    </PageContainer>
  );
}
