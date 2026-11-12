import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeCheck,
  ClipboardList,
  Handshake,
  HardHat,
  KeyRound,
  MessageCircle,
  ShieldCheck,
  Award,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Header } from "@/components/site/Header";
import { Logo } from "@/components/site/Logo";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";
import { contatos, linkWhatsApp } from "@/lib/contatos";

import heroImg from "@/assets/hero-obra.jpg";
import equipeImg from "@/assets/equipe.jpg";
import pinturaImg from "@/assets/servico-pintura.jpg";
import pisoImg from "@/assets/servico-piso.jpg";
import eletricaImg from "@/assets/servico-eletrica.jpg";
import hidraulicaImg from "@/assets/servico-hidraulica.jpg";
import telhadosImg from "@/assets/servico-telhados.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "J.C Construções | Construção e Reforma em Geral" },
      {
        name: "description",
        content:
          "Pintura, piso, elétrica, hidráulica e telhados. Do projeto ao acabamento, a qualidade que sua obra merece. Orçamento pelo WhatsApp.",
      },
      { property: "og:title", content: "J.C Construções | Construção e Reforma em Geral" },
      {
        property: "og:description",
        content: "Do projeto ao acabamento, a qualidade que sua obra merece. Fale com José ou Cristiano pelo WhatsApp.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const servicos = [
  { titulo: "Pintura", texto: "Pintura interna e externa, texturas, massa corrida e acabamento impecável.", img: pinturaImg },
  { titulo: "Piso", texto: "Assentamento de porcelanato, cerâmica e revestimentos com nivelamento preciso.", img: pisoImg },
  { titulo: "Elétrica", texto: "Instalações, quadros de distribuição, tomadas e iluminação com segurança.", img: eletricaImg },
  { titulo: "Hidráulica", texto: "Encanamento, vazamentos, louças e metais para cozinhas e banheiros.", img: hidraulicaImg },
  { titulo: "Telhados", texto: "Construção, troca de telhas, reparos e impermeabilização de telhados.", img: telhadosImg },
];

const valores = [
  { icon: Handshake, titulo: "Compromisso", texto: "Prazos combinados são prazos cumpridos." },
  { icon: Award, titulo: "Qualidade", texto: "Materiais certos e acabamento caprichado." },
  { icon: ShieldCheck, titulo: "Segurança", texto: "Obra organizada e equipe com EPI." },
  { icon: BadgeCheck, titulo: "Confiança", texto: "Transparência do orçamento à entrega." },
];

const etapas = [
  { icon: MessageCircle, titulo: "Contato", texto: "Chame no WhatsApp e conte o que precisa." },
  { icon: ClipboardList, titulo: "Visita e orçamento", texto: "Avaliamos o local e enviamos um orçamento claro." },
  { icon: HardHat, titulo: "Execução", texto: "Obra feita com cuidado, limpeza e acompanhamento." },
  { icon: KeyRound, titulo: "Entrega", texto: "Conferimos cada detalhe com você antes de finalizar." },
];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Servicos />
        <Sobre />
        <ComoTrabalhamos />
        <Contato />
      </main>
      <Footer />
      <WhatsAppFlutuante />
    </div>
  );
}

function Hero() {
  return (
    <section id="inicio" className="relative isolate min-h-[92vh] overflow-hidden bg-navy-deep">
      <img
        src={heroImg}
        alt="Profissional da J.C Construções pintando a fachada de uma casa"
        width={1600}
        height={1024}
        className="absolute inset-0 -z-20 h-full w-full object-cover object-[70%_center]"
      />
      <div className="absolute inset-0 -z-10 bg-hero-overlay" />
      <div className="mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-center px-5 pb-20 pt-32 lg:px-8">
        <div className="max-w-2xl animate-rise">
          <span className="inline-flex items-center gap-2 rounded-full border border-navy-foreground/20 bg-navy-foreground/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-accent backdrop-blur">
            <HardHat className="h-4 w-4" /> Construção e reforma em geral
          </span>
          <h1 className="mt-6 text-5xl font-extrabold uppercase leading-[0.95] text-navy-foreground sm:text-6xl lg:text-7xl">
            Do projeto ao acabamento,{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">a qualidade</span> que sua obra merece.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-navy-muted">
            Pintura, piso, elétrica, hidráulica e telhados com uma equipe experiente, organizada e comprometida com o
            seu prazo.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="hero" size="xl">
              <a href={linkWhatsApp(contatos[0].numero)} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon /> Pedir orçamento grátis
              </a>
            </Button>
            <Button asChild variant="navyOutline" size="xl">
              <a href="#servicos">
                Ver serviços <ArrowRight />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  return (
    <div className="relative z-10 mx-auto -mt-14 max-w-6xl px-5 lg:px-8">
      <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl bg-border shadow-card lg:grid-cols-4">
        {valores.map(({ icon: Icon, titulo, texto }) => (
          <div key={titulo} className="flex items-start gap-4 bg-card p-5 sm:p-6">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-secondary text-primary">
              <Icon className="h-5 w-5" />
            </span>
            <div>
              <p className="font-display text-lg font-bold uppercase tracking-wide text-navy">{titulo}</p>
              <p className="mt-0.5 text-sm text-muted-foreground">{texto}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SectionTitle({ eyebrow, titulo, texto }: { eyebrow: string; titulo: string; texto?: string }) {
  return (
    <div className="max-w-2xl">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 text-4xl font-extrabold uppercase leading-none text-navy sm:text-5xl">{titulo}</h2>
      {texto && <p className="mt-5 text-lg text-muted-foreground">{texto}</p>}
    </div>
  );
}

function Servicos() {
  return (
    <section id="servicos" className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
      <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
        <SectionTitle
          eyebrow="Nossos serviços"
          titulo="Tudo para sua obra em um só lugar"
          texto="Da pequena manutenção à reforma completa, cuidamos de cada etapa com mão de obra qualificada."
        />
        <Button asChild variant="navy" size="lg">
          <a href="#contato">
            Solicitar orçamento <ArrowRight />
          </a>
        </Button>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-6">
        {servicos.map((s, i) => (
          <article
            key={s.titulo}
            className={`group overflow-hidden rounded-xl bg-card shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card ${
              i < 2 ? "lg:col-span-3" : "lg:col-span-2"
            }`}
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={s.img}
                alt={`Serviço de ${s.titulo.toLowerCase()}`}
                width={912}
                height={736}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute left-4 top-4 rounded-md bg-navy-deep/85 px-3 py-1 font-display text-sm font-bold tracking-widest text-accent backdrop-blur">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <div className="border-t-4 border-primary p-6">
              <h3 className="text-2xl font-bold uppercase text-navy">{s.titulo}</h3>
              <p className="mt-2 text-muted-foreground">{s.texto}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Sobre() {
  return (
    <section id="sobre" className="relative overflow-hidden bg-gradient-navy">
      <div className="absolute inset-0 blueprint-grid" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 py-24 lg:grid-cols-2 lg:px-8 lg:py-32">
        <div className="relative">
          <img
            src={equipeImg}
            alt="José e Cristiano analisando o projeto de uma reforma"
            width={1024}
            height={1024}
            loading="lazy"
            className="aspect-square w-full rounded-2xl object-cover shadow-card"
          />
          <div className="absolute -bottom-6 -right-2 rounded-xl bg-gradient-primary px-6 py-5 shadow-glow sm:-right-6">
            <p className="font-display text-4xl font-extrabold leading-none text-primary-foreground">100%</p>
            <p className="mt-1 text-sm font-semibold uppercase tracking-wider text-primary-foreground">
              Compromisso com você
            </p>
          </div>
        </div>
        <div>
          <p className="eyebrow">Quem somos</p>
          <h2 className="mt-3 text-4xl font-extrabold uppercase leading-none text-navy-foreground sm:text-5xl">
            Mãos experientes, obra bem feita
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-navy-muted">
            A J.C Construções é liderada por José e Cristiano, profissionais que acompanham cada obra de perto. Nosso
            trabalho é transformar a sua casa com responsabilidade, limpeza e um acabamento que dura.
          </p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {["Orçamento sem compromisso", "Atendimento direto com os responsáveis", "Materiais de qualidade", "Obra limpa e organizada"].map(
              (item) => (
                <li key={item} className="flex items-center gap-3 text-navy-foreground">
                  <BadgeCheck className="h-5 w-5 shrink-0 text-accent" />
                  <span className="font-medium">{item}</span>
                </li>
              ),
            )}
          </ul>
        </div>
      </div>
    </section>
  );
}

function ComoTrabalhamos() {
  return (
    <section id="como-trabalhamos" className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
      <SectionTitle eyebrow="Como trabalhamos" titulo="Simples, claro e sem surpresas" />
      <ol className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {etapas.map(({ icon: Icon, titulo, texto }, i) => (
          <li key={titulo} className="relative rounded-xl border bg-card p-7 shadow-soft">
            <span className="absolute right-6 top-5 font-display text-5xl font-extrabold text-secondary">
              {i + 1}
            </span>
            <span className="grid h-12 w-12 place-items-center rounded-lg bg-navy text-accent">
              <Icon className="h-6 w-6" />
            </span>
            <h3 className="mt-6 text-xl font-bold uppercase text-navy">{titulo}</h3>
            <p className="mt-2 text-muted-foreground">{texto}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

function Contato() {
  return (
    <section id="contato" className="px-5 pb-24 lg:px-8 lg:pb-32">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-gradient-navy px-6 py-16 shadow-card sm:px-12 lg:py-20">
        <div className="absolute inset-0 blueprint-grid" aria-hidden="true" />
        <div className="relative grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <p className="eyebrow">Fale com a gente</p>
            <h2 className="mt-3 text-4xl font-extrabold uppercase leading-none text-navy-foreground sm:text-5xl">
              Pronto para começar sua obra?
            </h2>
            <p className="mt-5 max-w-lg text-lg text-navy-muted">
              Chame no WhatsApp e receba seu orçamento sem compromisso. Atendemos com rapidez e atenção.
            </p>
          </div>
          <div className="grid gap-4">
            {contatos.map((c) => (
              <a
                key={c.numero}
                href={linkWhatsApp(c.numero)}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-5 rounded-xl border border-navy-border bg-navy-foreground/5 p-5 transition-all hover:border-primary hover:bg-navy-foreground/10"
              >
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-gradient-primary text-primary-foreground shadow-glow">
                  <WhatsAppIcon className="h-7 w-7" />
                </span>
                <span className="flex-1">
                  <span className="block text-sm font-semibold uppercase tracking-[0.2em] text-accent">{c.nome}</span>
                  <span className="block font-display text-3xl font-bold text-navy-foreground">{c.telefone}</span>
                </span>
                <ArrowRight className="h-6 w-6 text-navy-muted transition-transform group-hover:translate-x-1 group-hover:text-primary" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-navy-deep">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-5 py-10 md:flex-row lg:px-8">
        <Logo />
        <p className="text-center text-sm text-navy-muted">
          José {contatos[0].telefone} · Cristiano {contatos[1].telefone}
        </p>
        <p className="text-sm text-navy-muted">© {new Date().getFullYear()} J.C Construções</p>
      </div>
    </footer>
  );
}

function WhatsAppFlutuante() {
  return (
    <a
      href={linkWhatsApp(contatos[0].numero)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-gradient-primary text-primary-foreground shadow-glow transition-transform hover:scale-110"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
