import type { Metadata } from "next";
import { Epilogue, Plus_Jakarta_Sans } from "next/font/google";
import { SiteShell } from "@/components/SiteShell";
import { AppProvider } from "@/context/AppContext";
import "./globals.css";

const epilogue = Epilogue({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-epilogue",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plus-jakarta",
});

export const metadata: Metadata = {
  title: {
    default: "Skylos — Trouvez Votre Chien",
    template: "%s | Skylos",
  },
  description:
    "Découvrez des compagnons qui attendent un foyer pour la vie. Marketplace d'adoption canine premium au Gabon.",
  metadataBase: new URL("https://skylos.ga"),
  openGraph: {
    locale: "fr_GA",
    title: "Skylos — Trouvez Votre Chien",
    description:
      "Marketplace d'adoption canine premium au Gabon. Trouvez votre nouveau meilleur ami.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="light">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${epilogue.variable} ${plusJakarta.variable} text-body-md text-on-surface font-body-md overflow-x-hidden`}
      >
        <AppProvider>
          <SiteShell>{children}</SiteShell>
        </AppProvider>
      </body>
    </html>
  );
}
