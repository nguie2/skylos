export type BadgeVariant = "primary" | "secondary";

export type DogBadge = {
  label: string;
  variant: BadgeVariant;
};

export type Dog = {
  slug: string;
  name: string;
  breed: string;
  breedSlug: string;
  age: string;
  ageCategory: "chiot" | "adulte" | "senior";
  size: string;
  sizeCategory: "petite" | "moyenne" | "grande";
  distanceKm: number;
  description: string;
  longDescription: string;
  badges: DogBadge[];
  image: string;
  alt: string;
  traits: string[];
  location: string;
};

export type Breed = {
  slug: string;
  name: string;
  description: string;
  temperament: string[];
  size: string;
  image: string;
  alt: string;
  count: number;
};

export type ProductCategory =
  | "alimentation"
  | "soins"
  | "accessoires"
  | "jouets";

export type Product = {
  slug: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  rating?: number;
  category: ProductCategory;
  categoryLabel: string;
  badge?: string;
  image: string;
  alt: string;
};

export type CartItem = {
  product: Product;
  quantity: number;
};

export type SortOption = "recent" | "name" | "age";

export type FilterState = {
  breed: string;
  age: string;
  size: string;
  distance: number;
  sort: SortOption;
};

export type NavItem = {
  href: string;
  label: string;
  icon: string;
  mobileOnly?: boolean;
};

export type HeaderNavItem = {
  href: string;
  label: string;
};
