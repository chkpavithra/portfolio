import type { Metadata } from "next";
import "./globals.css";
import { profile } from "@/data/portfolio";

export const metadata: Metadata = {
  title: `${profile.name} — SharePoint & Power Platform Developer`,
  description: profile.headline,
};

// Runs before first paint: applies the persisted theme choice, or the
// visitor's system preference (prefers-color-scheme) when no choice has
// been saved, by setting data-theme on <html>. Keeps the page from ever
// flashing the wrong theme on load.
const themeInitScript = `(function () {
  try {
    var saved = window.localStorage.getItem("theme");
    var theme =
      saved === "light" || saved === "dark"
        ? saved
        : window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light";
    document.documentElement.dataset.theme = theme;
  } catch (e) {
    document.documentElement.dataset.theme = "light";
  }
})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
