import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Boutique",
  description:
    "Alimentation premium, soins et accessoires pour chiens. Livraison sur Libreville.",
};

export default function BoutiqueLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
