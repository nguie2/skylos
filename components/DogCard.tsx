"use client";

import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/Badge";
import { RiveSlot } from "@/components/RiveSlot";
import { useApp } from "@/context/AppContext";
import type { Dog } from "@/lib/types";

export function DogCard({ dog, priority }: { dog: Dog; priority?: boolean }) {
  const { isFavorite, toggleFavorite } = useApp();
  const favorite = isFavorite(dog.slug);

  return (
    <div className="bento-card group bg-surface-container-lowest rounded-xl overflow-hidden border border-outline-variant/20 p-md flex flex-col relative">
      <div className="absolute top-6 right-6 z-10">
        <button
          type="button"
          onClick={() => toggleFavorite(dog.slug)}
          className="w-10 h-10 rounded-full bg-surface/80 backdrop-blur-md flex items-center justify-center text-primary hover:bg-secondary-container transition-colors relative"
          aria-label={
            favorite
              ? `Retirer ${dog.name} des favoris`
              : `Ajouter ${dog.name} aux favoris`
          }
          aria-pressed={favorite}
        >
          <RiveSlot
            id={`rive-favorite-${dog.slug}`}
            className="absolute inset-0"
            label={`Animation Rive — favori ${dog.name}`}
          />
          <span
            className="material-symbols-outlined"
            style={{
              fontVariationSettings: favorite ? "'FILL' 1" : "'FILL' 0",
            }}
          >
            favorite
          </span>
        </button>
      </div>

      <Link href={`/chiens/${dog.slug}`} className="block">
        <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden mb-sm">
          <Image
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            src={dog.image}
            alt={dog.alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={priority}
          />
          {dog.badges.length > 0 && (
            <div className="absolute bottom-2 left-2 flex gap-1">
              {dog.badges.map((badge) => (
                <Badge key={badge.label} {...badge} />
              ))}
            </div>
          )}
        </div>
      </Link>

      <div className="flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-xs">
          <div>
            <Link href={`/chiens/${dog.slug}`}>
              <h3 className="type-card-title hover:underline">
                {dog.name}
              </h3>
            </Link>
            <p className="text-label-md font-label-md text-on-surface-variant">
              {dog.breed}
            </p>
          </div>
          <div className="text-right">
            <p className="text-label-md font-label-md text-primary">{dog.age}</p>
            <p className="type-caption">{dog.size}</p>
          </div>
        </div>
        <p className="text-body-md text-on-surface-variant line-clamp-2 mb-gutter">
          {dog.description}
        </p>
        <Link
          href={`/chiens/${dog.slug}`}
          className="mt-auto w-full py-3 bg-primary text-on-primary rounded-full text-label-md font-label-md flex items-center justify-center gap-2 hover:bg-primary-container hover:text-on-primary-container transition-all active:scale-[0.98] relative"
        >
          <RiveSlot
            id={`rive-meet-${dog.slug}`}
            className="absolute left-4 w-6 h-6"
            label={`Animation Rive — rencontrer ${dog.name}`}
          />
          Rencontrer {dog.name}
          <span className="material-symbols-outlined text-[20px]">
            arrow_forward
          </span>
        </Link>
      </div>
    </div>
  );
}
