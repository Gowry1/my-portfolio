"use client";

import { Reveal } from "@/components/motion/reveal";
import { Card, CardContent } from "@/components/ui/card";

const groups = [
  {
    title: "Backend & Frameworks",
    items: [
      "Java / J2EE",
      "Spring Boot",
      "Spring Security",
      "Hibernate / JPA",
      "REST API design",
      "Microservices",
      "Node.js",
      "Python",
      "Shell / Bash",
    ],
  },
  {
    title: "Frontend",
    items: [
      "React.js",
      "TypeScript",
      "JavaScript ES6+",
      "HTML5",
      "CSS3",
      "Responsive UI",
    ],
  },
  {
    title: "Databases & SQL",
    items: [
      "PostgreSQL",
      "MySQL",
      "MariaDB",
      "Oracle SQL",
      "Redis",
      "Schema design",
      "Query optimisation",
      "Index tuning",
    ],
  },
  {
    title: "Cloud, DevOps & OS",
    items: [
      "AWS (EC2, RDS, S3)",
      "Docker",
      "Kubernetes",
      "Jenkins CI/CD",
      "Linux / Unix",
      "CloudWatch",
    ],
  },
  {
    title: "Testing & Quality",
    items: [
      "TDD",
      "JUnit",
      "Mockito",
      "Integration testing",
      "Root-cause analysis",
      "Structured debugging",
    ],
  },
  {
    title: "Architecture & Security",
    items: [
      "OOP principles",
      "Design patterns",
      "System design",
      "JWT / OAuth2",
      "RBAC",
      "Apache Kafka",
      "RabbitMQ",
      "Agile / Scrum",
    ],
  },
];

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-border bg-background/40 px-3 py-1.5 text-xs text-muted-foreground backdrop-blur">
      {children}
    </span>
  );
}

export function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-20">
      <Reveal>
        <p className="text-sm font-medium text-muted-foreground">Skills</p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
          A production-proven, full-stack toolkit.
        </h2>
      </Reveal>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {groups.map((g, i) => (
          <Reveal key={g.title} delay={0.04 + i * 0.04}>
            <Card className="h-full">
              <CardContent className="p-6">
                <p className="text-sm font-semibold">{g.title}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {g.items.map((it) => (
                    <Pill key={it}>{it}</Pill>
                  ))}
                </div>
              </CardContent>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
