import Image from "next/image";
import Link from "next/link";
import { subscriptionBox } from "@/lib/data";

export function SubscriptionBento() {
  return (
    <div className="md:col-span-2 bento-card bg-primary-container rounded-xl overflow-hidden flex flex-col md:flex-row relative">
      <div className="md:w-1/2 p-md md:p-lg flex flex-col justify-center z-10">
        <span className="text-label-sm font-label-md uppercase tracking-widest text-secondary-fixed mb-2 inline-block">
          {subscriptionBox.badge}
        </span>
        <h2 className="font-display text-headline-md text-on-primary mb-xs">
          {subscriptionBox.title}
        </h2>
        <p className="text-body-md font-body-md text-primary-fixed mb-md max-w-md">
          {subscriptionBox.description}
        </p>
        <Link
          href={subscriptionBox.href}
          className="inline-flex w-fit items-center gap-2 bg-secondary text-on-secondary px-5 py-2.5 rounded-full text-label-md font-label-md hover:scale-105 transition-transform active:scale-95"
        >
          {subscriptionBox.cta}
          <span className="material-symbols-outlined text-[18px]">
            arrow_forward
          </span>
        </Link>
      </div>
      <div className="md:w-1/2 relative h-48 md:h-auto md:min-h-[12rem] z-10">
        <Image
          src={subscriptionBox.image}
          alt={subscriptionBox.imageAlt}
          fill
          className="object-contain p-4"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary-fixed-dim/20 to-transparent pointer-events-none" />
    </div>
  );
}
