"use client";

import { useState } from "react";
import {
  certifications,
  education,
  experience,
  languages,
  skillGroups,
  topSkills,
} from "@/data/portfolio";

const TABS = ["Experience", "Certifications", "Education", "Skills & Languages"] as const;
type Tab = (typeof TABS)[number];

function ExperienceTab() {
  return (
    <div className="exp-list">
      {experience.map((company) => (
        <article className="company" key={company.company}>
          <header className="company-head">
            <h3>{company.company}</h3>
            <p className="company-meta">
              {company.employmentType}
              {company.location ? ` · ${company.location}` : ""}
              {company.note ? ` · ${company.note}` : ""}
            </p>
          </header>
          {company.roles.map((role) => (
            <div className="role" key={role.title}>
              <div className="role-head">
                <h4>{role.title}</h4>
                <span className="role-dates">
                  {role.startLabel} – {role.endLabel} · {role.durationLabel}
                </span>
              </div>
              <ul className="contrib-list">
                {role.contributions.map((c, i) => (
                  <li key={i}>
                    {c.heading ? <strong>{c.heading}: </strong> : null}
                    {c.text}
                  </li>
                ))}
              </ul>
              <p className="tech-line">
                <span>Technologies:</span> {role.technologies.join(", ")}
              </p>
            </div>
          ))}
        </article>
      ))}
    </div>
  );
}

const ISSUER_BAR: Record<string, string> = {
  Microsoft: "#0067B8",
  LinkedIn: "#0A66C2",
  AWS: "#FF9900",
};

function CertificationsTab() {
  return (
    <div className="cert-grid">
      {certifications.map((cert) => (
        <article className="cert-card" key={cert.name}>
          <span className="cert-bar" style={{ background: ISSUER_BAR[cert.issuerGroup] }} />
          <h4>{cert.name}</h4>
          <p className="cert-issuer">{cert.issuer}</p>
          <p className="cert-dates">
            {cert.issuedLabel}
            {cert.expiresLabel ? ` · ${cert.expiresLabel}` : ""}
          </p>
          {cert.credentialId ? <p className="cert-cred">Credential ID: {cert.credentialId}</p> : null}
          {cert.expired ? <span className="badge-expired">Expired Aug 2026</span> : null}
        </article>
      ))}
    </div>
  );
}

function EducationTab() {
  return (
    <div className="edu-list">
      {education.map((edu) => (
        <article className="edu-card" key={edu.school}>
          <h4>{edu.school}</h4>
          <p className="edu-degree">{edu.degree}</p>
          <p className="edu-dates">
            {edu.startLabel} – {edu.endLabel}
            {edu.inProgress ? <span className="badge-progress">In progress</span> : null}
          </p>
        </article>
      ))}
    </div>
  );
}

function SkillsTab() {
  return (
    <div>
      <div className="skill-groups">
        {skillGroups.map((group) => (
          <div className="skill-group" key={group.name}>
            <h4>
              <span className="legend-swatch" style={{ background: group.color }} />
              {group.name}
            </h4>
            <ul className="chip-row">
              {group.skills.map((skill) => (
                <li key={skill} className={`chip ${topSkills.includes(skill) ? "chip-top" : ""}`}>
                  {skill}
                  {topSkills.includes(skill) ? <span className="chip-star" aria-label="Top skill"> ★</span> : null}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="skill-group">
        <h4>Languages</h4>
        <ul className="chip-row">
          {languages.map((lang) => (
            <li key={lang} className="chip">
              {lang}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Credentials() {
  const [tab, setTab] = useState<Tab>("Experience");

  return (
    <section className="section section-alt" id="credentials">
      <div className="section-inner">
        <p className="section-eyebrow">Experience &amp; credentials</p>
        <h2 className="section-title">Everything in one place</h2>
        <p className="section-sub">Every role, certification, degree, and skill — straight from my LinkedIn profile.</p>

        <div className="tabs" role="tablist" aria-label="Experience and credentials">
          {TABS.map((t) => (
            <button
              key={t}
              role="tab"
              aria-selected={tab === t}
              className={`tab ${tab === t ? "tab-active" : ""}`}
              onClick={() => setTab(t)}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="tab-panel">
          {tab === "Experience" && <ExperienceTab />}
          {tab === "Certifications" && <CertificationsTab />}
          {tab === "Education" && <EducationTab />}
          {tab === "Skills & Languages" && <SkillsTab />}
        </div>
      </div>
    </section>
  );
}
