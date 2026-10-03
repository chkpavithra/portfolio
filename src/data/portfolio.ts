// ─────────────────────────────────────────────────────────────────────────────
// Portfolio content — SINGLE SOURCE OF TRUTH for the whole site.
// All facts come from Pavithra's LinkedIn profile (extracted 2026-10-03).
// Edit content here only; every component reads from this file.
// ─────────────────────────────────────────────────────────────────────────────

export const profile = {
  name: "Pavithra Chandrasekhar",
  pronouns: "She/Her",
  headline:
    "SharePoint & Power Platform Developer | SPFx, React, TypeScript | Power Apps, Power Automate, Dataverse | SharePoint Migration | Microsoft 365 | Copilot & AI Integrations | Azure & AWS Certified",
  location: "Newark, Delaware, United States",
  connections: "500+",
  followers: 831,
  linkedInSkillCount: 32,
  openToWork: "Open to work · United States | Remote",
  linkedInUrl: "https://www.linkedin.com/in/pavithra-chandrasekhar-0906a0206",
  email: "chkpavithra@gmail.com",
};

export const about: string[] = [
  "I'm a SharePoint & Microsoft Power Platform Developer with experience building enterprise collaboration solutions, custom applications, and workflow automation using SharePoint Online, SPFx, Power Apps, Power Automate, Dataverse, and Microsoft 365.",
  "My technical experience includes SPFx development with React, JavaScript, TypeScript, HTML, and CSS, along with SharePoint customization, migration, document management, permissions, and integrations using Microsoft Graph and REST APIs. I also build Power Apps, automated approval and business workflows, and Power BI dashboards to improve productivity and streamline business processes.",
  "I'm also expanding my work into AI-enabled solutions using Microsoft Copilot, GitHub Copilot, Claude, and modern AI integrations within Microsoft 365 and Power Platform environments.",
  "I enjoy turning business requirements into scalable, user-friendly solutions that simplify processes, improve collaboration, and deliver measurable business value.",
];

export const coreSkills: string[] = [
  "SharePoint Online",
  "SPFx",
  "React",
  "TypeScript",
  "Power Apps",
  "Power Automate",
  "Dataverse",
  "Power BI",
  "Microsoft 365",
  "SharePoint Migration",
  "Workflow Automation",
  "Microsoft Graph API",
  "AI Integrations",
];

/** Skills highlighted on LinkedIn's About section. */
export const topSkills: string[] = [
  "Microsoft Power Apps",
  "Microsoft Power Automate",
  "Microsoft Power BI",
  "Azure Logic Apps",
  "React.js",
];

// ── Experience ───────────────────────────────────────────────────────────────

export interface Contribution {
  heading?: string;
  text: string;
}

export interface Role {
  title: string;
  /** "YYYY-MM" — used to plot the career timeline. */
  start: string;
  /** "YYYY-MM" or "present". */
  end: string;
  startLabel: string;
  endLabel: string;
  durationLabel: string;
  contributions: Contribution[];
  technologies: string[];
}

export interface Company {
  company: string;
  employmentType: string;
  location?: string;
  note?: string;
  roles: Role[];
}

export const experience: Company[] = [
  {
    company: "DXC Technology",
    employmentType: "Full-time · 4 yrs 4 mos",
    location: "Bengaluru, Karnataka, India",
    note: "Client work including Zurich North America",
    roles: [
      {
        title: "Analyst 1 Cloud Engineer",
        start: "2023-07",
        end: "2024-08",
        startLabel: "Jul 2023",
        endLabel: "Aug 2024",
        durationLabel: "1 yr 2 mos",
        contributions: [
          {
            heading: "SharePoint Internal Portal Implementation",
            text: "Led the end-to-end development and deployment of internal SharePoint portals, ensuring seamless integration with organizational workflows. Designed intuitive user interfaces and dashboards to enhance employee collaboration and streamline access to critical information. Utilized modern SharePoint frameworks (SPFx) and REST APIs for scalable and performance-optimized solutions.",
          },
          {
            heading: "Power Apps Projects",
            text: "Spearheaded multiple Power Apps projects, leveraging Canvas and Model-Driven Apps to meet diverse business requirements. Designed and implemented complex data models, workflows, and user-friendly applications that automated manual processes and improved efficiency. Integrated Power Apps with SharePoint, Power Automate, and other Microsoft 365 tools for end-to-end business process automation.",
          },
          {
            heading: "Team Leadership",
            text: "Successfully led a team of developers on Power Apps projects, fostering a collaborative environment to achieve project milestones on time and within budget. Provided technical guidance and mentorship, ensuring high-quality deliverables and adherence to best practices in development and design. Acted as a liaison between business stakeholders and the development team, gathering requirements and translating them into actionable technical solutions.",
          },
        ],
        technologies: [
          "SharePoint Online",
          "SPFx Framework",
          "REST API",
          "Power Apps",
          "Power Automate",
          "Microsoft 365",
          "React",
          "TypeScript",
          "JavaScript",
          "Azure services",
        ],
      },
      {
        title: "Associate Professional Software Engineer",
        start: "2020-05",
        end: "2023-07",
        startLabel: "May 2020",
        endLabel: "Jul 2023",
        durationLabel: "3 yrs 3 mos",
        contributions: [
          {
            heading: "SharePoint Migration Projects",
            text: "Led the migration of legacy SharePoint environments to SharePoint Online, utilizing tools like Quest and Seascape to ensure a secure and efficient transition. Conducted thorough assessments of existing data structures and workflows to plan migration strategies tailored to client requirements. Automated repetitive migration tasks using PowerShell scripts, significantly reducing time and effort while ensuring data integrity. Collaborated with stakeholders to ensure compliance with organizational and regulatory standards during the migration process.",
          },
          {
            heading: "Optimizing Post-Migration Systems",
            text: "Streamlined the migrated systems by implementing enhanced workflows and automating processes using Power Automate. Provided post-migration support, including troubleshooting and performance optimization, to ensure smooth adoption of the new SharePoint environment. Documented best practices and created comprehensive guides for future migrations, contributing to organizational knowledge sharing.",
          },
        ],
        technologies: [
          "Quest",
          "Seascape",
          "SharePoint Online",
          "PowerShell",
          "Power Automate",
          "SharePoint Designer",
        ],
      },
    ],
  },
  {
    company: "Upwork",
    employmentType: "Freelance",
    location: "India · Remote",
    roles: [
      {
        title: "SharePoint Developer",
        start: "2018-05",
        end: "2020-12",
        startLabel: "May 2018",
        endLabel: "Dec 2020",
        durationLabel: "2 yrs 8 mos",
        contributions: [
          {
            text: "Freelance Power Platform Developer | SharePoint Specialist — collaborated with various clients to design and implement business applications that drive efficiency and scalability.",
          },
          { text: "Developing Canvas and Model-Driven Power Apps." },
          { text: "Automating workflows with Power Automate." },
          {
            text: "Creating advanced SharePoint SPFx web parts using modern frameworks like React and TypeScript.",
          },
          {
            text: "Integrating Microsoft 365 tools to deliver seamless solutions.",
          },
        ],
        technologies: ["Power Apps", "Power Automate", "SPFx", "React", "TypeScript", "Microsoft 365"],
      },
    ],
  },
];

// ── Certifications ───────────────────────────────────────────────────────────

export type CertIssuerGroup = "Microsoft" | "LinkedIn" | "AWS";

export interface Certification {
  name: string;
  issuer: string;
  /** Used for the dashboard donut chart grouping. */
  issuerGroup: CertIssuerGroup;
  issuedLabel: string;
  expiresLabel?: string;
  expired?: boolean;
  credentialId?: string;
}

export const certifications: Certification[] = [
  {
    name: "Microsoft Certified: Power Platform Developer Associate (PL-400)",
    issuer: "Microsoft",
    issuerGroup: "Microsoft",
    issuedLabel: "Issued Aug 2026",
    expiresLabel: "Expires Aug 2027",
    credentialId: "731A62AD7A50F131",
  },
  {
    name: "Power BI Essential Training",
    issuer: "LinkedIn",
    issuerGroup: "LinkedIn",
    issuedLabel: "Issued Dec 2024",
  },
  {
    name: "SharePoint Workflow Automation: Nintex",
    issuer: "LinkedIn",
    issuerGroup: "LinkedIn",
    issuedLabel: "Issued Dec 2024",
  },
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services (AWS)",
    issuerGroup: "AWS",
    issuedLabel: "Issued Aug 2023",
    expiresLabel: "Expired Aug 2026",
    expired: true,
  },
  {
    name: "Microsoft Certified: Power Platform Fundamentals (PL-900)",
    issuer: "Microsoft",
    issuerGroup: "Microsoft",
    issuedLabel: "Issued Sep 2022",
  },
  {
    name: "Microsoft Azure Fundamentals (AZ-900)",
    issuer: "Microsoft",
    issuerGroup: "Microsoft",
    issuedLabel: "Issued Jun 2021",
  },
];

// ── Education ────────────────────────────────────────────────────────────────

export interface Education {
  school: string;
  degree: string;
  start: string;
  end: string;
  startLabel: string;
  endLabel: string;
  inProgress?: boolean;
}

export const education: Education[] = [
  {
    school: "Indiana Wesleyan University",
    degree: "Master's Degree, Data Analytics",
    start: "2026-09",
    end: "present",
    startLabel: "Sep 2026",
    endLabel: "Present",
    inProgress: true,
  },
  {
    school: "Visvesvaraya Technological University",
    degree: "Bachelor's degree, Electrical, Electronics and Communications Engineering",
    start: "2016-04",
    end: "2020-07",
    startLabel: "Apr 2016",
    endLabel: "Jul 2020",
  },
];

// ── Skills & languages ───────────────────────────────────────────────────────

export interface SkillGroup {
  name: string;
  /** Accent color used in charts and group markers. */
  color: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    name: "AI & Agentic",
    color: "#8764B8",
    skills: [
      "Microsoft 365 Copilot",
      "Microsoft Copilot",
      "GitHub Copilot",
      "Anthropic Claude",
      "Agentic AI Development",
      "AI Agents",
      "Generative AI",
      "Microsoft Copilot Studio",
      "Prompt Engineering",
      "Large Language Models (LLM)",
    ],
  },
  {
    name: "Power Platform & Automation",
    color: "#742774",
    skills: [
      "Microsoft Power Apps",
      "Microsoft Power Automate",
      "Microsoft Power BI",
      "Dataverse",
      "Azure Logic Apps",
      "Workflow Automation",
      "AI Integrations",
    ],
  },
  {
    name: "SharePoint & Microsoft 365",
    color: "#038387",
    skills: [
      "SharePoint",
      "SharePoint Online",
      "SharePoint Framework (SPFx)",
      "Office 365",
      "Microsoft 365",
      "Intranet",
      "Document Management",
      "Records Management",
    ],
  },
  {
    name: "Development",
    color: "#0067B8",
    skills: [
      "JavaScript",
      "TypeScript",
      "React.js",
      "HTML",
      "Bootstrap",
      "Software Development",
      "Microsoft Graph API",
    ],
  },
  {
    name: "Data & Migration",
    color: "#107C10",
    skills: ["Data Integration", "Data Migration", "ShareGate", "Seascape tool", "Quest tool"],
  },
];

export const languages: string[] = ["English", "Kannada", "Tamil", "Telugu"];

// ── Toolkit / representative solution visuals ────────────────────────────────

export interface SolutionCard {
  title: string;
  product: string;
  color: string;
  description: string;
  points: string[];
}

export const solutions: SolutionCard[] = [
  {
    title: "SharePoint Online Portal",
    product: "SharePoint · SPFx",
    color: "#038387",
    description:
      "Internal portals with intuitive interfaces and dashboards that enhance employee collaboration and streamline access to critical information.",
    points: ["SPFx web parts in React & TypeScript", "REST API integrations", "Dashboards for critical information"],
  },
  {
    title: "Power Automate Approval Flow",
    product: "Power Automate",
    color: "#0066FF",
    description:
      "Automated approval and business workflows that replace manual processes and connect Power Apps, SharePoint, and Microsoft 365 end to end.",
    points: ["Approval & business workflows", "End-to-end process automation", "Microsoft 365 integrations"],
  },
  {
    title: "Dataverse Data Model",
    product: "Dataverse · Power Apps",
    color: "#018574",
    description:
      "Complex data models behind Canvas and Model-Driven Apps, designed to meet diverse business requirements and scale with the organization.",
    points: ["Canvas & Model-Driven Apps", "Complex data models", "SharePoint & M365 integration"],
  },
];
