"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function Blob({ className, delay = 0 }: { className: string; delay?: number }) {
  return (
    <motion.div
      className={cn(
        "pointer-events-none absolute rounded-full blur-3xl",
        className,
      )}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay }}
    />
  );
}

export function Hero() {
  return (
    <section id="top" className="relative">
      <div className="relative overflow-hidden rounded-[28px] border border-border bg-card/50 shadow-glow backdrop-blur">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(1200px_circle_at_15%_10%,rgba(99,102,241,0.22),transparent_55%),radial-gradient(900px_circle_at_85%_20%,rgba(16,185,129,0.14),transparent_55%),radial-gradient(700px_circle_at_50%_90%,rgba(236,72,153,0.14),transparent_60%)]" />
          <div className="absolute inset-0 opacity-0 dark:opacity-100 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.0),rgba(0,0,0,0.35))]" />
          <Blob
            className="left-[-10%] top-[-20%] h-[380px] w-[380px] bg-indigo-500/25 animate-floaty"
            delay={0.1}
          />
          <Blob
            className="right-[-12%] top-[10%] h-[320px] w-[320px] bg-emerald-400/20 animate-floaty"
            delay={0.25}
          />
          <Blob
            className="bottom-[-25%] left-[35%] h-[420px] w-[420px] bg-pink-400/15 animate-floaty"
            delay={0.4}
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.06),transparent_35%)]" />
        </div>

        <div className="relative px-6 py-16 sm:px-10 sm:py-20">
          <div className="mx-auto grid max-w-5xl items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <motion.p
                className="inline-flex items-center rounded-full border border-border bg-background/40 px-4 py-2 text-xs font-medium text-muted-foreground backdrop-blur"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              >
                Available for opportunities · Based in Singapore
              </motion.p>

              <motion.h1
                className="mt-6 text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.05,
                }}
              >
                Krishnabalan Gowryshuthan
              </motion.h1>

              <motion.p
                className="mt-4 text-balance text-lg text-muted-foreground sm:text-xl"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.1,
                }}
              >
                Software Engineer with 3+ years shipping production web
                applications — Java / Spring Boot backend, React / TypeScript
                frontend, deployed on AWS.
              </motion.p>

              <motion.div
                className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.15,
                }}
              >
                <Button asChild className="group">
                  <a href="#projects">
                    View Projects
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                  </a>
                </Button>
                <Button asChild variant="outline" className="group">
                  <a href="#contact">
                    Get in Touch
                    <Mail className="h-4 w-4 opacity-80" />
                  </a>
                </Button>
              </motion.div>

              <motion.div
                className="mt-10 flex flex-wrap items-center gap-3 text-xs text-muted-foreground"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <span className="rounded-full border border-border bg-background/40 px-3 py-2 backdrop-blur">
                  Java · Spring Boot
                </span>
                <span className="rounded-full border border-border bg-background/40 px-3 py-2 backdrop-blur">
                  React · TypeScript
                </span>
                <span className="rounded-full border border-border bg-background/40 px-3 py-2 backdrop-blur">
                  PostgreSQL · Redis · AWS
                </span>
              </motion.div>
            </div>

            <motion.div
              className="relative mx-auto w-full max-w-sm"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="absolute -inset-6 rounded-[30px] bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.18),transparent_60%)]" />
              <div className="relative overflow-hidden rounded-[24px] border border-border bg-background/40 shadow-glow backdrop-blur">
                <div className="relative aspect-[4/5]">
                  <Image
                    src="/images/personal.jpeg"
                    alt="Krishnabalan Gowryshuthan"
                    fill
                    className="object-cover opacity-90"
                    priority
                  />
                </div>
                <div className="border-t border-border px-6 py-5">
                  <p className="text-sm font-medium">Currently:</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Open to full-time Software Engineer roles in Singapore. 25%
                    latency reductions and clean architecture are my thing.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="h-14" />
    </section>
  );
}
