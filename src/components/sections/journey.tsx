"use client";

import { Reveal } from "@/components/motion/reveal";
import { Card, CardContent } from "@/components/ui/card";

const items = [
  {
    when: "Jun 2024 — Apr 2026",
    title: "Software Engineer — Java & Full Stack",
    company: "Invicta Innovations (Pvt.) Ltd. · Jaffna, Sri Lanka",
    desc: "Built and maintained end-to-end web applications with Java / Spring Boot and React / TypeScript. Implemented Redis caching and execution-plan tuning that delivered 25% lower API latency and 30% higher throughput in production. Designed PostgreSQL schemas, led root-cause analysis of production anomalies, and managed CI/CD pipelines on AWS via Docker, Kubernetes, and Jenkins.",
  },
  {
    when: "Jan 2024 — May 2024",
    title: "AI Engineer — Python / Data Pipelines",
    company: "NOVITECH R&D (Pvt.) Ltd. · Chennai, India",
    desc: "Built end-to-end Python data pipelines applying data structures and algorithms knowledge to preprocessing and feature-engineering workflows for ML model training. Diagnosed pipeline anomalies through systematic log inspection and documented root-cause findings.",
  },
  {
    when: "Jun 2023 — Dec 2023",
    title: "Software Developer Intern — Backend",
    company: "Samuel Gnanam IT · Jaffna, Sri Lanka",
    desc: "Built backend Java and Node.js components using OOP principles and established design patterns. Designed scalable relational database schemas and optimised SQL queries for PostgreSQL and MySQL. Collaborated on requirements gathering and defect triage aligned to SDLC practices.",
  },
  {
    when: "Sep 2023 — Jun 2024",
    title: "B.Sc. (Hons) Computer Science & Software Engineering",
    company: "University of Bedfordshire · Second Class Upper",
    desc: "Studied software engineering fundamentals, algorithms, and system design. Complemented concurrent industry experience with structured academic depth in computer science.",
  },
];

export function Journey() {
  return (
    <section id="journey" className="py-16 sm:py-20">
      <Reveal>
        <p className="text-sm font-medium text-muted-foreground">Experience</p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
          3+ years building for production.
        </h2>
      </Reveal>

      <div className="mt-8 grid gap-4">
        {items.map((it, i) => (
          <Reveal key={it.title} delay={0.04 + i * 0.03}>
            <Card>
              <CardContent className="p-6 sm:p-7">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-semibold">{it.title}</p>
                    <p className="mt-0.5 text-xs font-medium text-muted-foreground/70">
                      {it.company}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {it.desc}
                    </p>
                  </div>
                  <p className="shrink-0 text-xs font-medium text-muted-foreground sm:text-right sm:text-sm">
                    {it.when}
                  </p>
                </div>
              </CardContent>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
