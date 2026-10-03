import type { CSSProperties, ReactNode } from "react";
import CopilotRibbon from "./CopilotRibbon";

/**
 * Hero visual: Pavithra's photo in a circle wrapped by a glowing,
 * slowly rotating Copilot-gradient ring, with badges for the Microsoft
 * tools she works with orbiting around it (kept upright as they orbit).
 */

type Badge = {
  name: string;
  angle: number;
  bg?: string;
  color?: string;
  glyph: ReactNode;
};

function BoltGlyph() {
  return (
    <svg viewBox="0 0 24 24" width="55%" height="55%" fill="currentColor" aria-hidden="true" focusable="false">
      <path d="M13 2 4.5 13.5h5.6L9 22l8.5-11.5h-5.6L13 2z" />
    </svg>
  );
}

function PlayGlyph() {
  return (
    <svg viewBox="0 0 24 24" width="55%" height="55%" fill="currentColor" aria-hidden="true" focusable="false">
      <path d="M8.5 5.8v12.4c0 .8.9 1.3 1.6.9l10-6.2c.6-.4.6-1.4 0-1.8l-10-6.2c-.7-.4-1.6.1-1.6.9z" />
    </svg>
  );
}

function BarsGlyph() {
  return (
    <svg viewBox="0 0 24 24" width="58%" height="58%" fill="currentColor" aria-hidden="true" focusable="false">
      <rect x="4" y="12" width="4.4" height="8" rx="1" />
      <rect x="9.8" y="8" width="4.4" height="12" rx="1" />
      <rect x="15.6" y="4" width="4.4" height="16" rx="1" />
    </svg>
  );
}

function DatabaseGlyph() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="58%"
      height="58%"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      aria-hidden="true"
      focusable="false"
    >
      <ellipse cx="12" cy="5.6" rx="7.4" ry="2.7" />
      <path d="M4.6 5.6v12.8c0 1.5 3.3 2.7 7.4 2.7s7.4-1.2 7.4-2.7V5.6" />
      <path d="M4.6 12c0 1.5 3.3 2.7 7.4 2.7s7.4-1.2 7.4-2.7" />
    </svg>
  );
}

const BADGES: Badge[] = [
  {
    name: "SharePoint",
    angle: 0,
    bg: "var(--sharepoint)",
    glyph: <span className="orbit-badge-letter">S</span>,
  },
  {
    name: "Power Apps",
    angle: 60,
    bg: "var(--power-apps)",
    glyph: <PlayGlyph />,
  },
  {
    name: "Power Automate",
    angle: 120,
    bg: "var(--power-automate)",
    glyph: <BoltGlyph />,
  },
  {
    name: "Power BI",
    angle: 180,
    bg: "var(--power-bi)",
    color: "#201f1e",
    glyph: <BarsGlyph />,
  },
  {
    name: "Dataverse",
    angle: 240,
    bg: "var(--dataverse)",
    glyph: <DatabaseGlyph />,
  },
  {
    name: "Microsoft 365 Copilot",
    angle: 300,
    bg: "var(--surface-raised)",
    glyph: <CopilotRibbon size={26} />,
  },
];

export default function ProfileOrbit() {
  return (
    <div className="profile-orbit-float">
      <div className="profile-orbit">
        {/* faint orbit path */}
        <div className="orbit-track" aria-hidden="true" />

        {/* glowing Copilot-gradient ring */}
        <div className="orbit-glow" aria-hidden="true" />
        <div className="orbit-ring" aria-hidden="true" />

        {/* the photo */}
        <div className="orbit-photo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/profile.jpg" alt="Pavithra Chandrasekhar" width={480} height={480} />
        </div>

        {/* orbiting tool badges */}
        <div className="orbit-rotor" aria-hidden="true">
          {BADGES.map((badge) => (
            <span
              key={badge.name}
              className="orbit-item"
              style={{ "--a": `${badge.angle}deg` } as CSSProperties}
              title={badge.name}
            >
              <span className="orbit-badge-spin">
                <span
                  className="orbit-badge"
                  style={{ background: badge.bg, color: badge.color ?? "#ffffff" }}
                >
                  {badge.glyph}
                </span>
              </span>
            </span>
          ))}
        </div>

        <span className="sr-only">
          Portrait of Pavithra Chandrasekhar, surrounded by the Microsoft tools she works with:
          SharePoint, Power Apps, Power Automate, Power BI, Dataverse, and Microsoft 365 Copilot.
        </span>
      </div>
    </div>
  );
}
