import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageContainer } from "@/components/PageContainer";
import { promoImage } from "@/lib/data";

export const metadata: Metadata = {
  title: "Notre Promesse",
  description:
    "Découvrez la promesse Skylos : 6 mois d'alimentation premium bio offerts à chaque adoption.",
};

const steps = [
  {
    icon: "search",
    title: "Trouvez votre compagnon",
    description:
      "Parcourez notre catalogue et rencontrez le chien qui correspond à votre foyer.",
  },
  {
    icon: "handshake",
    title: "Processus d'adoption",
    description:
      "Notre équipe vous accompagne à chaque étape pour une adoption responsable.",
  },
  {
    icon: "restaurant",
    title: "6 mois d'alimentation offerts",
    description:
      "Chaque chien adopté reçoit 6 mois de notre gamme premium bio et durable.",
  },
  {
    icon: "favorite",
    title: "Suivi continu",
    description:
      "Les membres du Club Skylos bénéficient d'un accompagnement personnalisé.",
  },
];

export default function PromessePage() {
  return (
    <PageContainer as="div">
      <section className="mb-xl">
        <div className="bg-primary rounded-xl overflow-hidden flex flex-col md:flex-row">
          <div className="md:w-1/2 p-lg flex flex-col justify-center">
            <span className="text-secondary-fixed text-label-md font-label-md uppercase tracking-widest mb-2">
              Parcours Durable
            </span>
            <h1 className="type-page-title text-on-primary mb-md">
              Notre Promesse pour Chaque Queue
            </h1>
            <p className="text-body-md font-body-md text-primary-fixed">
              Chez Skylos, nous croyons que chaque adoption mérite un départ
              serein. C&apos;est pourquoi chaque chien adopté via notre
              plateforme reçoit 6 mois de notre alimentation premium bio et
              durable — un cadeau de bienvenue pour lui et pour vous.
            </p>
          </div>
          <div className="md:w-1/2 relative h-64 md:h-auto min-h-[16rem]">
            <Image
              src={promoImage}
              alt="Une famille joyeuse jouant avec un chien adopté."
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </section>

      <section className="mb-xl">
        <h2 className="type-card-title mb-lg text-center">
          Comment ça fonctionne
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-md">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="bg-surface-container-lowest rounded-xl border border-outline-variant/20 p-md text-center"
            >
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-secondary-container text-on-secondary-container text-label-md font-bold mb-sm">
                {index + 1}
              </span>
              <span className="material-symbols-outlined text-primary text-[32px] mb-sm block">
                {step.icon}
              </span>
              <h3 className="type-card-title mb-xs">
                {step.title}
              </h3>
              <p className="text-body-md text-on-surface-variant">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-3xl mx-auto text-center">
        <h2 className="type-card-title mb-sm">
          Prêt à accueillir un compagnon ?
        </h2>
        <p className="type-body mb-lg">
          Explorez nos chiens disponibles ou rejoignez le Club Skylos pour
          bénéficier de tous nos avantages.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex justify-center items-center gap-2 bg-primary text-on-primary px-6 py-3 rounded-full text-label-md font-label-md hover:bg-primary-container transition-all"
          >
            Voir les chiens
          </Link>
          <Link
            href="/club"
            className="inline-flex justify-center items-center gap-2 bg-secondary text-on-secondary px-6 py-3 rounded-full text-label-md font-label-md hover:scale-105 transition-transform"
          >
            Rejoindre le Club
          </Link>
        </div>
      </section>
    </PageContainer>
  );
}
