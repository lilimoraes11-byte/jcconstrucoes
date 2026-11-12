import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { contatos, linkWhatsApp } from "@/lib/contatos";

const links = [
  { href: "#servicos", label: "Serviços" },
  { href: "#sobre", label: "Sobre" },
  { href: "#como-trabalhamos", label: "Como trabalhamos" },
  { href: "#contato", label: "Contato" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open ? "bg-navy-deep/95 shadow-soft backdrop-blur" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        <Logo />
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Principal">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-semibold uppercase tracking-wider text-navy-muted transition-colors hover:text-navy-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="hidden lg:block">
          <Button asChild variant="hero" size="lg">
            <a href={linkWhatsApp(contatos[0].numero)} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon /> Orçamento grátis
            </a>
          </Button>
        </div>
        <button
          type="button"
          className="rounded-md p-2 text-navy-foreground lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-navy-border px-5 pb-6 lg:hidden" aria-label="Menu móvel">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block border-b border-navy-border py-4 font-display text-lg font-semibold uppercase tracking-wide text-navy-foreground"
            >
              {l.label}
            </a>
          ))}
          <Button asChild variant="hero" size="xl" className="mt-5 w-full">
            <a href={linkWhatsApp(contatos[0].numero)} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon /> Orçamento grátis
            </a>
          </Button>
        </nav>
      )}
    </header>
  );
}
