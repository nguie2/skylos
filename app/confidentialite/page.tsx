import type { Metadata } from "next";
import Link from "next/link";
import { PageContainer } from "@/components/PageContainer";
import { site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Confidentialité",
};

export default function ConfidentialitePage() {
  return (
    <PageContainer size="narrow">
      <h1 className="type-page-title mb-lg">
        Politique de confidentialité
      </h1>
      <div className="space-y-md text-body-md text-on-surface-variant">
        <section>
          <h2 className="type-card-title mb-sm">
            Données collectées
          </h2>
          <p>
            Lors de votre inscription au Club Skylos ou d&apos;une demande
            d&apos;adoption, nous collectons votre nom, e-mail et numéro de
            téléphone afin de vous accompagner dans votre démarche.
          </p>
        </section>
        <section>
          <h2 className="type-card-title mb-sm">
            Utilisation des données
          </h2>
          <p>
            Vos données sont utilisées exclusivement pour le suivi de vos
            demandes, la gestion de votre compte membre et la communication
            relative à nos services.
          </p>
        </section>
        <section>
          <h2 className="type-card-title mb-sm">
            Stockage local
          </h2>
          <p>
            Vos favoris et votre panier sont stockés localement dans votre
            navigateur. Aucune donnée de navigation n&apos;est transmise à des
            tiers.
          </p>
        </section>
        <section>
          <h2 className="type-card-title mb-sm">
            Contact
          </h2>
          <p>
            Pour toute question relative à vos données, contactez-nous à{" "}
            <a href={`mailto:${site.email}`} className="text-primary hover:underline">
              {site.email}
            </a>
            .
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
