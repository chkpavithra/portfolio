"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

/**
 * Sun/moon theme toggle for the nav.
 *
 * The actual theme lives on <html data-theme="…">, set before first paint by
 * the inline script in the root layout (persisted localStorage choice, else
 * the visitor's prefers-color-scheme). The visible icon is driven purely by
 * CSS off that attribute, so it is correct even before hydration. This
 * component only flips the attribute, persists the choice, and keeps the
 * ARIA state in sync.
 */
export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    setTheme(document.documentElement.dataset.theme === "dark" ? "dark" : "light");
  }, []);

  const toggle = () => {
    const next: Theme =
      document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      window.localStorage.setItem("theme", next);
    } catch {
      // storage unavailable (private mode etc.) — the attribute still applies
    }
    setTheme(next);
  };

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggle}
      aria-pressed={theme === null ? undefined : theme === "dark"}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
    >
      {/* moon — shown in light mode */}
      <svg
        className="icon-moon"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        focusable="false"
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
      {/* sun — shown in dark mode */}
      <svg
        className="icon-sun"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        focusable="false"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2" />
        <path d="M12 20v2" />
        <path d="M4.93 4.93l1.41 1.41" />
        <path d="M17.66 17.66l1.41 1.41" />
        <path d="M2 12h2" />
        <path d="M20 12h2" />
        <path d="M6.34 17.66l-1.41 1.41" />
        <path d="M19.07 4.93l-1.41 1.41" />
      </svg>
    </button>
  );
}
