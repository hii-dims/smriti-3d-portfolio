import { HERO_LOCATION, HERO_NAME, HERO_ROLE } from "./hero-constants";
import { CONTACT_EMAIL, MY_SOCIALS } from "./social-constants";

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, "");
export const absoluteUrl = (path: string) => `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
export const SITE_NAME = `${HERO_NAME} | ${HERO_ROLE}`;
export const SITE_TITLE = `${HERO_NAME} | ${HERO_ROLE}`;
export const SITE_DESCRIPTION = "Final Year Student of Computer Science and Engineering with knowledge of Java, Spring Boot, REST API, modern AI and RAG systems.";
export const SITE_TAGLINE = "Java, Spring Boot, backend systems and AI/RAG projects.";
export const OG_IMAGE = "/og.jpg";
export const OG_IMAGE_ALT = `${HERO_NAME}, ${HERO_ROLE} portfolio`;
export const OG_LOCALE = "en_US";
export const OG_IMAGES = [{ url: OG_IMAGE, width: 1200, height: 630, alt: OG_IMAGE_ALT }];
export const GOOGLE_SITE_VERIFICATION = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ?? "";
export const SITE_KEYWORDS = [
  HERO_NAME, "Computer Science and Engineering", "Java", "JavaScript", "SQL",
  "Spring Boot", "REST APIs", "RAG Systems", "PostgreSQL", "MySQL", HERO_LOCATION,
];
export const HOME_TITLE = `${HERO_NAME} | ${HERO_ROLE}`;
export const HOME_DESCRIPTION = "Computer Science and Engineering student in Patna, Bihar, with projects in Java, Spring Boot, REST APIs and AI/RAG systems.";
export const ADMIN_TITLE = "Contact submissions";
export const ADMIN_DESCRIPTION = "Private dashboard for contact form submissions. Not part of the public site.";
export const ADMIN_LOGIN_TITLE = "Sign in";
export const ADMIN_LOGIN_DESCRIPTION = "Sign in to the private contact submissions dashboard.";
export const SITE_SECTIONS = [
  { name: "Home", hash: "#home", description: `${HERO_NAME}, ${HERO_ROLE}.` },
  { name: "About", hash: "#about", description: `Background and skills of ${HERO_NAME}, based in ${HERO_LOCATION}.` },
  { name: "Education", hash: "#experience", description: `Education of ${HERO_NAME}.` },
  { name: "Work", hash: "#work", description: "Projects built with Java, Spring Boot, PostgreSQL, MySQL and JavaScript." },
  { name: "Contact", hash: "#contact", description: `Contact ${HERO_NAME} at ${CONTACT_EMAIL}.` },
] as const;
export const SOCIAL_PROFILES = MY_SOCIALS.map((social) => social.href);
export const CONTACT_POINT_EMAIL = CONTACT_EMAIL;
