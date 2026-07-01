"use client";

import Link from "next/link";
import { PageContainer } from "@/components/PageContainer";
import { DogCard } from "@/components/DogCard";
import { useApp } from "@/context/AppContext";
import { dogs, site } from "@/lib/data";

export default function ProfilPage() {
  const { favorites } = useApp();
  const favoriteDogs = dogs.filter((dog) => favorites.has(dog.slug));

  return (
    <PageContainer>
      <section className="mb-lg">
        <h1 className="type-page-title mb-xs">
          Mon Profil
        </h1>
        <p className="type-body max-w-2xl">
          Gérez vos favoris et accédez rapidement à vos compagnons préférés.
        </p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-lg mb-xl">
        <div className="lg:col-span-1 bg-surface-container-lowest rounded-xl border border-outline-variant/20 p-lg">
          <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-md">
            <span className="material-symbols-outlined text-primary text-[40px]">
              person
            </span>
          </div>
          <h2 className="type-card-title mb-xs">
            Membre Skylos
          </h2>
          <p className="text-body-md text-on-surface-variant mb-md">
            Connectez-vous au Club Skylos pour débloquer tous les avantages
            membres.
          </p>
          <Link
            href="/club"
            className="inline-flex w-full justify-center py-3 bg-primary text-on-primary rounded-full text-label-md font-label-md hover:bg-primary-container transition-all"
          >
            Rejoindre le Club
          </Link>
        </div>

        <div className="lg:col-span-2 bg-surface-container-low rounded-xl border border-outline-variant/20 p-lg">
          <h2 className="type-card-title mb-md">
            Mes informations
          </h2>
          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-md text-body-md">
            <div>
              <dt className="text-on-surface-variant mb-1">Localisation</dt>
              <dd className="text-primary font-semibold">{site.address}</dd>
            </div>
            <div>
              <dt className="text-on-surface-variant mb-1">Contact Skylos</dt>
              <dd className="text-primary font-semibold">{site.phone}</dd>
            </div>
            <div>
              <dt className="text-on-surface-variant mb-1">Favoris</dt>
              <dd className="text-primary font-semibold">
                {favoriteDogs.length} chien{favoriteDogs.length !== 1 ? "s" : ""}
              </dd>
            </div>
            <div>
              <dt className="text-on-surface-variant mb-1">Horaires</dt>
              <dd className="text-primary font-semibold">{site.hours}</dd>
            </div>
          </dl>
        </div>
      </div>

      <section>
        <h2 className="type-card-title mb-md">
          Mes favoris
        </h2>
        {favoriteDogs.length === 0 ? (
          <div className="text-center py-xl bg-surface-container-low rounded-xl border border-outline-variant/20">
            <span className="material-symbols-outlined text-primary text-[48px] mb-sm">
              favorite
            </span>
            <p className="text-body-md text-on-surface-variant mb-md">
              Vous n&apos;avez pas encore de favoris. Explorez nos compagnons !
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-primary font-label-md hover:underline"
            >
              Voir les chiens disponibles
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md">
            {favoriteDogs.map((dog) => (
              <DogCard key={dog.slug} dog={dog} />
            ))}
          </div>
        )}
      </section>
    </PageContainer>
  );
}
