import { CardHoverEffect, HeaderScrollEffect } from "@/components/ClientEffects";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MobileNav } from "@/components/MobileNav";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HeaderScrollEffect />
      <CardHoverEffect />
      <div className="sticky top-0 z-50">
        <AnnouncementBar />
        <Header />
      </div>
      <div className="min-h-screen flex flex-col">
        <div className="flex-1 pb-28 md:pb-0">{children}</div>
        <Footer />
      </div>
      <MobileNav />
    </>
  );
}
