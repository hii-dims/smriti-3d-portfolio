import { type Transition } from "motion/react";
import { type Project } from "@/types/portfolio-types";
const tag = (names: string[]) => names.map((name, index) => ({ id: index + 1, name, path: "/assets/logos/javascript.svg" }));
export const MY_PROJECTS: Project[] = [
  {
    id: 1, title: "CampusQuery AI Engine", category: "Java · Spring Boot · RAG",
    description: "Built an intelligent campus query engine using Java and Spring Boot that ingests university PDFs using Apache PDFBox for automated request resolution.",
    subDescription: [
      "Integrated PostgreSQL with pgvector and Ollama (Qwen 3) to execute semantic similarity searches over document chunks and generate context-grounded answers.",
      "Secured RESTful endpoints with Spring Security, JWT authentication, role-based authorization, custom DTOs, and Swagger/OpenAPI documentation."
    ],
    href: "", logo: "", image: "", accent: "from-aqua/40 to-royal/10",
    tags: tag(["Java", "Spring Boot", "PostgreSQL", "pgvector", "Ollama", "Docker", "REST APIs"])
  },
  {
    id: 2, title: "Expense Tracker API", category: "Java · Spring Boot · MySQL",
    description: "Built a full-stack personal finance application managing real-time transactional data, balance calculations, and expense categorization.",
    subDescription: [
      "Designed normalized relational schemas in MySQL and used Spring Data JPA to write optimized query routines for low latency.",
      "Implemented structured REST endpoints with custom DTOs, global exception handling, and input validation."
    ],
    href: "", logo: "", image: "", accent: "from-royal/40 to-lavender/10",
    tags: tag(["Java", "Spring Boot", "MySQL", "Spring Data JPA", "REST APIs"])
  },
  {
    id: 3, title: "Meal Finder App", category: "JavaScript · HTML5 · CSS3",
    description: "Created a responsive web app using asynchronous Fetch API calls to integrate external endpoints from TheMealDB.",
    subDescription: [
      "Dynamic DOM manipulation handles search filtering, error edge cases, and real-time recipe rendering seamlessly."
    ],
    href: "", logo: "", image: "", accent: "from-sand/40 to-coral/10",
    tags: tag(["JavaScript", "HTML5", "CSS3", "REST API"])
  }
];
export const TILT_SPRING: Transition = { stiffness: 200, damping: 18 };
export const TILT_RANGE: { x: [number, number]; y: [number, number] } = { x: [10, -10], y: [-14, 14] };
export const TRACK_SPRING: Transition = { stiffness: 60, damping: 20 };
export const PREVIEW_WINDOW = 1;
