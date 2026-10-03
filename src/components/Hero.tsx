import { about, coreSkills, profile } from "@/data/portfolio";
import CopilotRibbon from "./CopilotRibbon";
import ProfileOrbit from "./ProfileOrbit";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-copilot" aria-hidden="true">
        <div className="hero-copilot-float">
          <CopilotRibbon size={300} spin />
        </div>
      </div>

      <div className="hero-content">
        <div className="hero-text">
          <span className="badge-open">● {profile.openToWork}</span>
          <h1 className="hero-name">{profile.name}</h1>
          <p className="hero-headline">{profile.headline}</p>

          <p className="hero-proof">
            <strong>{profile.connections}</strong> connections&nbsp;&nbsp;·&nbsp;&nbsp;
            <strong>{profile.followers}</strong> followers&nbsp;&nbsp;·&nbsp;&nbsp;{profile.location}
          </p>

          <div className="hero-ctas">
            <a className="btn btn-primary btn-lg" href={profile.linkedInUrl} target="_blank" rel="noreferrer">
              Connect on LinkedIn
            </a>
            <a className="btn btn-outline btn-lg" href={`mailto:${profile.email}`}>
              Email me
            </a>
          </div>

          <p className="hero-about">{about[0]}</p>

          <ul className="chip-row" aria-label="Core skills">
            {coreSkills.map((skill) => (
              <li key={skill} className="chip">
                {skill}
              </li>
            ))}
          </ul>
        </div>

        <div className="hero-orbit-side">
          <ProfileOrbit />
        </div>
      </div>
    </section>
  );
}
