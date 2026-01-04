export type Theme = "light" | "dark" | "system";

export interface ThemeStore {
  theme: Theme;
  mounted: boolean;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  setMounted: (mounted: boolean) => void;
  _setNextTheme: ((theme: Theme) => void) | null;
  _setNextThemeRef: (fn: (theme: Theme) => void) => void;
}

export interface ThemeOption {
  value: Theme;
  label: string;
  icon: React.ReactNode;
}
