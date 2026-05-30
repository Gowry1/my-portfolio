export interface Project {
  name: string;
  description: string;
  tech: string[];
  image: string;
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
    image: "/images/hotel.jpg",
    imageAlt: "Hotel Management System screenshot",
    githubUrl: "",
    liveUrl: "",
  },
  {
    name: "Restaurant Management System",
    description:
      "Backend system for orders and inventory using Kafka, PostgreSQL, and CI/CD pipelines with Jenkins.",
    tech: ["Java", "Spring Boot", "Kafka", "PostgreSQL", "Docker", "Jenkins"],
    image: "/images/restaurant.jpg",
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
    image: "/images/stutter.jpg",
    imageAlt: "ML app screenshot",
    githubUrl: "",
    liveUrl: "",
  },
  {
    name: "Coir Factory (Full Stack)",
    description:
      "A full-stack industrial management system built with React frontend and NestJS backend. It handles production workflows, responsive UI, and scalable API architecture for coir manufacturing operations.",
    image: "/projects/coir-factory.png",
    imageAlt: "Coir Factory full stack application dashboard",
    tech: ["React", "TypeScript", "NestJS", "Node.js", "REST API", "CSS"],
    githubUrl: "https://github.com/Gowry1/coir-factory-front-end",
    liveUrl: "", // add if you deployed it
  },
];
