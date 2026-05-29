"use client";

import type { FormEvent } from "react";
import { useMemo, useState } from "react";
import { Mail, Github, Linkedin } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import emailjs from "@emailjs/browser";

type FormState = {
  name: string;
  email: string;
  message: string;
};

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

export function Contact() {
  const [state, setState] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });
  const [touched, setTouched] = useState<Record<keyof FormState, boolean>>({
    name: false,
    email: false,
    message: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const errors = useMemo(() => {
    const e: Partial<Record<keyof FormState, string>> = {};
    if (!state.name.trim()) e.name = "Please enter your name.";
    if (!state.email.trim()) e.email = "Please enter your email.";
    else if (!isEmail(state.email)) e.email = "Please enter a valid email.";
    if (!state.message.trim()) e.message = "Please write a short message.";
    return e;
  }, [state.email, state.message, state.name]);

  const isValid = Object.keys(errors).length === 0;

  async function onSubmit(e: FormEvent) {
    e.preventDefault();

    setTouched({
      name: true,
      email: true,
      message: true,
    });

    if (!isValid) return;

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: state.name,
          from_email: state.email,
          message: state.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      );

      setSubmitted(true);

      setTimeout(() => setSubmitted(false), 2200);

      setState({
        name: "",
        email: "",
        message: "",
      });

      setTouched({
        name: false,
        email: false,
        message: false,
      });
    } catch (error) {
      console.error(error);
      alert("Failed to send message");
    }
  }

  return (
    <section id="contact" className="py-16 sm:py-20">
      <Reveal>
        <p className="text-sm font-medium text-muted-foreground">Contact</p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
          Let's work together.
        </h2>
      </Reveal>

      <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_0.9fr]">
        <Reveal delay={0.05}>
          <Card>
            <CardContent className="p-6 sm:p-8">
              <form onSubmit={onSubmit} className="grid gap-4">
                <div className="grid gap-2">
                  <label className="text-sm font-medium" htmlFor="name">
                    Name
                  </label>
                  <Input
                    id="name"
                    value={state.name}
                    onChange={(e) =>
                      setState((s) => ({ ...s, name: e.target.value }))
                    }
                    onBlur={() => setTouched((t) => ({ ...t, name: true }))}
                    placeholder="Your name"
                    aria-invalid={!!(touched.name && errors.name)}
                  />
                  {touched.name && errors.name ? (
                    <p className="text-xs text-red-400">{errors.name}</p>
                  ) : null}
                </div>

                <div className="grid gap-2">
                  <label className="text-sm font-medium" htmlFor="email">
                    Email
                  </label>
                  <Input
                    id="email"
                    value={state.email}
                    onChange={(e) =>
                      setState((s) => ({ ...s, email: e.target.value }))
                    }
                    onBlur={() => setTouched((t) => ({ ...t, email: true }))}
                    placeholder="you@example.com"
                    aria-invalid={!!(touched.email && errors.email)}
                  />
                  {touched.email && errors.email ? (
                    <p className="text-xs text-red-400">{errors.email}</p>
                  ) : null}
                </div>

                <div className="grid gap-2">
                  <label className="text-sm font-medium" htmlFor="message">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    value={state.message}
                    onChange={(e) =>
                      setState((s) => ({ ...s, message: e.target.value }))
                    }
                    onBlur={() => setTouched((t) => ({ ...t, message: true }))}
                    placeholder="Tell me about the role or what you're building..."
                    aria-invalid={!!(touched.message && errors.message)}
                  />
                  {touched.message && errors.message ? (
                    <p className="text-xs text-red-400">{errors.message}</p>
                  ) : null}
                </div>

                <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
                  <Button type="submit" disabled={submitted}>
                    {submitted ? "Sent ✓" : "Send Message"}
                    <Mail className="h-4 w-4 opacity-80" />
                  </Button>
                  <p className="text-xs text-muted-foreground">
                    This demo form doesn't send emails yet — wire it to your
                    preferred service later.
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </Reveal>

        <Reveal delay={0.08}>
          <Card className="h-full">
            <CardContent className="flex h-full flex-col justify-between gap-6 p-6 sm:p-8">
              <div>
                <p className="text-sm font-semibold">Reach out directly</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Prefer async? Connect on LinkedIn, browse my code on GitHub,
                  or drop me an email.
                </p>

                <div className="mt-5 grid gap-2">
                  <a
                    href="https://github.com/Gowry1"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between rounded-2xl border border-border bg-background/30 px-4 py-3 text-sm transition hover:bg-muted/60"
                  >
                    <span className="inline-flex items-center gap-2">
                      <Github className="h-4 w-4" /> GitHub
                    </span>
                    <span className="text-muted-foreground">
                      github.com/Gowry1
                    </span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/krishnabalan-gowryshuthan"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between rounded-2xl border border-border bg-background/30 px-4 py-3 text-sm transition hover:bg-muted/60"
                  >
                    <span className="inline-flex items-center gap-2">
                      <Linkedin className="h-4 w-4" /> LinkedIn
                    </span>
                    <span className="text-muted-foreground">
                      krishnabalan-gowryshuthan
                    </span>
                  </a>
                  <a
                    href="mailto:gowryshuthan24@gmail.com"
                    className="flex items-center justify-between rounded-2xl border border-border bg-background/30 px-4 py-3 text-sm transition hover:bg-muted/60"
                  >
                    <span className="inline-flex items-center gap-2">
                      <Mail className="h-4 w-4" /> Email
                    </span>
                    <span className="text-muted-foreground">
                      gowryshuthan24@gmail.com
                    </span>
                  </a>
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-[radial-gradient(700px_circle_at_20%_20%,rgba(99,102,241,0.18),transparent_55%),radial-gradient(500px_circle_at_85%_40%,rgba(16,185,129,0.12),transparent_55%)] p-5">
                <p className="text-sm font-semibold">What I bring</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Production-proven Java / Spring Boot systems, measurable
                  performance wins, and a full-stack capability that covers
                  React UIs through to AWS deployments.
                </p>
              </div>
            </CardContent>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}
