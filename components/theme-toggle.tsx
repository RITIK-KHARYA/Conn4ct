"use client";

import { Button } from "@/components/ui/button";
import { useThemeStore, useThemeSync } from "@/lib/stores/theme-store";
import { Sun, Moon, Monitor } from "lucide-react";

export function ThemeToggle() {
  // Sync Zustand store with next-themes
  useThemeSync();

  const theme = useThemeStore((state) => state.theme);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);
  const mounted = useThemeStore((state) => state.mounted);

  // Get the icon based on current theme
  const getIcon = () => {
    if (!mounted) {
      return <Monitor className="h-4 w-4" />;
    }

    switch (theme) {
      case "light":
        return <Sun className="h-4 w-4" />;
      case "dark":
        return <Moon className="h-4 w-4" />;
      case "system":
        return <Monitor className="h-4 w-4" />;
      default:
        return <Monitor className="h-4 w-4" />;
    }
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      title={`Current theme: ${theme}`}
    >
      {getIcon()}
    </Button>
  );
}

