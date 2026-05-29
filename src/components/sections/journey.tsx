"use client";

import { Reveal } from "@/components/motion/reveal";
import { Card, CardContent } from "@/components/ui/card";

const items = [
  {
    when: "Jun 2024 — Apr 2026",
    title: "Software Engineer — Java & Full Stack",
    company: "Invicta Innovations (Pvt.) Ltd.",
    location: "Jaffna, Sri Lanka",
    url: "https://invictainnovations.com/index.html",
    desc: "Built and maintained end-to-end web applications with Java / Spring Boot and React / TypeScript. Implemented Redis caching and execution-plan tuning that delivered 25% lower API latency and 30% higher throughput in production. Designed PostgreSQL schemas, led root-cause analysis of production anomalies, and managed CI/CD pipelines on AWS via Docker, Kubernetes, and Jenkins.",
  },

  {
    when: "Jan 2024 — May 2024",
    title: "AI Engineer — Python / Data Pipelines",
    company: "NOVITECH R&D (Pvt.) Ltd.",
    location: "Chennai, India",
    url: "https://novitechrd.com/",
    desc: "Built end-to-end Python data pipelines applying data structures and algorithms knowledge to preprocessing and feature-engineering workflows for ML model training. Diagnosed pipeline anomalies through systematic log inspection and documented root-cause findings.",
  },

  {
    when: "Jun 2023 — Dec 2023",
    title: "Software Developer Intern — Backend",
    company: "Samuel Gnanam IT",
    location: "Jaffna, Sri Lanka",
    url: "https://www.samuelgnanam.com/",
    desc: "Built backend Java and Node.js components using OOP principles and established design patterns. Designed scalable relational database schemas and optimised SQL queries for PostgreSQL and MySQL. Collaborated on requirements gathering and defect triage aligned to SDLC practices.",
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
            <Card className="transition hover:shadow-lg">
              <CardContent className="p-6 sm:p-7">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-semibold sm:text-base">
                      {it.title}
                    </p>

                    <a
                      href={it.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 inline-block text-sm font-medium text-blue-500 transition hover:underline"
                    >
                      {it.company}
                    </a>

                    <p className="mt-1 text-xs text-muted-foreground/70">
                      {it.location}
                    </p>

                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
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
