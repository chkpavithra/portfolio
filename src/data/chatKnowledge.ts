// ─────────────────────────────────────────────────────────────────────────────
// Chatbot knowledge base — "Ask about Pavithra".
//
// Every answer is built ONLY from Pavithra's real profile data: the app data
// in src/data/portfolio.ts (skills / certifications / education / languages
// answers are generated from it, so they can never drift out of sync) and the
// fuller LinkedIn source notes in ~/workspace/portfolio/linkedin-profile-data.md
// (role contributions). Nothing here invents employers, dates, metrics, or
// experience. Questions that don't match — and salary / visa questions — fall
// back to an email redirect, per Pavithra's request.
// ─────────────────────────────────────────────────────────────────────────────

import { profile, skillGroups, topSkills, certifications, education, languages } from "./portfolio";

export const CHAT_GREETING =
  "Hi, I'm Pavithra's portfolio assistant. Ask me about her experience, skills, or certifications.";

export const SUGGESTED_QUESTIONS: string[] = [
  "What's her Power Platform experience?",
  "Which certifications does she hold?",
  "What did she do at DXC?",
  "How can I contact her?",
];

export interface KnowledgeChunk {
  id: string;
  topic: string;
  /** Single words or multi-word phrases, matched against the normalized question. */
  keywords: string[];
  answer: string;
  /** When true, the UI shows a "Reach Pavithra by email" button under the answer. */
  emailCta?: boolean;
}

// ── Answers generated from the app data (always in sync with the site) ──────

const skillsAnswer = [
  "Here is her skill set, grouped the way it appears on her LinkedIn profile:",
  ...skillGroups.map((g) => `• ${g.name}: ${g.skills.join(", ")}`),
  `Her highlighted top skills are ${topSkills.join(", ")}.`,
].join("\n");

const certificationsAnswer = [
  `She holds ${certifications.length} certifications:`,
  ...certifications.map(
    (c) =>
      `• ${c.name} — ${c.issuer} (${c.issuedLabel}${c.expiresLabel ? ` · ${c.expiresLabel}` : ""})${
        c.credentialId ? ` · Credential ID ${c.credentialId}` : ""
      }`,
  ),
].join("\n");

const educationAnswer = [
  "Her education:",
  ...education.map(
    (e) => `• ${e.degree} — ${e.school} (${e.startLabel} – ${e.endLabel}${e.inProgress ? " · in progress" : ""})`,
  ),
  "She is currently pursuing the Master's Degree in Data Analytics at Indiana Wesleyan University.",
].join("\n");

const languagesAnswer = `Pavithra speaks ${languages.slice(0, -1).join(", ")}, and ${languages[languages.length - 1]}.`;

// ── Knowledge chunks (ordered most specific → most general; first wins ties) ─

export const KNOWLEDGE: KnowledgeChunk[] = [
  {
    id: "nintex",
    topic: "Nintex",
    keywords: ["nintex"],
    answer:
      "She holds a LinkedIn certification in SharePoint Workflow Automation: Nintex (issued Dec 2024), complementing her Power Automate workflow automation work at DXC Technology and as a freelancer.",
  },
  {
    id: "cloud",
    topic: "Azure & cloud",
    keywords: ["azure", "cloud", "logic apps", "aws", "aws certified", "amazon web services"],
    answer:
      "She is Microsoft Azure Fundamentals (AZ-900) certified, worked with Azure services in her DXC Technology role, and has Azure Logic Apps among her top LinkedIn skills. She also earned the AWS Certified Cloud Practitioner credential (issued Aug 2023; it expired in Aug 2026).",
  },
  {
    id: "dataverse",
    topic: "Dataverse",
    keywords: ["dataverse", "data model", "data models", "data modeling", "database", "common data service"],
    answer:
      "Dataverse is part of her Power Platform skill set. In her Power Apps projects at DXC Technology she designed and implemented complex data models behind Canvas and Model-Driven Apps, and Dataverse sits in her core skills alongside Power Apps, Power Automate, and SharePoint Online.",
  },
  {
    id: "power-bi",
    topic: "Power BI",
    keywords: ["power bi", "powerbi", "dashboards", "dashboard", "reporting", "reports", "visualization", "bi"],
    answer:
      "Power BI is one of her top LinkedIn skills. She builds Power BI dashboards to improve productivity and streamline business processes, dashboard design also featured in the SharePoint portals she delivered at DXC Technology, and she completed LinkedIn's Power BI Essential Training (Dec 2024). Her current Master's studies are in Data Analytics.",
  },
  {
    id: "power-apps",
    topic: "Power Apps",
    keywords: ["power apps", "powerapps", "canvas", "model-driven", "model driven", "low code", "low-code", "apps"],
    answer:
      "She has deep Power Apps experience:\n• At DXC Technology she spearheaded multiple Power Apps projects using Canvas and Model-Driven Apps, designing complex data models, workflows, and user-friendly applications that automated manual processes\n• Her freelance work on Upwork also centered on developing Canvas and Model-Driven Power Apps for clients\n• She integrates Power Apps with SharePoint, Power Automate, Dataverse, and other Microsoft 365 tools for end-to-end business process automation",
  },
  {
    id: "power-automate",
    topic: "Power Automate",
    keywords: [
      "power automate",
      "automation",
      "automate",
      "automated",
      "flows",
      "approval",
      "approvals",
      "workflow",
      "workflows",
    ],
    answer:
      "Power Automate is one of her top skills. She builds automated approval and business workflows that streamline processes, including:\n• End-to-end automation connecting Power Apps, SharePoint, and Microsoft 365 at DXC Technology\n• Enhanced workflows and process automation for migrated SharePoint systems\n• Workflow automation for freelance clients on Upwork\nShe also holds a LinkedIn certification in SharePoint Workflow Automation: Nintex (Dec 2024).",
  },
  {
    id: "power-platform",
    topic: "Power Platform",
    keywords: ["power platform", "powerplatform"],
    answer:
      "Power Platform is at the center of her work: Power Apps (Canvas and Model-Driven), Power Automate workflows, Dataverse data models, and Power BI dashboards. She holds the Microsoft Certified: Power Platform Developer Associate (PL-400) credential, and her top LinkedIn skills include Microsoft Power Apps, Microsoft Power Automate, and Microsoft Power BI. Ask me about any of them individually for more detail.",
  },
  {
    id: "spfx-dev",
    topic: "SPFx & development",
    keywords: [
      "spfx",
      "sharepoint framework",
      "react",
      "typescript",
      "javascript",
      "web parts",
      "webparts",
      "frontend",
      "front-end",
      "coding",
      "graph api",
      "rest api",
      "rest apis",
    ],
    answer:
      "Her development stack centers on the SharePoint Framework (SPFx):\n• SPFx web parts built with React, TypeScript, and JavaScript (plus HTML and CSS)\n• Integrations using REST APIs and the Microsoft Graph API\n• SharePoint customization, document management, and permissions\nShe applied this across DXC Technology projects and freelance SPFx web part development on Upwork.",
  },
  {
    id: "migration",
    topic: "SharePoint migration",
    keywords: [
      "migration",
      "migrate",
      "migrating",
      "sharegate",
      "quest",
      "seascape",
      "powershell",
      "legacy",
      "on-premises",
      "on premises",
    ],
    answer:
      "SharePoint migration is one of her core strengths. At DXC Technology she led migrations of legacy SharePoint environments to SharePoint Online:\n• Used Quest and Seascape migration tools (ShareGate is also among her listed skills)\n• Assessed existing data structures and workflows to plan migration strategies tailored to client requirements\n• Automated repetitive migration tasks with PowerShell scripts, ensuring data integrity\n• Ensured compliance with organizational and regulatory standards\n• Provided post-migration support, troubleshooting, and performance optimization, and documented best practices and migration guides",
  },
  {
    id: "sharepoint",
    topic: "SharePoint & Microsoft 365",
    keywords: ["sharepoint", "sharepoint online", "intranet", "microsoft 365", "office 365", "m365", "document management"],
    answer:
      "SharePoint is her primary platform. Her work covers:\n• SharePoint Online development and customization, including SPFx solutions\n• End-to-end internal portal implementations, which she led at DXC Technology\n• SharePoint migration from legacy environments to SharePoint Online\n• Document management, records management, and permissions\n• Integrations with Power Apps, Power Automate, and Microsoft 365 via REST and Microsoft Graph APIs",
  },
  {
    id: "governance",
    topic: "Governance & compliance",
    keywords: ["governance", "compliance", "permissions", "records management", "regulatory", "security"],
    answer:
      "On the governance side, her profile highlights:\n• Managing SharePoint permissions, document management, and records management\n• Ensuring migration projects complied with organizational and regulatory standards at DXC Technology\n• Assessing existing data structures and workflows before migration to keep data integrity intact",
  },
  {
    id: "dxc-cloud-engineer",
    topic: "DXC — Analyst 1 Cloud Engineer",
    keywords: ["cloud engineer", "analyst 1", "portal", "portals", "leadership", "team lead", "mentor", "mentorship", "led a team"],
    answer:
      "As an Analyst 1 Cloud Engineer at DXC Technology (Jul 2023 – Aug 2024):\n• SharePoint portals: Led the end-to-end development and deployment of internal SharePoint portals, designing intuitive user interfaces and dashboards for employee collaboration using SPFx and REST APIs\n• Power Apps projects: Spearheaded multiple Canvas and Model-Driven app projects, designing complex data models and workflows, and integrating Power Apps with SharePoint, Power Automate, and Microsoft 365 for end-to-end automation\n• Team leadership: Led a team of developers, providing technical guidance and mentorship, and acted as liaison between business stakeholders and the development team\nTechnologies: SharePoint Online, SPFx, REST API, Power Apps, Power Automate, Microsoft 365, React, TypeScript, JavaScript, and Azure services.",
  },
  {
    id: "dxc-associate",
    topic: "DXC — Associate Professional Software Engineer",
    keywords: ["associate professional", "software engineer", "first role", "post-migration", "post migration"],
    answer:
      "As an Associate Professional Software Engineer at DXC Technology (May 2020 – Jul 2023):\n• SharePoint migration: Led migration of legacy SharePoint environments to SharePoint Online using Quest and Seascape, starting with thorough assessments of existing data structures and workflows\n• Automation: Automated repetitive migration tasks with PowerShell scripts while ensuring data integrity and compliance with organizational and regulatory standards\n• Post-migration: Implemented enhanced workflows with Power Automate, provided troubleshooting and performance optimization support, and documented best practices and migration guides\nTechnologies: Quest, Seascape, SharePoint Online, PowerShell, Power Automate, SharePoint Designer.",
  },
  {
    id: "dxc-overview",
    topic: "DXC Technology",
    keywords: ["dxc", "zurich", "dxc technology"],
    answer:
      "At DXC Technology (full-time, 4 yrs 4 mos, based in Bengaluru, India — client work including Zurich North America), Pavithra held two roles:\n• Analyst 1 Cloud Engineer (Jul 2023 – Aug 2024) — SharePoint portals, Power Apps projects, and team leadership\n• Associate Professional Software Engineer (May 2020 – Jul 2023) — SharePoint migration projects and post-migration optimization\nAsk about either role and I can share the details.",
  },
  {
    id: "upwork",
    topic: "Upwork freelance",
    keywords: ["upwork", "freelance", "freelancing", "consultant", "consulting"],
    answer:
      "Pavithra began her career as a freelance SharePoint Developer on Upwork (May 2018 – Dec 2020, remote). Collaborating with various clients, she:\n• Developed Canvas and Model-Driven Power Apps\n• Automated workflows with Power Automate\n• Built advanced SharePoint SPFx web parts using React and TypeScript\n• Integrated Microsoft 365 tools to deliver seamless solutions",
  },
  {
    id: "solutions",
    topic: "Solutions & projects",
    keywords: ["projects", "solutions", "portfolio", "examples", "built", "build"],
    answer:
      "Examples of the kinds of solutions she builds — also showcased in the Toolkit section of this page:\n• SharePoint Online portals with SPFx web parts, dashboards, and REST API integrations\n• Power Automate approval and business workflows connecting Power Apps, SharePoint, and Microsoft 365\n• Dataverse data models powering Canvas and Model-Driven Apps\nHer client work itself is covered in the Experience section of this page.",
  },
  {
    id: "ai-skills",
    topic: "AI & agentic skills",
    keywords: [
      "ai",
      "copilot",
      "agentic",
      "agents",
      "agent",
      "claude",
      "generative",
      "llm",
      "llms",
      "prompt engineering",
      "artificial intelligence",
      "github copilot",
      "copilot studio",
      "ai integrations",
    ],
    answer:
      "She is actively expanding into AI-enabled solutions within Microsoft 365 and Power Platform environments. Her AI & Agentic skills include:\n• Microsoft 365 Copilot, Microsoft Copilot, and Microsoft Copilot Studio\n• GitHub Copilot and Anthropic Claude\n• Agentic AI Development and AI Agents\n• Generative AI, Prompt Engineering, and Large Language Models (LLM)\nHer profile describes working with Microsoft Copilot, GitHub Copilot, Claude, and modern AI integrations.",
  },
  {
    id: "skills",
    topic: "Skills",
    keywords: ["skills", "skill set", "skillset", "technologies", "tech stack", "tools", "expertise", "abilities", "what can she do"],
    answer: skillsAnswer,
  },
  {
    id: "certifications",
    topic: "Certifications",
    keywords: [
      "certifications",
      "certification",
      "certified",
      "credentials",
      "certificates",
      "pl-400",
      "pl400",
      "pl-900",
      "pl900",
      "az-900",
      "az900",
    ],
    answer: certificationsAnswer,
  },
  {
    id: "education",
    topic: "Education",
    keywords: [
      "education",
      "degree",
      "degrees",
      "masters",
      "master's",
      "university",
      "college",
      "studied",
      "studying",
      "school",
      "bachelor",
      "bachelors",
      "data analytics",
    ],
    answer: educationAnswer,
  },
  {
    id: "languages",
    topic: "Languages",
    keywords: ["languages", "language", "speak", "speaks", "spoken"],
    answer: languagesAnswer,
  },
  {
    id: "location",
    topic: "Location",
    keywords: ["location", "located", "where", "live", "lives", "based", "delaware", "newark"],
    answer: `She is based in ${profile.location}.`,
  },
  {
    id: "open-to-work",
    topic: "Open to work",
    keywords: [
      "open to work",
      "looking for",
      "job search",
      "opportunities",
      "opportunity",
      "available",
      "availability",
      "remote",
      "relocate",
      "relocation",
      "hiring",
    ],
    answer: `Pavithra is currently open to work — her LinkedIn shows "${profile.openToWork}" (visible to recruiters). If you have a role in mind, the fastest way to reach her is by email at ${profile.email}.`,
    emailCta: true,
  },
  {
    id: "why-hire",
    topic: "Why hire her",
    keywords: ["why hire", "why should", "strengths", "stand out", "good fit"],
    answer:
      "A few highlights from her profile:\n• End-to-end SharePoint and Power Platform delivery: portals, Canvas and Model-Driven apps, automation, and large-scale migrations\n• A modern stack: SPFx with React and TypeScript, Power Apps, Power Automate, Dataverse, Power BI, Microsoft Graph and REST APIs\n• Leadership experience: she led a team of developers on Power Apps projects at DXC Technology\n• Current credentials: Microsoft Certified Power Platform Developer Associate (PL-400), plus PL-900 and AZ-900\n• Currently pursuing a Master's in Data Analytics",
  },
  {
    id: "contact",
    topic: "Contact",
    keywords: ["contact", "email", "reach", "get in touch", "linkedin", "phone", "connect", "message her"],
    answer: `You can reach Pavithra by email at ${profile.email} — that's the fastest way to get a response. You can also connect with her on LinkedIn: ${profile.linkedInUrl}`,
    emailCta: true,
  },
  {
    id: "experience-years",
    topic: "Years of experience",
    keywords: ["how many years", "years of experience", "how long", "experienced"],
    answer:
      "Her profile lists roles spanning May 2018 to August 2024: freelance SharePoint and Power Platform work on Upwork (May 2018 – Dec 2020) and full-time roles at DXC Technology (May 2020 – Aug 2024), where she progressed from Associate Professional Software Engineer to Analyst 1 Cloud Engineer.",
  },
  {
    id: "experience-overview",
    topic: "Experience overview",
    keywords: ["experience", "work history", "career", "jobs", "worked", "employment", "companies", "employers"],
    answer:
      "Her listed experience:\n• DXC Technology (full-time, May 2020 – Aug 2024) — Associate Professional Software Engineer, then Analyst 1 Cloud Engineer\n• Upwork (freelance, May 2018 – Dec 2020) — SharePoint Developer\nAsk me about either employer and I can share the details.",
  },
  {
    id: "summary",
    topic: "Summary",
    keywords: [
      "who is pavithra",
      "who is she",
      "about pavithra",
      "about her",
      "tell me about",
      "summary",
      "overview",
      "introduction",
      "background",
      "herself",
    ],
    answer:
      "Pavithra Chandrasekhar is a SharePoint & Microsoft Power Platform Developer based in Newark, Delaware. She builds enterprise collaboration solutions, custom applications, and workflow automation with SharePoint Online, SPFx, Power Apps, Power Automate, Dataverse, and Microsoft 365.\nHer technical work includes SPFx development with React and TypeScript, SharePoint migration, and Power BI dashboards. She spent 2020–2024 at DXC Technology, is currently pursuing a Master's in Data Analytics at Indiana Wesleyan University, and is open to new opportunities in the United States (remote).",
  },
];

// ── Retrieval ────────────────────────────────────────────────────────────────

export type ChatAnswerKind = "answer" | "fallback" | "greeting" | "redirect";

export interface ChatAnswer {
  text: string;
  emailCta: boolean;
  kind: ChatAnswerKind;
}

const FALLBACK_TEXT = `I don't have that information in Pavithra's profile, so I don't want to guess. I can answer questions about her experience, skills, certifications, and education — or you can reach her directly by email at ${profile.email}.`;

const REDIRECT_TEXT = `That's something to discuss directly with Pavithra — I don't have reliable details on that here, and I don't want to guess on her behalf. You can reach her by email at ${profile.email} and she'll be happy to talk it through.`;

const GREETING_TEXT =
  "Hi there! I can answer questions about Pavithra's experience, skills, certifications, and education. Try one of the suggestions, or type your own question.";

/** Words that always route to the email redirect (never answered by the bot). */
const REDIRECT_PHRASES = ["green card", "work permit", "h-1b"];
const REDIRECT_WORDS = new Set([
  "salary",
  "pay",
  "rate",
  "rates",
  "compensation",
  "hourly",
  "wage",
  "wages",
  "visa",
  "sponsor",
  "sponsored",
  "sponsorship",
  "citizenship",
  "citizen",
  "authorized",
  "authorised",
  "h1b",
  "opt",
  "cpt",
]);

const GREETING_WORDS = new Set(["hi", "hello", "hey", "hii", "namaste"]);

function normalize(text: string): string {
  return text
    .toLowerCase()
    .replace(/[’']/g, "'")
    .replace(/[^a-z0-9\s'-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/** Very light stemming so "certifications" matches "certification", etc. */
function stem(word: string): string {
  let w = word;
  if (w.endsWith("'s")) w = w.slice(0, -2);
  if (w.length > 3 && w.endsWith("s")) w = w.slice(0, -1);
  return w;
}

function tokenize(normalized: string): string[] {
  return normalized.split(" ").filter(Boolean).map(stem);
}

const PHRASE_WEIGHT = 5;
const WORD_WEIGHT = 2;
const MATCH_THRESHOLD = 2;

function scoreChunk(chunk: KnowledgeChunk, normalizedQuestion: string, questionTokens: Set<string>): number {
  let score = 0;
  for (const keyword of chunk.keywords) {
    const kw = normalize(keyword);
    if (kw.includes(" ")) {
      if (` ${normalizedQuestion} `.includes(` ${kw} `) || normalizedQuestion.includes(kw)) score += PHRASE_WEIGHT;
    } else if (questionTokens.has(stem(kw))) {
      score += WORD_WEIGHT;
    }
  }
  return score;
}

/**
 * Answer a visitor question from the knowledge base. Fully client-side:
 * keyword/phrase-overlap retrieval over fixed chunks, with an email
 * fallback whenever nothing matches confidently.
 */
export function findAnswer(rawQuestion: string): ChatAnswer {
  const normalized = normalize(rawQuestion);
  const tokens = tokenize(normalized);
  const tokenSet = new Set(tokens);

  // Salary / visa / sponsorship questions always redirect to email.
  if (REDIRECT_PHRASES.some((p) => normalized.includes(p)) || tokens.some((t) => REDIRECT_WORDS.has(t))) {
    return { text: REDIRECT_TEXT, emailCta: true, kind: "redirect" };
  }

  // Plain greetings.
  if (tokens.length > 0 && tokens.length <= 2 && tokens.some((t) => GREETING_WORDS.has(t))) {
    return { text: GREETING_TEXT, emailCta: false, kind: "greeting" };
  }

  let best: KnowledgeChunk | null = null;
  let bestScore = 0;
  for (const chunk of KNOWLEDGE) {
    const s = scoreChunk(chunk, normalized, tokenSet);
    if (s > bestScore) {
      bestScore = s;
      best = chunk;
    }
  }

  if (best && bestScore >= MATCH_THRESHOLD) {
    return { text: best.answer, emailCta: best.emailCta ?? false, kind: "answer" };
  }

  return { text: FALLBACK_TEXT, emailCta: true, kind: "fallback" };
}
