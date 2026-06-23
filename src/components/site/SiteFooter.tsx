import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Twitter, Mail, MapPin } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-muted/40">
      <div className="container-x py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <span className="grid h-10 w-10 place-items-center rounded-xl gradient-bg text-primary-foreground font-bold">R</span>
            <div>
              <div className="font-display text-lg font-bold">Rahul K. Sah</div>
              <div className="text-xs text-muted-foreground">Performance Marketing Specialist · Meta Ads Expert</div>
            </div>
          </div>
          <p className="mt-4 max-w-md text-sm text-muted-foreground">
            Turning ad spend into business growth through strategic Facebook & Instagram advertising.
          </p>
          <div className="mt-5 flex gap-3">
            {[Facebook, Instagram, Linkedin, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="social"
                className="grid h-9 w-9 place-items-center rounded-lg border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <div className="text-sm font-semibold mb-3">Explore</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#services" className="hover:text-foreground">Services</a></li>
            <li><a href="#portfolio" className="hover:text-foreground">Portfolio</a></li>
            <li><a href="#case-studies" className="hover:text-foreground">Case Studies</a></li>
            <li><a href="#faq" className="hover:text-foreground">FAQ</a></li>
            <li><a href="#blog" className="hover:text-foreground">Blog</a></li>
          </ul>
        </div>

        <div>
          <div className="text-sm font-semibold mb-3">Contact</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> hello@rahulksah.com</li>
            <li><a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="hover:text-foreground">WhatsApp: +977 9804885936</a></li>
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5" /> Kathmandu, Nepal</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-x py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Rahul K. Sah. All rights reserved.</div>
          <div className="flex gap-4">
            <Link to="/privacy" className="hover:text-foreground">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-foreground">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
