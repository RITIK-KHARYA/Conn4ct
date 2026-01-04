"use client";

import { useMemo, useCallback, useState } from "react";
import { cn } from "@/lib/utils";

interface PlateEditorProps {
  value: any[];
  onChange: (value: any[]) => void;
  placeholder?: string;
  maxLength?: number;
  className?: string;
  onFocus?: () => void;
  onBlur?: () => void;
}

export function PlateEditor({
  value,
  onChange,
  placeholder,
  maxLength,
  className,
  onFocus,
  onBlur,
}: PlateEditorProps) {
  const textContent = useMemo(() => {
    return value
      .map((n) => n.children?.map((c: any) => c.text || "").join("") || "")
      .join("\n");
  }, [value]);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const text = e.target.value;
      if (!maxLength || text.length <= maxLength) {
        const newValue = [
          {
            type: "p",
            children: [{ text }],
          },
        ];
        onChange(newValue);
      }
    },
    [onChange, maxLength]
  );

  return (
    <div className={cn("w-full", className)}>
      <textarea
        value={textContent}
        onChange={handleChange}
        onFocus={onFocus}
        onBlur={onBlur}
        placeholder={placeholder}
        className={cn(
          "w-full resize-none bg-transparent border-none outline-none text-white placeholder:text-white/20",
          "text-base font-medium tracking-tight min-h-[50px] focus:outline-none"
        )}
      />
    </div>
  );
}
