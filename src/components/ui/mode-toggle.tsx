import * as React from "react";
import { Button } from "@/components/ui/button";
import { RxMoon, RxSun } from "react-icons/rx";

export function ModeToggle() {
  const [theme, setTheme] = React.useState<"light" | "dark">("light");
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    const stored = window.localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;

    if (stored === "dark" || stored === "light") {
      setTheme(stored);
      document.documentElement.classList.toggle("dark", stored === "dark");
    } else {
      setTheme(prefersDark ? "dark" : "light");
      document.documentElement.classList.toggle("dark", prefersDark);
    }
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      document.documentElement.classList.toggle("dark", next === "dark");
      window.localStorage.setItem("theme", next);
      return next;
    });
  };

  if (!mounted) return null;

  return (
    <Button
      variant="ghost"
      type="button"
      size="icon"
      className="px-2"
      aria-label={
        theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
      }
      onClick={toggleTheme}
    >
      {theme === "dark" ? (
        <RxSun className="h-[1.2rem] w-[1.2rem] text-neutral-800 dark:text-neutral-200" />
      ) : (
        <RxMoon className="h-[1.2rem] w-[1.2rem] text-neutral-800 dark:text-neutral-200" />
      )}
    </Button>
  );
}
