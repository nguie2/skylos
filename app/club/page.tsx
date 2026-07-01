"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { PageContainer } from "@/components/PageContainer";

const benefits = [
  {
    icon: "restaurant",
    title: "Offres alimentation",
    description:
      "Accédez à des remises exclusives sur notre gamme bio premium.",
  },
  {
    icon: "pets",
    title: "Adoption prioritaire",
    description:
      "Soyez informé en premier des nouveaux compagnons disponibles.",
  },
  {
    icon: "support_agent",
    title: "Conseils personnalisés",
    description:
      "Bénéficiez de l'accompagnement de notre équipe à Libreville.",
  },
  {
    icon: "celebration",
    title: "Événements membres",
    description:
      "Participez à nos rencontres et ateliers dédiés aux propriétaires.",
  },
];

export default function ClubPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <PageContainer size="medium">
      <section className="mb-lg text-center max-w-2xl mx-auto">
        <span className="inline-block bg-secondary-container text-on-secondary-container text-label-md font-label-md px-4 py-1 rounded-full mb-sm">
          Club Skylos
        </span>
        <h1 className="type-page-title mb-xs">
          Rejoindre le Club
        </h1>
        <p className="type-body">
          Rejoignez une communauté de familles gabonaises passionnées par le
          bien-être de leurs compagnons à quatre pattes.
        </p>
      </section>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-md mb-xl">
        {benefits.map((benefit) => (
          <div
            key={benefit.title}
            className="bg-surface-container-lowest rounded-xl border border-outline-variant/20 p-md"
          >
            <span className="material-symbols-outlined text-primary text-[32px] mb-sm">
              {benefit.icon}
            </span>
            <h2 className="type-card-title mb-xs">
              {benefit.title}
            </h2>
            <p className="text-body-md text-on-surface-variant">
              {benefit.description}
            </p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-lg items-start">
        {submitted ? (
          <div className="bg-primary rounded-xl p-lg text-on-primary text-center lg:col-span-2">
            <span className="material-symbols-outlined text-secondary-fixed text-[48px] mb-sm">
              check_circle
            </span>
            <h2 className="font-display text-headline-md text-on-primary mb-sm">
              Bienvenue au Club Skylos !
            </h2>
            <p className="text-body-md font-body-md text-primary-fixed mb-md">
              Votre inscription a été enregistrée. Notre équipe vous contactera
              très prochainement.
            </p>
            <Link
              href="/"
              className="inline-flex bg-secondary text-on-secondary px-6 py-3 rounded-full text-label-md font-label-md"
            >
              Découvrir nos chiens
            </Link>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-surface-container-lowest rounded-xl border border-outline-variant/20 p-lg"
          >
            <h2 className="type-card-title mb-md">
              Inscription gratuite
            </h2>
            <div className="space-y-md">
              <label className="block">
                <span className="text-label-md font-label-md text-on-surface-variant mb-1 block">
                  Nom complet
                </span>
                <input
                  required
                  type="text"
                  name="name"
                  placeholder="Votre nom"
                  className="w-full px-4 py-3 rounded-lg border border-outline-variant/30 bg-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                />
              </label>
              <label className="block">
                <span className="text-label-md font-label-md text-on-surface-variant mb-1 block">
                  Téléphone
                </span>
                <input
                  required
                  type="tel"
                  name="phone"
                  placeholder="+241 06 00 00 00"
                  className="w-full px-4 py-3 rounded-lg border border-outline-variant/30 bg-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                />
              </label>
              <label className="block">
                <span className="text-label-md font-label-md text-on-surface-variant mb-1 block">
                  E-mail
                </span>
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="vous@exemple.ga"
                  className="w-full px-4 py-3 rounded-lg border border-outline-variant/30 bg-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                />
              </label>
            </div>
            <button
              type="submit"
              className="mt-lg w-full py-3 bg-primary text-on-primary rounded-full text-label-md font-label-md hover:bg-primary-container transition-all active:scale-[0.98]"
            >
              Rejoindre gratuitement
            </button>
          </form>
        )}

        {!submitted && (
          <div className="bg-primary rounded-xl p-lg text-on-primary">
            <h2 className="font-display text-headline-md text-on-primary mb-md">
              Notre Promesse pour Chaque Queue
            </h2>
            <p className="text-body-md font-body-md text-primary-fixed mb-lg">
              Les membres du Club Skylos bénéficient de 6 mois d&apos;alimentation
              premium bio offerts lors de chaque adoption.
            </p>
            <Link
              href="/promesse"
              className="inline-flex items-center gap-2 text-secondary-fixed hover:text-on-primary transition-colors text-label-md font-label-md"
            >
              En savoir plus sur notre promesse
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
        )}
      </div>
    </PageContainer>
  );
}
