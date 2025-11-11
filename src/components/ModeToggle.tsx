"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Sun, Moon } from "lucide-react";

export function ModeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Button
      variant="ghost"
      type="button"
      size="icon"
      className="p-3 sm:p-4 rounded-full transition-transform duration-300 hover:scale-105"
      onClick={() => {
        setTheme(resolvedTheme === "light" ? "dark" : "light");
      }}
    >
      {resolvedTheme === "dark" ? (
        <Sun className="h-12 w-12 text-neutral-800 dark:text-neutral-200" />
      ) : (
        <Moon className="h-12 w-12 text-neutral-800 dark:text-neutral-200" />
      )}
    </Button>
  );
}