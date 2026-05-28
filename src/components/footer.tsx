"use client";

import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-medium">Gowryshuthan</p>
            <p className="mt-1 text-xs text-muted-foreground">
              © {new Date().getFullYear()} • All rights reserved
            </p>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="https://github.com/yourname"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/30 text-muted-foreground transition hover:bg-muted/60 hover:text-foreground"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/yourname/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/30 text-muted-foreground transition hover:bg-muted/60 hover:text-foreground"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="mailto:you@example.com"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/30 text-muted-foreground transition hover:bg-muted/60 hover:text-foreground"
              aria-label="Email"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
