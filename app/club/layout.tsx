import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rejoindre le Club",
  description:
    "Rejoignez le Club Skylos et bénéficiez d'avantages exclusifs au Gabon.",
};

export default function ClubLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
