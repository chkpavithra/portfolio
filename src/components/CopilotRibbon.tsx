import { useId } from "react";

/**
 * Microsoft 365 Copilot ribbon — an inline SVG recreation of the flowing
 * infinity-ribbon mark with smooth gradient bands
 * (purple → blue → cyan → teal → green → yellow → orange → pink).
 */
export default function CopilotRibbon({
  size = 120,
  className,
  style,
  spin = false,
}: {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
  spin?: boolean;
}) {
  const rawId = useId().replace(/[^a-zA-Z0-9]/g, "");
  const gid = `copilot-gradient-${rawId}`;

  return (
    <svg
      className={`${spin ? "copilot-spin" : ""} ${className ?? ""}`}
      style={style}
      width={size}
      height={size * 0.72}
      viewBox="0 0 160 115"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id={gid} x1="0" y1="55" x2="160" y2="55" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#7B61FF" />
          <stop offset="16%" stopColor="#2E7CF6" />
          <stop offset="34%" stopColor="#00BCF2" />
          <stop offset="50%" stopColor="#00B294" />
          <stop offset="65%" stopColor="#7FBA00" />
          <stop offset="78%" stopColor="#FFB900" />
          <stop offset="89%" stopColor="#F7630C" />
          <stop offset="100%" stopColor="#E3008C" />
        </linearGradient>
      </defs>
      {/* soft glow copy behind */}
      <path
        d="M80 57 C80 36, 62 22, 46 22 C27 22, 15 38, 15 57 C15 76, 27 92, 46 92 C62 92, 80 78, 80 57 C80 36, 98 22, 114 22 C133 22, 145 38, 145 57 C145 76, 133 92, 114 92 C98 92, 80 78, 80 57 Z"
        stroke={`url(#${gid})`}
        strokeWidth="19"
        strokeLinecap="round"
        opacity="0.22"
      />
      {/* main ribbon */}
      <path
        d="M80 57 C80 36, 62 22, 46 22 C27 22, 15 38, 15 57 C15 76, 27 92, 46 92 C62 92, 80 78, 80 57 C80 36, 98 22, 114 22 C133 22, 145 38, 145 57 C145 76, 133 92, 114 92 C98 92, 80 78, 80 57 Z"
        stroke={`url(#${gid})`}
        strokeWidth="13"
        strokeLinecap="round"
      />
    </svg>
  );
}

/**
 * A field of roaming Copilot ribbons fixed behind the whole page.
 * Pointer-events are disabled and everything sits behind content.
 */
export function CopilotField() {
  return (
    <div className="copilot-field" aria-hidden="true">
      <div className="roam roam-a">
        <CopilotRibbon size={150} spin />
      </div>
      <div className="roam roam-b">
        <CopilotRibbon size={90} spin />
      </div>
      <div className="roam roam-c">
        <CopilotRibbon size={110} spin />
      </div>
      <div className="roam roam-d">
        <CopilotRibbon size={70} spin />
      </div>
      <div className="roam roam-e">
        <CopilotRibbon size={120} spin />
      </div>
    </div>
  );
}
