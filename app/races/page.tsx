import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageContainer } from "@/components/PageContainer";
import { breeds } from "@/lib/data";

export const metadata: Metadata = {
  title: "Races",
  description:
    "Découvrez les races de chiens disponibles à l'adoption via Skylos au Gabon.",
};

export default function RacesPage() {
  return (
    <PageContainer>
      <section className="mb-lg">
        <h1 className="type-page-title mb-xs">
          Nos Races
        </h1>
        <p className="type-body max-w-2xl">
          Chaque race a son caractère unique. Explorez nos compagnons disponibles
          et trouvez celui qui correspond à votre mode de vie.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
        {breeds.map((breed) => (
          <article
            key={breed.slug}
            className="bento-card bg-surface-container-lowest rounded-xl overflow-hidden border border-outline-variant/20 flex flex-col md:flex-row"
          >
            <div className="relative w-full md:w-2/5 aspect-[4/3] md:aspect-auto md:min-h-[220px]">
              <Image
                src={breed.image}
                alt={breed.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
            <div className="p-md flex flex-col flex-grow">
              <div className="flex items-start justify-between gap-3 mb-xs">
                <h2 className="type-card-title">
                  {breed.name}
                </h2>
                <span className="bg-secondary-container text-on-secondary-container text-label-sm font-label-md font-bold px-2 py-1 rounded-full whitespace-nowrap">
                  {breed.count} disponible{breed.count > 1 ? "s" : ""}
                </span>
              </div>
              <p className="text-body-md text-on-surface-variant mb-sm">
                {breed.description}
              </p>
              <p className="type-caption mb-sm">{breed.size}</p>
              <div className="flex flex-wrap gap-2 mb-gutter">
                {breed.temperament.map((trait) => (
                  <span
                    key={trait}
                    className="bg-surface-container-low text-on-surface-variant text-label-sm font-label-md font-bold px-3 py-1 rounded-full border border-outline-variant/20"
                  >
                    {trait}
                  </span>
                ))}
              </div>
              <Link
                href={`/?breed=${breed.slug}`}
                className="mt-auto inline-flex items-center justify-center gap-2 py-3 px-5 bg-primary text-on-primary rounded-full text-label-md font-label-md hover:bg-primary-container transition-all"
              >
                Voir les {breed.name}
                <span className="material-symbols-outlined text-[20px]">
                  arrow_forward
                </span>
              </Link>
            </div>
          </article>
        ))}
      </div>

      <section className="mt-xl bg-surface-container-low rounded-xl border border-outline-variant/20 p-lg">
        <h2 className="type-card-title mb-sm">
          Besoin d&apos;aide pour choisir ?
        </h2>
        <p className="text-body-md text-on-surface-variant mb-md max-w-2xl">
          Notre équipe à Libreville vous accompagne gratuitement pour trouver la
          race et le compagnon adaptés à votre foyer.
        </p>
        <Link
          href="/club"
          className="inline-flex bg-secondary text-on-secondary px-6 py-3 rounded-full text-label-md font-label-md hover:scale-105 transition-transform"
        >
          Rejoindre le Club Skylos
        </Link>
      </section>
    </PageContainer>
  );
}
