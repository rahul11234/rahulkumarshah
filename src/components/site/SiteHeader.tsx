import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Moon, Sun } from "lucide-react";
import { NAV_LINKS } from "@/lib/site";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const stored = typeof window !== "undefined" && localStorage.getItem("theme");
    const prefersDark = typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = stored ? stored === "dark" : prefersDark;
    document.documentElement.classList.toggle("dark", isDark);
    setDark(isDark);
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all ${
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-md shadow-sm"
          : "bg-background/40 backdrop-blur"
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2 font-display text-lg font-bold">
          <span className="grid h-9 w-9 place-items-center rounded-xl gradient-bg text-primary-foreground">R</span>
          <span className="hidden sm:inline">Rahul K. Sah</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className="text-muted-foreground hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="grid h-9 w-9 place-items-center rounded-lg border border-border hover:bg-accent/10 transition"
          >
            {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <Button asChild className="hidden md:inline-flex gradient-bg text-primary-foreground hover:opacity-90">
            <a href="#contact">Free Consultation</a>
          </Button>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            className="lg:hidden grid h-9 w-9 place-items-center rounded-lg border border-border"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="container-x flex flex-col py-4 gap-1">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-2 py-3 rounded-md text-sm font-medium hover:bg-muted"
              >
                {l.label}
              </a>
            ))}
            <Button asChild className="mt-2 gradient-bg text-primary-foreground">
              <a href="#contact" onClick={() => setOpen(false)}>Free Consultation</a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
