"use client";

import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { projects } from "@/data/projects";

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-border bg-background/40 px-3 py-1 text-[11px] text-muted-foreground backdrop-blur">
      {children}
    </span>
  );
}

function LinkPill({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 rounded-full border border-border bg-background/30 px-3 py-2 text-xs text-muted-foreground transition hover:bg-muted/60 hover:text-foreground"
    >
      {children}
    </a>
  );
}

export function Projects() {
  return (
    <section id="projects" className="py-16">
      <Reveal>
        <h2 className="text-2xl font-semibold">Projects</h2>
      </Reveal>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <Reveal key={p.name}>
            <Card className="group">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.imageAlt}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <CardContent className="p-6">
                <h3 className="text-lg font-semibold">{p.name}</h3>

                <p className="mt-2 text-sm text-muted-foreground">
                  {p.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>

                <div className="mt-5 flex gap-3">
                  {p.githubUrl && (
                    <LinkPill href={p.githubUrl}>
                      <Github className="h-4 w-4" /> Code
                    </LinkPill>
                  )}

                  {p.liveUrl && (
                    <LinkPill href={p.liveUrl}>
                      <ExternalLink className="h-4 w-4" /> Live
                    </LinkPill>
                  )}
                </div>
              </CardContent>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
