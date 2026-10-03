import { profile } from "@/data/portfolio";
import ThemeToggle from "./ThemeToggle";

export default function Nav() {
  return (
    <header className="nav">
      <div className="nav-inner">
        <a className="nav-name" href="#top">
          {profile.name}
        </a>
        <nav className="nav-links" aria-label="Sections">
          <a href="#dashboard">Dashboard</a>
          <a href="#credentials">Experience</a>
          <a href="#toolkit">Toolkit</a>
          <a href="#contact">Contact</a>
        </nav>
        <ThemeToggle />
        <a className="btn btn-primary nav-connect" href={profile.linkedInUrl} target="_blank" rel="noreferrer">
          Connect
        </a>
      </div>
    </header>
  );
}
