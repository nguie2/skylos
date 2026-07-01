"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { CartItem, FilterState, Product } from "@/lib/types";

type AppContextValue = {
  favorites: Set<string>;
  toggleFavorite: (slug: string) => void;
  isFavorite: (slug: string) => boolean;
  cart: CartItem[];
  cartCount: number;
  cartTotal: number;
  addToCart: (product: Product) => void;
  removeFromCart: (slug: string) => void;
  updateQuantity: (slug: string, quantity: number) => void;
  clearCart: () => void;
  filters: FilterState;
  setFilter: <K extends keyof FilterState>(key: K, value: FilterState[K]) => void;
  resetFilters: () => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
};

const defaultFilters: FilterState = {
  breed: "all",
  age: "all",
  size: "all",
  distance: 10,
  sort: "recent",
};

const AppContext = createContext<AppContextValue | null>(null);

const FAVORITES_KEY = "skylos-favorites";
const CART_KEY = "skylos-cart";

function readStorage<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

export function AppProvider({ children }: { children: ReactNode }) {
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const [cart, setCart] = useState<CartItem[]>([]);
  const [filters, setFilters] = useState<FilterState>(defaultFilters);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const storedFavorites = readStorage<string[]>(FAVORITES_KEY, []);
    const storedCart = readStorage<CartItem[]>(CART_KEY, []);
    setFavorites(new Set(storedFavorites));
    setCart(storedCart);
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    localStorage.setItem(FAVORITES_KEY, JSON.stringify([...favorites]));
  }, [favorites, hydrated]);

  useEffect(() => {
    if (!hydrated) return;
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  }, [cart, hydrated]);

  const toggleFavorite = useCallback((slug: string) => {
    setFavorites((prev) => {
      const next = new Set(prev);
      if (next.has(slug)) next.delete(slug);
      else next.add(slug);
      return next;
    });
  }, []);

  const isFavorite = useCallback(
    (slug: string) => favorites.has(slug),
    [favorites],
  );

  const addToCart = useCallback((product: Product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.slug === product.slug);
      if (existing) {
        return prev.map((item) =>
          item.product.slug === product.slug
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
  }, []);

  const removeFromCart = useCallback((slug: string) => {
    setCart((prev) => prev.filter((item) => item.product.slug !== slug));
  }, []);

  const updateQuantity = useCallback((slug: string, quantity: number) => {
    if (quantity <= 0) {
      setCart((prev) => prev.filter((item) => item.product.slug !== slug));
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.product.slug === slug ? { ...item, quantity } : item,
      ),
    );
  }, []);

  const clearCart = useCallback(() => setCart([]), []);

  const setFilter = useCallback(
    <K extends keyof FilterState>(key: K, value: FilterState[K]) => {
      setFilters((prev) => ({ ...prev, [key]: value }));
    },
    [],
  );

  const resetFilters = useCallback(() => setFilters(defaultFilters), []);

  const cartCount = useMemo(
    () => cart.reduce((sum, item) => sum + item.quantity, 0),
    [cart],
  );

  const cartTotal = useMemo(
    () =>
      cart.reduce(
        (sum, item) => sum + item.product.price * item.quantity,
        0,
      ),
    [cart],
  );

  const value = useMemo(
    () => ({
      favorites,
      toggleFavorite,
      isFavorite,
      cart,
      cartCount,
      cartTotal,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      filters,
      setFilter,
      resetFilters,
      mobileMenuOpen,
      setMobileMenuOpen,
    }),
    [
      favorites,
      toggleFavorite,
      isFavorite,
      cart,
      cartCount,
      cartTotal,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      filters,
      setFilter,
      resetFilters,
      mobileMenuOpen,
    ],
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within AppProvider");
  }
  return context;
}
