"use client";

import { Button } from "@/components/ui/button";
import { useThemeStore, useThemeSync } from "@/lib/stores/theme-store";
import { Sun, Moon, Monitor, Check } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import type { Theme, ThemeOption } from "@/types/theme";

const themes: ThemeOption[] = [
  { value: "light", label: "Light", icon: <Sun className="h-4 w-4" /> },
  { value: "dark", label: "Dark", icon: <Moon className="h-4 w-4" /> },
  { value: "system", label: "System", icon: <Monitor className="h-4 w-4" /> },
];

export function ThemeSelector() {
  // Sync Zustand store with next-themes
  useThemeSync();

  const theme = useThemeStore((state) => state.theme);
  const setTheme = useThemeStore((state) => state.setTheme);
  const mounted = useThemeStore((state) => state.mounted);
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [open]);

  const currentTheme = themes.find((t) => t.value === theme) || themes[2];

  return (
    <div className="relative" ref={dropdownRef}>
      <Button
        variant="ghost"
        size="default"
        onClick={() => setOpen(!open)}
        className="gap-2"
        aria-label="Select theme"
      >
        {currentTheme.icon}
        <span className="hidden sm:inline">{currentTheme.label}</span>
      </Button>

      {open && (
        <div className="absolute right-0 mt-2 w-40 rounded-md border bg-popover shadow-md z-50">
          <div className="p-1">
            {themes.map((themeOption) => {
              const isSelected = theme === themeOption.value;
              return (
                <button
                  key={themeOption.value}
                  onClick={() => {
                    setTheme(themeOption.value);
                    setOpen(false);
                  }}
                  className={cn(
                    "w-full flex items-center gap-2 px-3 py-2 text-sm rounded-sm transition-colors",
                    "hover:bg-accent hover:text-accent-foreground",
                    isSelected && "bg-accent text-accent-foreground"
                  )}
                >
                  {themeOption.icon}
                  <span className="flex-1 text-left">{themeOption.label}</span>
                  {isSelected && <Check className="h-4 w-4" />}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
