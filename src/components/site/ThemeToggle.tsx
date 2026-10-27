import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "dark" : "light");
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);

    if (nextTheme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("anas_theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("anas_theme", "light");
    }
  };

  const isDark = mounted ? theme === "dark" : true;

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className="group relative flex size-8 shrink-0 items-center justify-center rounded-full neu-button cursor-pointer transition-all duration-300 hover:scale-108 active:scale-95"
      title={isDark ? "Switch to Soft Light Neomorphism" : "Switch to Matte Dark Neomorphism"}
    >
      <div className="relative size-4">
        <Sun
          className={`absolute inset-0 size-4 text-amber-500 transition-all duration-300 ${
            isDark
              ? "rotate-90 scale-0 opacity-0"
              : "rotate-0 scale-100 opacity-100"
          }`}
        />
        <Moon
          className={`absolute inset-0 size-4 text-sky-400 transition-all duration-300 ${
            isDark
              ? "rotate-0 scale-100 opacity-100"
              : "-rotate-90 scale-0 opacity-0"
          }`}
        />
      </div>
    </button>
  );
}
