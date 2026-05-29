"use client";

import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";
import { Card, CardContent } from "@/components/ui/card";

const items = [
  {
    when: "Sep 2023 — Jun 2024",
    title: "B.Sc. (Hons) Computer Science & Software Engineering",
    university: "University of Bedfordshire",
    url: "https://www.beds.ac.uk/",
    image: "/images/beds.jpg",
    grade: "Second Class Upper",
    desc: "Studied software engineering fundamentals, algorithms, and system design. Complemented concurrent industry experience with structured academic depth in computer science.",
  },

  {
    when: "Mar 2021 — Sep 2023",
    title: "Higher National Diploma in Information Technology",
    university: "SLIIT City University",
    url: "https://www.sliit.lk/",
    image: "/images/sliit.jpg",
    grade: "Languages & Soft Skills",
    desc: "Focused on information technology concepts, software development, communication skills, and professional growth through academic and practical learning.",
  },
];

export function Education() {
  return (
    <section id="education" className="py-16 sm:py-20">
      <Reveal>
        <p className="text-sm font-medium text-muted-foreground">Education</p>

        <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
          Academic Background
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
                      className="mt-3 flex items-center gap-3 text-sm font-medium text-blue-500 transition hover:underline"
                    >
                      <Image
                        src={it.image}
                        alt={it.university}
                        width={32}
                        height={32}
                        className="rounded-md object-contain"
                      />

                      <span>{it.university}</span>
                    </a>

                    <p className="mt-2 text-xs text-muted-foreground/70">
                      {it.grade}
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
