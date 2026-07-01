import type { Dog, FilterState } from "./types";

export function filterAndSortDogs(dogs: Dog[], filters: FilterState): Dog[] {
  let result = dogs.filter((dog) => {
    if (filters.breed !== "all" && dog.breedSlug !== filters.breed) return false;
    if (filters.age !== "all" && dog.ageCategory !== filters.age) return false;
    if (filters.size !== "all" && dog.sizeCategory !== filters.size) return false;
    if (dog.distanceKm > filters.distance) return false;
    return true;
  });

  switch (filters.sort) {
    case "name":
      result = [...result].sort((a, b) => a.name.localeCompare(b.name, "fr"));
      break;
    case "age":
      result = [...result].sort((a, b) => {
        const order = { chiot: 0, adulte: 1, senior: 2 };
        return order[a.ageCategory] - order[b.ageCategory];
      });
      break;
    default:
      break;
  }

  return result;
}

export function paginate<T>(items: T[], page: number, perPage: number): T[] {
  const start = (page - 1) * perPage;
  return items.slice(start, start + perPage);
}

export function getTotalPages(count: number, perPage: number): number {
  return Math.max(1, Math.ceil(count / perPage));
}

export function cn(...classes: (string | false | undefined)[]): string {
  return classes.filter(Boolean).join(" ");
}
