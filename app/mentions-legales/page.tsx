import type { Metadata } from "next";
import Link from "next/link";
import { PageContainer } from "@/components/PageContainer";
import { site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Mentions légales",
};

export default function MentionsLegalesPage() {
  return (
    <PageContainer size="narrow">
      <h1 className="type-page-title mb-lg">
        Mentions légales
      </h1>
      <div className="prose-space space-y-md text-body-md text-on-surface-variant">
        <section>
          <h2 className="type-card-title mb-sm">
            Éditeur du site
          </h2>
          <p>
            {site.name} — {site.address}
            <br />
            E-mail : {site.email}
            <br />
            Téléphone : {site.phone}
          </p>
        </section>
        <section>
          <h2 className="type-card-title mb-sm">
            Activité
          </h2>
          <p>
            Skylos est une plateforme d&apos;adoption canine et de produits
            premium pour animaux de compagnie, basée au Gabon.
          </p>
        </section>
        <section>
          <h2 className="type-card-title mb-sm">
            Propriété intellectuelle
          </h2>
          <p>
            L&apos;ensemble du contenu de ce site (textes, images, logo) est
            protégé. Toute reproduction sans autorisation est interdite.
          </p>
        </section>
      </div>
      <Link
        href="/"
        className="inline-flex items-center gap-2 mt-xl text-primary font-label-md hover:underline"
      >
        <span className="material-symbols-outlined">arrow_back</span>
        Retour à l&apos;accueil
      </Link>
    </PageContainer>
  );
}
