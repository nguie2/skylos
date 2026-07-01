import type { Breed, Dog, HeaderNavItem, NavItem, Product } from "./types";

export const site = {
  name: "Skylos",
  tagline: "Compagnons premium au Gabon",
  email: "contact@skylos.ga",
  phone: "+241 06 00 00 00",
  address: "Libreville, Gabon",
  hours: "Lun – Sam, 9h – 18h",
  announcement: "Livraison gratuite dès 50 000 FCFA sur Libreville",
  freeShippingThreshold: 50000,
} as const;

export const hero = {
  title: "L'alimentation réinventée",
  subtitle:
    "Des produits durables pour vos compagnons. Frais, sains et formulés avec des ingrédients bio — conçus avec amour au Gabon.",
  primaryCta: { label: "Voir la boutique", href: "/boutique" },
  secondaryCta: { label: "Trouver un chien", href: "#catalogue" },
  highlights: [
    { icon: "eco", label: "Ingrédients bio" },
    { icon: "pets", label: "7 chiens adoptables" },
    { icon: "local_shipping", label: "Livraison Libreville" },
    { icon: "verified", label: "Qualité certifiée" },
  ],
  stats: [
    { value: "7+", label: "Compagnons disponibles" },
    { value: "100%", label: "Produits sélectionnés" },
    { value: "Libreville", label: "Livraison locale" },
    { value: "24/7", label: "Support client" },
  ],
  image:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuB9a86nO-sGNoK1ywRWO5HkBzI8pyGIS-tSJJv02pzAfnjUoHyotyiaEPQEepB4Apgo0yoIHsy2JdVdBz1w3qTSWFvX0lTVUtOzCFiIloG9ift-chKQCJQ3j1K9bqSUC1ZtT9KyhXKVW6ZCUfPggtmuVL6BfYgEaXSU99CoWFiS3MBCZslc-ARdkCoyAmgXtWVGRw6d0orIAbEbTeEPwGb2fE-FaucyhmXnAaiBiju5lioY2tOPRR9glJOmAJcrHld7vOeERzZR2-c",
  imageAlt:
    "Bouledogue français crème allongé sur un tissu jaune moutarde, regardant l'objectif.",
} as const;

export const headerNavItems: HeaderNavItem[] = [
  { href: "/boutique", label: "Boutique" },
  { href: "/promesse", label: "Durabilité" },
  { href: "/club", label: "Notre histoire" },
];

export const navItems: NavItem[] = [
  { href: "/", label: "Accueil", icon: "home" },
  { href: "/races", label: "Races", icon: "pets" },
  { href: "/boutique", label: "Boutique", icon: "shopping_bag" },
  { href: "/panier", label: "Panier", icon: "shopping_cart" },
];

export const footerLinks = {
  navigation: [
    { href: "/", label: "Accueil" },
    { href: "/races", label: "Races" },
    { href: "/boutique", label: "Boutique" },
    { href: "/promesse", label: "Notre promesse" },
    { href: "/club", label: "Rejoindre le Club" },
  ],
  legal: [
    { href: "/mentions-legales", label: "Mentions légales" },
    { href: "/confidentialite", label: "Confidentialité" },
  ],
} as const;

export const filterOptions = {
  breeds: [
    { value: "all", label: "Toutes" },
    { value: "golden-retriever", label: "Golden Retriever" },
    { value: "levrier", label: "Lévrier" },
    { value: "bouledogue-francais", label: "Bouledogue français" },
    { value: "border-collie", label: "Border Collie" },
  ],
  ages: [
    { value: "all", label: "Tous" },
    { value: "chiot", label: "Chiot" },
    { value: "adulte", label: "Adulte" },
    { value: "senior", label: "Senior" },
  ],
  sizes: [
    { value: "all", label: "Toutes" },
    { value: "petite", label: "Petite" },
    { value: "moyenne", label: "Moyenne" },
    { value: "grande", label: "Grande" },
  ],
  distances: [
    { value: 5, label: "5 km" },
    { value: 10, label: "10 km" },
    { value: 25, label: "25 km" },
    { value: 50, label: "50 km" },
  ],
  sorts: [
    { value: "recent", label: "Plus récents" },
    { value: "name", label: "Nom (A – Z)" },
    { value: "age", label: "Âge" },
  ],
} as const;

export const dogs: Dog[] = [
  {
    slug: "buddy",
    name: "Buddy",
    breed: "Golden Retriever",
    breedSlug: "golden-retriever",
    age: "6 mois",
    ageCategory: "chiot",
    size: "Taille moyenne",
    sizeCategory: "moyenne",
    distanceKm: 8,
    description:
      "Buddy est une boule de joie qui adore nager l'après-midi et jouer à rapporter la balle. Il s'entend très bien avec les enfants et les autres chiens.",
    longDescription:
      "Buddy a été accueilli par Skylos après une période difficile. Aujourd'hui, il est un chiot énergique et affectueux qui cherche une famille active au Gabon. Il adore l'eau, les jeux en extérieur et les longues promenades. Buddy est sociable, obéissant pour son âge et prêt à rejoindre un foyer aimant.",
    badges: [
      { label: "Alimentation Bio", variant: "primary" },
      { label: "Sauvé", variant: "secondary" },
    ],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAwDpee8ZPiFVy_DgsBytDW89W-YZd0s9NXqnYZoCEjXyoQ-gS3EKJ28VNGFqMDJhGJ8BGQQiiTei5q8DpH0FI5mLQDTsyPPnIXdSjB56YzxjT5uwezHChh0h1ejalu85_zZ6-VGr5iL5z33giAHiL8-aQhsxFC4W6aplDBRZJUE-TDlUSEWzeKXIys7eWJ_KAgVKP3n-_xzotH5SCc83ikg9InrNoEXZQlxfkRbqvxCdIPM1jz1Fv9p-FGSQeN-vaZ6xPg7ucs6Fs",
    alt: "Portrait d'un chiot Golden Retriever amical assis dans un parc ensoleillé.",
    traits: ["Sociable", "Joueur", "Bon avec les enfants"],
    location: "Libreville",
  },
  {
    slug: "luna",
    name: "Luna",
    breed: "Lévrier",
    breedSlug: "levrier",
    age: "2 ans",
    ageCategory: "adulte",
    size: "Grande taille",
    sizeCategory: "grande",
    distanceKm: 12,
    description:
      "Luna est une âme élégante et calme qui apprécie les soirées tranquilles et les longues promenades gracieuses au parc.",
    longDescription:
      "Luna est une lévrière douce et raffinée, idéale pour un foyer calme. Elle aime les promenades quotidiennes et les moments de repos à l'ombre. Luna est propre, obéissante et s'adapte parfaitement à la vie en appartement ou en maison avec jardin.",
    badges: [{ label: "Athlétique", variant: "primary" }],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBaCPZQrxFhaRUqy-Er0DsrV6KErGZ2mAhR88FH9LVG1r-keJNeSivg3NPo10-k2k39TGRMQGdUf2wktYK_Asc8GsW5PE7PcWnMhnAnSqzETzJXInMCviLkWEMnrhhmCoMJCfVsxk3Va4MUxFPZIlMv2ueppCv4_1RRpIRKoQ6Evz1kuKecudhNja6Uw41lRmw3vMqSK9_7GB2rwldRMKqZ2iqNfqVbOR-wyHp3Ua8AKd_UVhgn6Ggz3JAImvTOiBQPzaubP-dCMec",
    alt: "Lévrier gris élégant dans un cadre minimaliste.",
    traits: ["Calme", "Élégante", "Disciplinée"],
    location: "Libreville",
  },
  {
    slug: "nugget",
    name: "Nugget",
    breed: "Bouledogue français",
    breedSlug: "bouledogue-francais",
    age: "1 an",
    ageCategory: "adulte",
    size: "Petite taille",
    sizeCategory: "petite",
    distanceKm: 5,
    description:
      "Un petit format avec une personnalité immense. Nugget est un professionnel des câlins et un champion des siestes.",
    longDescription:
      "Nugget est un compagnon attachant au caractère expressif. Il adore les câlins, les siestes au frais et les petites promenades quotidiennes. Nugget est propre en intérieur et s'entend bien avec les adultes comme avec les enfants respectueux.",
    badges: [{ label: "Propre en intérieur", variant: "secondary" }],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB9a86nO-sGNoK1ywRWO5HkBzI8pyGIS-tSJJv02pzAfnjUoHyotyiaEPQEepB4Apgo0yoIHsy2JdVdBz1w3qTSWFvX0lTVUtOzCFiIloG9ift-chKQCJQ3j1K9bqSUC1ZtT9KyhXKVW6ZCUfPggtmuVL6BfYgEaXSU99CoWFiS3MBCZslc-ARdkCoyAmgXtWVGRw6d0orIAbEbTeEPwGb2fE-FaucyhmXnAaiBiju5lioY2tOPRR9glJOmAJcrHld7vOeERzZR2-c",
    alt: "Bouledogue français joueur avec un pelage bringé unique.",
    traits: ["Câlin", "Joueur", "Adaptable"],
    location: "Libreville",
  },
  {
    slug: "skye",
    name: "Skye",
    breed: "Border Collie",
    breedSlug: "border-collie",
    age: "3 ans",
    ageCategory: "adulte",
    size: "Taille moyenne",
    sizeCategory: "moyenne",
    distanceKm: 15,
    description:
      "Skye est très intelligente et énergique. Elle a besoin d'une famille active capable de suivre son amour pour apprendre de nouveaux tours.",
    longDescription:
      "Skye est une Border Collie brillante qui a besoin de stimulation mentale et physique. Elle excelle dans l'apprentissage de tours et adore les activités en plein air. Skye convient à une famille active qui pourra lui offrir de l'espace et de l'attention.",
    badges: [],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBJwC1p6EB0q40zZQCSqywTeZDiGDRMFjrNtgPG3Ul2q9MtBxnBcSs4pU3Fz0EBJJM75UZQTNbVNEXNyR3DG2mZI3-0XHpaFLquY1s0IAXtU0eS6Uct8di9oUCSbozLDbBY6UjGJwnAeNUU6XJOh3KehzTYqJcfTLhZmvV5QGYxv_MVfY57SFiOB79H45EPYxm0foyjtut37k9xWM0DGRTjHLGCILfyXxxzlODsU4BFEHKVSDKb8w0DuV9SpEoMrr2Rv2GyNFGXkos",
    alt: "Border Collie majestueux assis dans une prairie luxuriante.",
    traits: ["Intelligente", "Énergique", "Obéissante"],
    location: "Libreville",
  },
  {
    slug: "rocky",
    name: "Rocky",
    breed: "Golden Retriever",
    breedSlug: "golden-retriever",
    age: "4 ans",
    ageCategory: "adulte",
    size: "Grande taille",
    sizeCategory: "grande",
    distanceKm: 7,
    description:
      "Rocky est un compagnon fidèle et protecteur, parfait pour une famille qui recherche un chien équilibré et affectueux.",
    longDescription:
      "Rocky est un Golden Retriever mature au tempérament stable. Il est loyal, patient et adore accompagner sa famille lors des sorties. Rocky est habitué aux enfants et aux promenades quotidiennes.",
    badges: [{ label: "Alimentation Bio", variant: "primary" }],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAwDpee8ZPiFVy_DgsBytDW89W-YZd0s9NXqnYZoCEjXyoQ-gS3EKJ28VNGFqMDJhGJ8BGQQiiTei5q8DpH0FI5mLQDTsyPPnIXdSjB56YzxjT5uwezHChh0h1ejalu85_zZ6-VGr5iL5z33giAHiL8-aQhsxFC4W6aplDBRZJUE-TDlUSEWzeKXIys7eWJ_KAgVKP3n-_xzotH5SCc83ikg9InrNoEXZQlxfkRbqvxCdIPM1jz1Fv9p-FGSQeN-vaZ6xPg7ucs6Fs",
    alt: "Golden Retriever adulte au pelage doré.",
    traits: ["Fidèle", "Protecteur", "Patient"],
    location: "Libreville",
  },
  {
    slug: "milo",
    name: "Milo",
    breed: "Bouledogue français",
    breedSlug: "bouledogue-francais",
    age: "3 mois",
    ageCategory: "chiot",
    size: "Petite taille",
    sizeCategory: "petite",
    distanceKm: 3,
    description:
      "Milo est un chiot curieux et espiègle qui cherche une famille patiente pour l'accompagner dans ses premiers pas.",
    longDescription:
      "Milo est un jeune bouledogue français plein de vie. Il découvre le quotidien avec enthousiasme et a besoin d'une famille attentive pour son éducation. Milo est idéal pour un foyer calme et aimant.",
    badges: [{ label: "Sauvé", variant: "secondary" }],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB9a86nO-sGNoK1ywRWO5HkBzI8pyGIS-tSJJv02pzAfnjUoHyotyiaEPQEepB4Apgo0yoIHsy2JdVdBz1w3qTSWFvX0lTVUtOzCFiIloG9ift-chKQCJQ3j1K9bqSUC1ZtT9KyhXKVW6ZCUfPggtmuVL6BfYgEaXSU99CoWFiS3MBCZslc-ARdkCoyAmgXtWVGRw6d0orIAbEbTeEPwGb2fE-FaucyhmXnAaiBiju5lioY2tOPRR9glJOmAJcrHld7vOeERzZR2-c",
    alt: "Chiot Bouledogue français curieux.",
    traits: ["Curieux", "Espiègle", "Affectueux"],
    location: "Libreville",
  },
  {
    slug: "zara",
    name: "Zara",
    breed: "Lévrier",
    breedSlug: "levrier",
    age: "5 ans",
    ageCategory: "senior",
    size: "Grande taille",
    sizeCategory: "grande",
    distanceKm: 20,
    description:
      "Zara est une compagne sereine qui apprécie les rythmes doux et les moments de complicité au quotidien.",
    longDescription:
      "Zara est une lévrière senior au caractère apaisant. Elle recherche un foyer tranquille où profiter de promenades modérées et de longues siestes. Zara est propre, affectueuse et facile à vivre.",
    badges: [{ label: "Athlétique", variant: "primary" }],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBaCPZQrxFhaRUqy-Er0DsrV6KErGZ2mAhR88FH9LVG1r-keJNeSivg3NPo10-k2k39TGRMQGdUf2wktYK_Asc8GsW5PE7PcWnMhnAnSqzETzJXInMCviLkWEMnrhhmCoMJCfVsxk3Va4MUxFPZIlMv2ueppCv4_1RRpIRKoQ6Evz1kuKecudhNja6Uw41lRmw3vMqSK9_7GB2rwldRMKqZ2iqNfqVbOR-wyHp3Ua8AKd_UVhgn6Ggz3JAImvTOiBQPzaubP-dCMec",
    alt: "Lévrier senior au regard doux.",
    traits: ["Sereine", "Affectueuse", "Facile à vivre"],
    location: "Libreville",
  },
  {
    slug: "nova",
    name: "Nova",
    breed: "Border Collie",
    breedSlug: "border-collie",
    age: "8 mois",
    ageCategory: "chiot",
    size: "Taille moyenne",
    sizeCategory: "moyenne",
    distanceKm: 9,
    description:
      "Nova est une chiot vive et attentive, prête à apprendre et à explorer aux côtés d'une famille dynamique.",
    longDescription:
      "Nova est une Border Collie en pleine croissance, très réceptive à l'éducation. Elle a besoin d'activités régulières et d'un environnement stimulant. Nova s'entend bien avec d'autres chiens actifs.",
    badges: [{ label: "Alimentation Bio", variant: "primary" }],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBJwC1p6EB0q40zZQCSqywTeZDiGDRMFjrNtgPG3Ul2q9MtBxnBcSs4pU3Fz0EBJJM75UZQTNbVNEXNyR3DG2mZI3-0XHpaFLquY1s0IAXtU0eS6Uct8di9oUCSbozLDbBY6UjGJwnAeNUU6XJOh3KehzTYqJcfTLhZmvV5QGYxv_MVfY57SFiOB79H45EPYxm0foyjtut37k9xWM0DGRTjHLGCILfyXxxzlODsU4BFEHKVSDKb8w0DuV9SpEoMrr2Rv2GyNFGXkos",
    alt: "Chiot Border Collie alerte et dynamique.",
    traits: ["Vive", "Attentive", "Apprenante"],
    location: "Libreville",
  },
  {
    slug: "coco",
    name: "Coco",
    breed: "Golden Retriever",
    breedSlug: "golden-retriever",
    age: "7 ans",
    ageCategory: "senior",
    size: "Grande taille",
    sizeCategory: "grande",
    distanceKm: 6,
    description:
      "Coco est une compagne douce et posée, idéale pour un foyer qui recherche un chien calme et affectueux.",
    longDescription:
      "Coco est une Golden Retriever senior au tempérament doux. Elle aime les promenades tranquilles et les moments de complicité en famille. Coco est habituée à la vie domestique et s'adapte facilement.",
    badges: [{ label: "Propre en intérieur", variant: "secondary" }],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAwDpee8ZPiFVy_DgsBytDW89W-YZd0s9NXqnYZoCEjXyoQ-gS3EKJ28VNGFqMDJhGJ8BGQQiiTei5q8DpH0FI5mLQDTsyPPnIXdSjB56YzxjT5uwezHChh0h1ejalu85_zZ6-VGr5iL5z33giAHiL8-aQhsxFC4W6aplDBRZJUE-TDlUSEWzeKXIys7eWJ_KAgVKP3n-_xzotH5SCc83ikg9InrNoEXZQlxfkRbqvxCdIPM1jz1Fv9p-FGSQeN-vaZ6xPg7ucs6Fs",
    alt: "Golden Retriever senior au regard bienveillant.",
    traits: ["Douce", "Posée", "Affectueuse"],
    location: "Libreville",
  },
  {
    slug: "pixel",
    name: "Pixel",
    breed: "Border Collie",
    breedSlug: "border-collie",
    age: "2 ans",
    ageCategory: "adulte",
    size: "Taille moyenne",
    sizeCategory: "moyenne",
    distanceKm: 11,
    description:
      "Pixel est un compagnon agile et curieux, toujours prêt pour une nouvelle aventure en plein air.",
    longDescription:
      "Pixel est une Border Collie dynamique qui excelle dans les activités de plein air. Il est obéissant, intelligent et recherche une famille active pour partager des sorties régulières.",
    badges: [{ label: "Athlétique", variant: "primary" }],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBJwC1p6EB0q40zZQCSqywTeZDiGDRMFjrNtgPG3Ul2q9MtBxnBcSs4pU3Fz0EBJJM75UZQTNbVNEXNyR3DG2mZI3-0XHpaFLquY1s0IAXtU0eS6Uct8di9oUCSbozLDbBY6UjGJwnAeNUU6XJOh3KehzTYqJcfTLhZmvV5QGYxv_MVfY57SFiOB79H45EPYxm0foyjtut37k9xWM0DGRTjHLGCILfyXxxzlODsU4BFEHKVSDKb8w0DuV9SpEoMrr2Rv2GyNFGXkos",
    alt: "Border Collie agile en plein air.",
    traits: ["Agile", "Curieux", "Actif"],
    location: "Libreville",
  },
  {
    slug: "bella",
    name: "Bella",
    breed: "Bouledogue français",
    breedSlug: "bouledogue-francais",
    age: "2 ans",
    ageCategory: "adulte",
    size: "Petite taille",
    sizeCategory: "petite",
    distanceKm: 4,
    description:
      "Bella est une compagne joyeuse qui adore les câlins et les moments de détente en famille.",
    longDescription:
      "Bella est une bouledogue française au caractère ensoleillé. Elle est propre, sociable et parfaite pour un foyer recherchant un compagnon compact et affectueux.",
    badges: [{ label: "Alimentation Bio", variant: "primary" }],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB9a86nO-sGNoK1ywRWO5HkBzI8pyGIS-tSJJv02pzAfnjUoHyotyiaEPQEepB4Apgo0yoIHsy2JdVdBz1w3qTSWFvX0lTVUtOzCFiIloG9ift-chKQCJQ3j1K9bqSUC1ZtT9KyhXKVW6ZCUfPggtmuVL6BfYgEaXSU99CoWFiS3MBCZslc-ARdkCoyAmgXtWVGRw6d0orIAbEbTeEPwGb2fE-FaucyhmXnAaiBiju5lioY2tOPRR9glJOmAJcrHld7vOeERzZR2-c",
    alt: "Bouledogue française joyeuse.",
    traits: ["Joyeuse", "Câlin", "Sociable"],
    location: "Libreville",
  },
  {
    slug: "storm",
    name: "Storm",
    breed: "Lévrier",
    breedSlug: "levrier",
    age: "1 an",
    ageCategory: "adulte",
    size: "Grande taille",
    sizeCategory: "grande",
    distanceKm: 18,
    description:
      "Storm est un compagnon rapide et élégant qui aime courir puis se reposer paisiblement à la maison.",
    longDescription:
      "Storm est un jeune lévrier plein d'énergie lors des sorties, mais très calme une fois rentré. Il convient à une famille active qui pourra lui offrir de l'exercice quotidien.",
    badges: [{ label: "Sauvé", variant: "secondary" }],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBaCPZQrxFhaRUqy-Er0DsrV6KErGZ2mAhR88FH9LVG1r-keJNeSivg3NPo10-k2k39TGRMQGdUf2wktYK_Asc8GsW5PE7PcWnMhnAnSqzETzJXInMCviLkWEMnrhhmCoMJCfVsxk3Va4MUxFPZIlMv2ueppCv4_1RRpIRKoQ6Evz1kuKecudhNja6Uw41lRmw3vMqSK9_7GB2rwldRMKqZ2iqNfqVbOR-wyHp3Ua8AKd_UVhgn6Ggz3JAImvTOiBQPzaubP-dCMec",
    alt: "Jeune lévrier élégant en mouvement.",
    traits: ["Rapide", "Élégant", "Calme à la maison"],
    location: "Libreville",
  },
];

export const breeds: Breed[] = [
  {
    slug: "golden-retriever",
    name: "Golden Retriever",
    description:
      "Compagnon affectueux et équilibré, idéal pour les familles recherchant un chien sociable et patient.",
    temperament: ["Affectueux", "Patient", "Sociable"],
    size: "Grande taille",
    image: dogs[0].image,
    alt: "Golden Retriever au pelage doré.",
    count: dogs.filter((d) => d.breedSlug === "golden-retriever").length,
  },
  {
    slug: "levrier",
    name: "Lévrier",
    description:
      "Race élégante et calme, parfaite pour les foyers qui apprécient les promenades gracieuses et la sérénité.",
    temperament: ["Calme", "Élégant", "Doux"],
    size: "Grande taille",
    image: dogs[1].image,
    alt: "Lévrier au pelage fin.",
    count: dogs.filter((d) => d.breedSlug === "levrier").length,
  },
  {
    slug: "bouledogue-francais",
    name: "Bouledogue français",
    description:
      "Petit compagnon au grand caractère, parfait pour la vie en appartement et les moments de complicité.",
    temperament: ["Joueur", "Câlin", "Adaptable"],
    size: "Petite taille",
    image: dogs[2].image,
    alt: "Bouledogue français expressif.",
    count: dogs.filter((d) => d.breedSlug === "bouledogue-francais").length,
  },
  {
    slug: "border-collie",
    name: "Border Collie",
    description:
      "Race intelligente et énergique, idéale pour les familles actives qui aiment l'éducation et le plein air.",
    temperament: ["Intelligent", "Énergique", "Obéissant"],
    size: "Taille moyenne",
    image: dogs[3].image,
    alt: "Border Collie alerte.",
    count: dogs.filter((d) => d.breedSlug === "border-collie").length,
  },
];

export const products: Product[] = [
  {
    slug: "croquettes-saumon-sauvage",
    name: "Croquettes Saumon Sauvage",
    description:
      "Alimentation complète au saumon bio, formulée pour chiens actifs au quotidien.",
    price: 24500,
    originalPrice: 28000,
    rating: 4.9,
    category: "alimentation",
    categoryLabel: "Alimentation",
    badge: "Nouveau",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBU5Yb7R_Th31otadWKz8c0GZSeHL8SCaBk1-2WTiqKkLeF5QWTYqUwmohnI9hsz63UNtJkudYKiNOWSrO3Gef05QsSy2ebtkm1kbsEltx-9SZV-DIndHwGXZOfI6V94KL1FZ1PE6csmwGezZHoTMeLkVF3n_Q3HkZqzdykJiOkKUEN5B8qSc0_G7U7b09qhCiNrKn3l-TgZ12OhcIWbeoblekub1rgc1OEKpitCR7bga-kov9JkNeBzKT3cPRXjsNSPKuz3i_9j3Y",
    alt: "Sac de croquettes bio au saumon avec emballage premium.",
  },
  {
    slug: "harnais-aventure-vanguard",
    name: "Harnais Aventure Vanguard",
    description:
      "Harnais ergonomique en nylon premium avec finitions laiton brossé.",
    price: 41500,
    rating: 5,
    category: "accessoires",
    categoryLabel: "Équipement",
    badge: "Best-seller",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB8TdVnGbPGeWFuHwHOkrQ6M1ztIWYaOSYD6wnYhJfQL-_-RF1aMXZb7FNfrM8VzcrdcdMoOFWxevneEIvGrhecaZpDRspNyT3byksIRPOtS5pXHu50SDN-j85LCkRjAz6mMrkOGdKOGGykdhj6XTM1trWg9Kcr1Fs_UvnFqBDNyCjyfM-ryZiN1PIyP3IuRI6akKkTz3LcjQFw57fiACdg5EQkfFTTgDVIsOiqYLRIMD_CRZG1h_npVSNshpxOvjo7xGmgmU1Fr_E",
    alt: "Harnais vert forêt avec finitions laiton brossé.",
  },
  {
    slug: "pack-jouets-resistants",
    name: "Pack Jouets Résistants",
    description:
      "Trois jouets en caoutchouc naturel aux textures variées pour stimuler le jeu.",
    price: 17500,
    rating: 4.8,
    category: "jouets",
    categoryLabel: "Jeu",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAWL25MMszZ_T_YM2-pm-_wvLpvYxRv4UAo18aM23wKAAKrBldQpG82aTkQvozIn3tM41Im4FSpDoFBru3rNNWD4-29y8BSiONvhZKvWBtozh6pUDEzN1HVddIYT4Ew7eqsRmkv1-dLCZM38cC6hEJjnZMo1y6YrXg_US5_KY3OhWYv-umocRTzgNjheQNUpmJAbD6WZqtaFlAxhAa71U0Y0Eq1o6X7jrKcn-niowG6J_NRPzA5tqFpb8co5I3U0YI0YBkxu4biRGM",
    alt: "Jouets pour chien en caoutchouc naturel aux tons terre.",
  },
  {
    slug: "laisse-cuir-heritage",
    name: "Laisse Cuir Heritage",
    description:
      "Laisse tressée en cuir pleine fleur avec mousquetons en laiton massif.",
    price: 56500,
    rating: 4.9,
    category: "accessoires",
    categoryLabel: "Style de vie",
    badge: "Éco",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB3UwRJ_J-rXy-CPc05vP8C_rIDbdaQRQuJ5hTxrehMDEMoja8RjSLDfzNlfNA_3f8h0yEcIU2sOPv-Y9fSKaJRsjwQKkOIvhDCuuWfBZzxgiUxt33-JUoQOrNOYS94CzcYdz49c2LfUerMF82nVveEnx3IEJhc8kw-0UxOfuNZhSMHJtpJ6OvXmHp3BGQGLCzBFAM6In4qu685aOya8ZZfBu8zvrgQWZY3LDo4JWy7_0Pm75QSW4pbYAMqDPoE1SyBOQCxvCb1TN0",
    alt: "Laisse en cuir cognac avec mousquetons laiton.",
  },
  {
    slug: "omega-shine-drops",
    name: "Gouttes Omega Shine",
    description:
      "Complément oméga-3 liquide pour un pelage brillant et une peau saine.",
    price: 20500,
    rating: 4.7,
    category: "soins",
    categoryLabel: "Bien-être",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDfvf9XPZ31dPG890afYJZBRiNJFzZj0n6usSbAKNgJz5ejSipTnzkFXwf1yZt-hpUoPOQRpA0NoyqRuIgbFGUU9Bb9fY9FwdMrH9DZ3VX9RQqTvcJoDFeF1MA_9NMWFg2G7mpv6bArIpJutskmsrw701WKjhgA4IMu8veLOPfdDPnbARZ28CBG2O7XZjeAima98GXFFLHBFVbAgp9Q0MAzqMh2r1Bo-kGj3K0aUAc17GwbEDn0fo7haaNaCZDy5ax4KpyVEvvkh2g",
    alt: "Flacons de complément oméga-3 pour chien.",
  },
  {
    slug: "gamelle-sculpt-ceramique",
    name: "Gamelle Sculpt Céramique",
    description:
      "Gamelle céramique au design sculptural, finition mate et base antidérapante.",
    price: 30500,
    rating: 4.9,
    category: "accessoires",
    categoryLabel: "Repas",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDjsIrakSTBbOizvmDrBvC5YE8LFUIxnxrBUOmDVKeOa7T9y-tNzGeZSc77AlrS65V-JYwI7nZhwCQpBmdVExbMqSNSMw_Q9qD7A6RL4YrwPuWeC9mAr67KtOxB5DGXb6vgcS1Y6kKFmMFEaTeAdGSRDWAwucJCf6E_NEyjJbgX1eC3p675U_11x4ob_F6okEAgZNzIEIz2kPFHsr1jbFyY_7Z040-SOYQfwFkrHscIj4zuhOy14Jvqxj8I15NKQ-frNWqD7zu4O-c",
    alt: "Gamelle céramique rose poudré remplie de croquettes.",
  },
  {
    slug: "shampooing-doux",
    name: "Shampooing Doux",
    description:
      "Soin hypoallergénique pour un pelage brillant et une peau protégée après chaque bain.",
    price: 5500,
    rating: 4.8,
    category: "soins",
    categoryLabel: "Bien-être",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBaCPZQrxFhaRUqy-Er0DsrV6KErGZ2mAhR88FH9LVG1r-keJNeSivg3NPo10-k2k39TGRMQGdUf2wktYK_Asc8GsW5PE7PcWnMhnAnSqzETzJXInMCviLkWEMnrhhmCoMJCfVsxk3Va4MUxFPZIlMv2ueppCv4_1RRpIRKoQ6Evz1kuKecudhNja6Uw41lRmw3vMqSK9_7GB2rwldRMKqZ2iqNfqVbOR-wyHp3Ua8AKd_UVhgn6Ggz3JAImvTOiBQPzaubP-dCMec",
    alt: "Flacon de shampooing doux pour chien.",
  },
  {
    slug: "collier-confort",
    name: "Collier Confort",
    description:
      "Collier ajustable en matériaux doux, conçu pour le confort quotidien de votre compagnon.",
    price: 8900,
    rating: 4.6,
    category: "accessoires",
    categoryLabel: "Équipement",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBJwC1p6EB0q40zZQCSqywTeZDiGDRMFjrNtgPG3Ul2q9MtBxnBcSs4pU3Fz0EBJJM75UZQTNbVNEXNyR3DG2mZI3-0XHpaFLquY1s0IAXtU0eS6Uct8di9oUCSbozLDbBY6UjGJwnAeNUU6XJOh3KehzTYqJcfTLhZmvV5QGYxv_MVfY57SFiOB79H45EPYxm0foyjtut37k9xWM0DGRTjHLGCILfyXxxzlODsU4BFEHKVSDKb8w0DuV9SpEoMrr2Rv2GyNFGXkos",
    alt: "Collier confort pour chien.",
  },
];

export const subscriptionBox = {
  badge: "Abonnement",
  title: "La Box Mensuelle Skylos",
  description:
    "Nutrition et essentiels de jeu livrés chez vous chaque mois. Économisez 20 % sur chaque box.",
  cta: "Commencer l'abonnement",
  href: "/club",
  image:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBhlBYPQNuslFB0ifLjjerlIYqRVGG-zJvEdc12Nww2lQDMfm7K-oe21FGwxh0jhbQD1VqYXYzXdq4DQMCdD0oZVW1izKocA8_auZhj6KBCpsbLuuv5imf44HAkDMybmN2WEcI1iyMnTYHLZQoeMLeQKdCSuuVY0iBJ4zD_EfgOOBuzEYeTYkOZoH8_waJQL9MRLuYgKhhE0zYmk6OLj1ZOyWToVgerc41JDVnn2bSqPIsaTLt34stncvJka_trX8wTWO_tNFJxnhc",
  imageAlt:
    "Box d'abonnement Skylos ouverte avec friandises, jouet et compléments.",
} as const;

export const boutiqueCategories = [
  { value: "all", label: "Tous les essentiels" },
  { value: "alimentation", label: "Alimentation bio" },
  { value: "jouets", label: "Jouets durables" },
  { value: "accessoires", label: "Harnais & laisses" },
  { value: "soins", label: "Compléments" },
] as const;

export const boutiqueSortOptions = [
  { value: "recent", label: "Nouveautés" },
  { value: "price-asc", label: "Prix croissant" },
  { value: "price-desc", label: "Prix décroissant" },
  { value: "rating", label: "Mieux notés" },
] as const;

export const promoImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDlKYJtVFrN_BL9qO1XJHOg-tH89JNZ3dkKVEHx1IoQNP6hIX0CETMEShynIkv2X53QAd0xnGhzmNFSa8Y2wyjbVBcn9crpLIDO1EDdhpnPAT6NbRJiHUymWqVHyLP24SFqbOGFse2Lha6fF921rJ8UOPJR_XBmmQAQ6LMhPa41k5muWwU7675j0cZvx8Fh8pundwcj8AlFXeEEnFwDRxdsXoRzcsOuRM5nFbnK6ivifKUTtzkNJ29Vnz07fDLDdmVSniRC9XODm-M";

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("fr-GA", {
    style: "currency",
    currency: "XAF",
    maximumFractionDigits: 0,
  }).format(price);
}

export function getDogBySlug(slug: string): Dog | undefined {
  return dogs.find((dog) => dog.slug === slug);
}

export function getBreedBySlug(slug: string): Breed | undefined {
  return breeds.find((breed) => breed.slug === slug);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}
