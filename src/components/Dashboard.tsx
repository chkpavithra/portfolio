import { certifications, education, experience, profile, skillGroups } from "@/data/portfolio";

// ── helpers ──────────────────────────────────────────────────────────────────

function monthIndex(ym: string): number {
  const [y, m] = ym.split("-").map(Number);
  return y * 12 + (m - 1);
}

const ISSUER_COLORS: Record<string, string> = {
  Microsoft: "#0067B8",
  LinkedIn: "#0A66C2",
  AWS: "#FF9900",
};

// ── donut of certifications by issuer (computed from data) ───────────────────

function CertDonut() {
  const counts = new Map<string, number>();
  for (const cert of certifications) {
    counts.set(cert.issuerGroup, (counts.get(cert.issuerGroup) ?? 0) + 1);
  }
  const segments = [...counts.entries()].map(([label, value]) => ({
    label,
    value,
    color: ISSUER_COLORS[label] ?? "#605E5C",
  }));
  const total = segments.reduce((a, s) => a + s.value, 0);

  const r = 70;
  const circumference = 2 * Math.PI * r;
  let acc = 0;
  const arcs = segments.map((seg) => {
    const frac = seg.value / total;
    const dash = frac * circumference;
    const arc = { ...seg, dash, offset: acc };
    acc += dash;
    return arc;
  });

  return (
    <div className="chart-block">
      <h3>Certifications by issuer</h3>
      <div className="donut-wrap">
        <svg viewBox="0 0 200 200" className="donut" role="img" aria-label="Certifications by issuer">
          <circle cx="100" cy="100" r={r} fill="none" stroke="#EDEBE9" strokeWidth="26" />
          {arcs.map((arc) => (
            <circle
              key={arc.label}
              cx="100"
              cy="100"
              r={r}
              fill="none"
              stroke={arc.color}
              strokeWidth="26"
              strokeDasharray={`${Math.max(arc.dash - 2, 0)} ${circumference - arc.dash + 2}`}
              strokeDashoffset={-arc.offset}
              transform="rotate(-90 100 100)"
            />
          ))}
          <text x="100" y="97" textAnchor="middle" className="donut-total">
            {total}
          </text>
          <text x="100" y="118" textAnchor="middle" className="donut-caption">
            certifications
          </text>
        </svg>
        <ul className="legend">
          {segments.map((seg) => (
            <li key={seg.label}>
              <span className="legend-swatch" style={{ background: seg.color }} />
              {seg.label} — {seg.value}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// ── bar chart of skill counts by category (computed from data) ───────────────

function SkillBars() {
  const rows = skillGroups.map((g) => ({ name: g.name, count: g.skills.length, color: g.color }));
  const max = Math.max(...rows.map((r) => r.count));

  return (
    <div className="chart-block">
      <h3>Skills by category</h3>
      <div className="bars" role="img" aria-label="Skill counts by category">
        {rows.map((row) => (
          <div className="bar-row" key={row.name}>
            <span className="bar-label">{row.name}</span>
            <span className="bar-track">
              <span
                className="bar-fill"
                style={{ width: `${(row.count / max) * 100}%`, background: row.color }}
              />
            </span>
            <span className="bar-value">{row.count}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── career timeline from real role dates ─────────────────────────────────────

const TIMELINE_START = monthIndex("2018-01");
const TIMELINE_END = monthIndex("2027-01");
const PRESENT = monthIndex("2026-10");

function pct(ym: string): number {
  return ((monthIndex(ym) - TIMELINE_START) / (TIMELINE_END - TIMELINE_START)) * 100;
}

function Timeline() {
  const rows: { label: string; sub: string; start: string; end: string; color: string }[] = [];

  for (const company of experience) {
    for (const role of company.roles) {
      rows.push({
        label: role.title,
        sub: company.company,
        start: role.start,
        end: role.end,
        color: company.company === "DXC Technology" ? "#0067B8" : "#038387",
      });
    }
  }
  for (const edu of education) {
    if (edu.inProgress) {
      rows.push({
        label: edu.degree,
        sub: edu.school,
        start: edu.start,
        end: "present",
        color: "#8764B8",
      });
    }
  }
  rows.sort((a, b) => monthIndex(a.start) - monthIndex(b.start));

  const years = [2018, 2020, 2022, 2024, 2026];

  return (
    <div className="chart-block timeline-block">
      <h3>Career timeline</h3>
      <div className="timeline">
        {rows.map((row) => {
          const endIdx = row.end === "present" ? PRESENT : monthIndex(row.end);
          const left = pct(row.start);
          const width = ((endIdx - monthIndex(row.start)) / (TIMELINE_END - TIMELINE_START)) * 100;
          return (
            <div className="tl-row" key={`${row.label}-${row.start}`}>
              <span className="tl-label">
                {row.label}
                <span className="tl-sub">{row.sub}</span>
              </span>
              <span className="tl-track">
                <span
                  className="tl-bar"
                  style={{ left: `${left}%`, width: `${Math.max(width, 2)}%`, background: row.color }}
                />
              </span>
            </div>
          );
        })}
        <div className="tl-axis">
          {years.map((y) => (
            <span key={y} style={{ left: `${pct(`${y}-01`)}%` }}>
              {y}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── section ──────────────────────────────────────────────────────────────────

export default function Dashboard() {
  const kpis = [
    { value: String(certifications.length), label: "Certifications" },
    { value: String(profile.linkedInSkillCount), label: "LinkedIn skills" },
    { value: profile.connections, label: "Connections" },
    { value: String(profile.followers), label: "Followers" },
  ];

  return (
    <section className="section" id="dashboard">
      <div className="section-inner">
        <p className="section-eyebrow">Dashboard</p>
        <h2 className="section-title">My work, at a glance</h2>
        <p className="section-sub">A Power BI-style snapshot drawn from my LinkedIn profile.</p>

        <div className="kpi-grid">
          {kpis.map((kpi) => (
            <div className="kpi-card" key={kpi.label}>
              <span className="kpi-value">{kpi.value}</span>
              <span className="kpi-label">{kpi.label}</span>
            </div>
          ))}
        </div>

        <div className="dashboard-grid">
          <CertDonut />
          <SkillBars />
        </div>
        <Timeline />
      </div>
    </section>
  );
}
