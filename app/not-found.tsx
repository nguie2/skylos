import Link from "next/link";
import { PageContainer } from "@/components/PageContainer";

export default function NotFound() {
  return (
    <PageContainer size="narrow" className="text-center">
      <span className="material-symbols-outlined text-primary text-[64px] mb-md">
        search_off
      </span>
      <h1 className="type-page-title mb-xs">
        Page introuvable
      </h1>
      <p className="type-body mb-lg">
        La page que vous recherchez n&apos;existe pas ou a été déplacée.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 bg-primary text-on-primary px-6 py-3 rounded-full text-label-md font-label-md hover:bg-primary-container transition-all"
      >
        Retour à l&apos;accueil
      </Link>
    </PageContainer>
  );
}
