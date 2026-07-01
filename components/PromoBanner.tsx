import Image from "next/image";
import Link from "next/link";
import { RiveSlot } from "@/components/RiveSlot";
import { promoImage } from "@/lib/data";

export function PromoBanner() {
  return (
    <div className="md:col-span-2 bento-card group bg-primary rounded-xl overflow-hidden p-0 flex flex-col md:flex-row relative">
      <RiveSlot
        id="rive-promo"
        className="absolute top-4 right-4 w-16 h-16 z-10"
        label="Animation Rive — bannière promotionnelle"
      />
      <div className="md:w-1/2 p-lg flex flex-col justify-center">
        <span className="text-secondary-fixed text-label-md font-label-md uppercase tracking-widest mb-2">
          Parcours Durable
        </span>
        <h3 className="font-display text-headline-md text-on-primary mb-md">
          Notre Promesse pour Chaque Queue
        </h3>
        <p className="text-body-md font-body-md text-primary-fixed mb-lg">
          Chaque chien adopté via Skylos reçoit 6 mois de notre alimentation
          premium bio et durable.
        </p>
        <div className="flex gap-4">
          <Link
            href="/promesse"
            className="bg-secondary text-on-secondary px-6 py-3 rounded-full text-label-md font-label-md hover:scale-105 transition-transform active:scale-95 inline-flex"
          >
            En savoir plus
          </Link>
        </div>
      </div>
      <div className="md:w-1/2 relative h-64 md:h-auto min-h-[16rem]">
        <Image
          className="w-full h-full object-cover"
          src={promoImage}
          alt="Une famille joyeuse jouant avec un chien adopté dans un jardin moderne et durable."
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </div>
  );
}
