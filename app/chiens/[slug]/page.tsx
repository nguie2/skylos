import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageContainer } from "@/components/PageContainer";
import { Badge } from "@/components/Badge";
import { RiveSlot } from "@/components/RiveSlot";
import { dogs, getDogBySlug, site } from "@/lib/data";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return dogs.map((dog) => ({ slug: dog.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const dog = getDogBySlug(slug);
  if (!dog) return { title: "Chien introuvable" };
  return {
    title: `Rencontrer ${dog.name}`,
    description: dog.description,
  };
}

export default async function DogDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const dog = getDogBySlug(slug);

  if (!dog) notFound();

  const similarDogs = dogs
    .filter((d) => d.breedSlug === dog.breedSlug && d.slug !== dog.slug)
    .slice(0, 2);

  return (
    <PageContainer>
      <Link
        href="/"
        className="inline-flex items-center gap-1 text-label-md font-label-md text-on-surface-variant hover:text-primary transition-colors mb-md"
      >
        <span className="material-symbols-outlined text-[20px]">arrow_back</span>
        Retour au catalogue
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-lg mb-xl">
        <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
          <Image
            src={dog.image}
            alt={dog.alt}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
          {dog.badges.length > 0 && (
            <div className="absolute bottom-4 left-4 flex gap-1">
              {dog.badges.map((badge) => (
                <Badge key={badge.label} {...badge} />
              ))}
            </div>
          )}
        </div>

        <div>
          <p className="text-label-md font-label-md text-on-surface-variant mb-1">
            {dog.breed} · {dog.location}
          </p>
          <h1 className="type-page-title mb-md">
            {dog.name}
          </h1>

          <div className="flex gap-md mb-md">
            <div className="bg-surface-container-low rounded-xl px-4 py-3">
              <p className="type-caption">Âge</p>
              <p className="text-label-md font-label-md text-primary">{dog.age}</p>
            </div>
            <div className="bg-surface-container-low rounded-xl px-4 py-3">
              <p className="type-caption">Taille</p>
              <p className="text-label-md font-label-md text-primary">{dog.size}</p>
            </div>
            <div className="bg-surface-container-low rounded-xl px-4 py-3">
              <p className="type-caption">Distance</p>
              <p className="text-label-md font-label-md text-primary">
                {dog.distanceKm} km
              </p>
            </div>
          </div>

          <p className="type-body mb-md">
            {dog.longDescription}
          </p>

          <div className="flex flex-wrap gap-2 mb-lg">
            {dog.traits.map((trait) => (
              <span
                key={trait}
                className="bg-secondary-container/50 text-on-secondary-container text-label-sm font-label-md font-bold px-3 py-1 rounded-full"
              >
                {trait}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={`mailto:${site.email}?subject=Adoption de ${dog.name}`}
              className="relative flex-1 py-3 bg-primary text-on-primary rounded-full text-label-md font-label-md flex items-center justify-center gap-2 hover:bg-primary-container transition-all active:scale-[0.98]"
            >
              <RiveSlot
                id={`rive-meet-${dog.slug}`}
                className="absolute left-4 w-6 h-6"
                label={`Animation Rive — rencontrer ${dog.name}`}
              />
              Demander une rencontre
              <span className="material-symbols-outlined text-[20px]">
                arrow_forward
              </span>
            </a>
            <Link
              href="/promesse"
              className="flex-1 py-3 border border-primary text-primary rounded-full text-label-md font-label-md flex items-center justify-center hover:bg-surface-container-low transition-all"
            >
              Notre promesse
            </Link>
          </div>
        </div>
      </div>

      {similarDogs.length > 0 && (
        <section>
          <h2 className="type-card-title mb-md">
            Compagnons similaires
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
            {similarDogs.map((similar) => (
              <Link
                key={similar.slug}
                href={`/chiens/${similar.slug}`}
                className="bento-card flex gap-md bg-surface-container-lowest rounded-xl border border-outline-variant/20 p-md hover:border-primary/30 transition-colors"
              >
                <div className="relative w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src={similar.image}
                    alt={similar.alt}
                    fill
                    className="object-cover"
                    sizes="96px"
                  />
                </div>
                <div>
                  <h3 className="type-card-title">
                    {similar.name}
                  </h3>
                  <p className="text-body-md text-on-surface-variant line-clamp-2">
                    {similar.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </PageContainer>
  );
}
