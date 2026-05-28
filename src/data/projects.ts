export interface Project {
  name: string;
  description: string;
  tech: string[];
  imageAlt: string;
  githubUrl: string;
  liveUrl: string;
}

export const projects: Project[] = [
  {
    name: "Hotel Management System",
    description:
      "Full-stack platform covering reservation, inventory, and billing workflows. Implemented Redis caching and query optimization for performance improvements.",
    tech: [
      "Java",
      "Spring Boot",
      "React",
      "PostgreSQL",
      "Redis",
      "Kafka",
      "AWS",
      "Docker",
    ],
    imageAlt: "Hotel Management System screenshot",
    githubUrl: "",
    liveUrl: "",
  },
  {
    name: "Restaurant Management System",
    description:
      "Backend system for orders and inventory using Kafka, PostgreSQL, and CI/CD pipelines with Jenkins.",
    tech: ["Java", "Spring Boot", "Kafka", "PostgreSQL", "Docker", "Jenkins"],
    imageAlt: "Restaurant project screenshot",
    githubUrl: "",
    liveUrl: "",
  },
  {
    name: "Stuttering Detection App",
    description:
      "ML-based system using Python, Flask, and C++ for speech disorder detection with NLP preprocessing.",
    tech: [
      "Python",
      "Flask",
      "C++",
      "Machine Learning",
      "MySQL",
      "scikit-learn",
    ],
    imageAlt: "ML app screenshot",
    githubUrl: "",
    liveUrl: "",
  },
];
