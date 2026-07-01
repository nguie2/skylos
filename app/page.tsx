import { Suspense } from "react";
import { HomeCatalog } from "@/components/HomeCatalog";
import { LandingHero } from "@/components/LandingHero";

export default function HomePage() {
  return (
    <>
      <LandingHero />
      <Suspense>
        <HomeCatalog />
      </Suspense>
    </>
  );
}
