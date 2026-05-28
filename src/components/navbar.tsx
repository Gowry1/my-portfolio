"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isDark = useMemo(() => {
    const t = theme === "system" ? resolvedTheme : theme;
    return t !== "light";
  }, [resolvedTheme, theme]);

  return (
    <header className="sticky top-0 z-50">
      <div className={cn("mx-auto max-w-6xl px-4 sm:px-6", "pt-3 sm:pt-4")}>
        <div
          className={cn(
            "flex items-center justify-between rounded-2xl border border-transparent px-3 py-3",
            "transition",
            scrolled &&
              "border-border bg-background/60 shadow-glow backdrop-blur supports-[backdrop-filter]:bg-background/50",
          )}
        >
          <Link
            href="#top"
            className="group inline-flex items-center gap-2 rounded-xl px-2 py-1 text-sm font-semibold tracking-tight"
            aria-label="Go to top"
          >
            <span className="h-2 w-2 rounded-full bg-white/70 shadow-[0_0_14px_rgba(99,102,241,0.55)] group-hover:shadow-[0_0_18px_rgba(99,102,241,0.75)] transition" />
            <span>Gowryshuthan</span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-3 py-2 text-sm text-muted-foreground transition hover:bg-muted/60 hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(isDark ? "light" : "dark")}
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </Button>
            <Button asChild variant="outline" className="hidden sm:inline-flex">
              <a href="#contact">Contact</a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
