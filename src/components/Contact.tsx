import { about, profile } from "@/data/portfolio";
import CopilotRibbon from "./CopilotRibbon";

export default function Contact() {
  return (
    <section className="section section-alt" id="contact">
      <div className="section-inner contact-inner">
        <div className="contact-copilot" aria-hidden="true">
          <CopilotRibbon size={110} />
        </div>
        <p className="section-eyebrow">Contact</p>
        <h2 className="section-title">Let&apos;s connect</h2>
        <p className="section-sub contact-text">{about[3]}</p>
        <p className="contact-location">
          {profile.location} · {profile.openToWork}
        </p>
        <div className="hero-ctas contact-ctas">
          <a className="btn btn-primary btn-lg" href={profile.linkedInUrl} target="_blank" rel="noreferrer">
            Connect on LinkedIn
          </a>
          <a className="btn btn-outline btn-lg" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <p>
        {profile.name} · SharePoint &amp; Power Platform Developer · {profile.location}
      </p>
      <p className="footer-small">
        <a href={profile.linkedInUrl} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        {" · "}
        <a href={`mailto:${profile.email}`}>{profile.email}</a>
      </p>
    </footer>
  );
}
