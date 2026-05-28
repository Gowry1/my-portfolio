"use client";

import { Reveal } from "@/components/motion/reveal";
import { Card, CardContent } from "@/components/ui/card";

const strengths = [
  {
    title: "Backend-first engineering",
    desc: "Java / Spring Boot microservices, RESTful APIs, OOP design patterns, and TDD with JUnit & Mockito.",
  },
  {
    title: "Performance at production scale",
    desc: "Delivered 25% latency reduction and 30% throughput gain via Redis caching and query-plan tuning on live systems.",
  },
  {
    title: "Full-stack capability",
    desc: "React + TypeScript frontends wired to versioned APIs — comfortable reading and extending complex legacy codebases.",
  },
  {
    title: "Cloud & DevOps fluency",
    desc: "Containerised services on AWS (EC2, RDS, S3) with Docker, Kubernetes, and Jenkins CI/CD pipelines.",
  },
];

export function About() {
  return (
    <section id="about" className="py-16 sm:py-20">
      <Reveal>
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-sm font-medium text-muted-foreground">About</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
              Shipping reliable systems, end to end.
            </h2>
          </div>
        </div>
      </Reveal>

      <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal delay={0.05}>
          <Card className="h-full">
            <CardContent className="p-6 sm:p-8">
              <p className="text-balance text-base leading-relaxed text-muted-foreground">
                I'm a Software Engineer with 3+ years of experience building and
                shipping production web applications. My core stack is Java /
                Spring Boot on the backend and React / TypeScript on the
                frontend, integrated through well-designed RESTful APIs.
              </p>
              <p className="mt-5 text-balance text-base leading-relaxed text-muted-foreground">
                I care deeply about system correctness, measurable performance,
                and clean architecture. I've worked across the full delivery
                lifecycle — from stakeholder requirements through schema design,
                API development, CI/CD, and cloud deployment on AWS.
              </p>
              <p className="mt-5 text-balance text-base leading-relaxed text-muted-foreground">
                Based in Singapore. Currently open to full-time opportunities.
              </p>
            </CardContent>
          </Card>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {strengths.map((s, i) => (
            <Reveal key={s.title} delay={0.06 + i * 0.03}>
              <Card className="h-full">
                <CardContent className="p-6">
                  <p className="text-sm font-semibold">{s.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {s.desc}
                  </p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
