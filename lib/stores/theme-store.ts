"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { useEffect, useRef } from "react";
import { useTheme as useNextTheme } from "next-themes";
import type { Theme, ThemeStore } from "@/types/theme";

export type { Theme } from "@/types/theme";

// Create the Zustand store with localStorage persistence
export const useThemeStore = create<ThemeStore>()(
  persist(
    (set, get) => ({
      theme: "system",
      mounted: false,
      _setNextTheme: null,
      _setNextThemeRef: (fn: (theme: Theme) => void) => {
        set({ _setNextTheme: fn });
      },
      setTheme: (newTheme: Theme) => {
        set({ theme: newTheme });
        const setNextTheme = get()._setNextTheme;
        if (setNextTheme) {
          setNextTheme(newTheme);
        }
      },
      toggleTheme: () => {
        const current = get().theme;
        const nextTheme: Theme =
          current === "light"
            ? "dark"
            : current === "dark"
            ? "system"
            : "light";
        get().setTheme(nextTheme);
      },
      setMounted: (mounted: boolean) => {
        set({ mounted });
      },
    }),
    {
      name: "theme-storage",
      partialize: (state) => ({ theme: state.theme }),
    }
  )
);

// Hook to sync Zustand store with next-themes
// This should be used in a component that has access to ThemeProvider
export function useThemeSync() {
  const { theme, setTheme: setNextTheme } = useNextTheme();
  const setStoreTheme = useThemeStore((state) => state.setTheme);
  const setMounted = useThemeStore((state) => state.setMounted);
  const setNextThemeRef = useThemeStore((state) => state._setNextThemeRef);
  const hasInitialized = useRef(false);

  // Initialize the store with next-themes setTheme function
  useEffect(() => {
    setNextThemeRef(setNextTheme);
  }, [setNextTheme, setNextThemeRef]);

  // Sync next-themes to Zustand on initial mount
  useEffect(() => {
    if (!hasInitialized.current && theme) {
      setStoreTheme(theme as Theme);
      setMounted(true);
      hasInitialized.current = true;
    }
  }, [theme, setStoreTheme, setMounted]);

  // Update mounted state when theme becomes available
  useEffect(() => {
    if (theme && !useThemeStore.getState().mounted) {
      setMounted(true);
    }
  }, [theme, setMounted]);
}
