import { dogs, filterOptions } from "./data";
import type { Dog } from "./types";

export type EnrichedFilterOption = {
  value: string | number;
  label: string;
  description?: string;
  count: number;
};

function countByBreed(list: Dog[], breed: string) {
  if (breed === "all") return list.length;
  return list.filter((dog) => dog.breedSlug === breed).length;
}

function countByAge(list: Dog[], age: string) {
  if (age === "all") return list.length;
  return list.filter((dog) => dog.ageCategory === age).length;
}

function countBySize(list: Dog[], size: string) {
  if (size === "all") return list.length;
  return list.filter((dog) => dog.sizeCategory === size).length;
}

function countByDistance(list: Dog[], distance: number) {
  return list.filter((dog) => dog.distanceKm <= distance).length;
}

const breedDescriptions: Record<string, string> = {
  all: "Toutes les races disponibles",
  "golden-retriever": "Compagnons affectueux et équilibrés",
  levrier: "Élégants et calmes au quotidien",
  "bouledogue-francais": "Petits compagnons au grand caractère",
  "border-collie": "Intelligents et très énergiques",
};

const ageDescriptions: Record<string, string> = {
  all: "Tous les âges confondus",
  chiot: "Moins de 1 an",
  adulte: "Entre 1 et 6 ans",
  senior: "Plus de 6 ans",
};

const sizeDescriptions: Record<string, string> = {
  all: "Toutes les tailles",
  petite: "Idéal pour appartement",
  moyenne: "Compagnon polyvalent",
  grande: "Besoin d'espace et d'activité",
};

const distanceDescriptions: Record<number, string> = {
  5: "Quartiers proches de Libreville",
  10: "Zone urbaine élargie",
  25: "Libreville et environs",
  50: "Toute la zone disponible",
};

const sortDescriptions: Record<string, string> = {
  recent: "Derniers compagnons ajoutés",
  name: "Ordre alphabétique par prénom",
  age: "Du plus jeune au plus âgé",
};

export function getEnrichedFilterOptions(source: Dog[] = dogs) {
  return {
    breeds: filterOptions.breeds.map((option) => ({
      ...option,
      description: breedDescriptions[String(option.value)],
      count: countByBreed(source, String(option.value)),
    })),
    ages: filterOptions.ages.map((option) => ({
      ...option,
      description: ageDescriptions[String(option.value)],
      count: countByAge(source, String(option.value)),
    })),
    sizes: filterOptions.sizes.map((option) => ({
      ...option,
      description: sizeDescriptions[String(option.value)],
      count: countBySize(source, String(option.value)),
    })),
    distances: filterOptions.distances.map((option) => ({
      ...option,
      description: distanceDescriptions[Number(option.value)],
      count: countByDistance(source, Number(option.value)),
    })),
    sorts: filterOptions.sorts.map((option) => ({
      ...option,
      description: sortDescriptions[String(option.value)],
      count: source.length,
    })),
  };
}
