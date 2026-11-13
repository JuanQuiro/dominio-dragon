"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Download } from "lucide-react";
import { copy, type Lang } from "@/content/site";

function LangToggle({
  lang,
  onChange,
  label,
}: {
  lang: Lang;
  onChange: (l: Lang) => void;
  label: string;
}) {
  return (
    <div
      role="group"
      aria-label={label}
      className="flex items-center gap-0.5 rounded-[3px] border border-line-strong p-0.5"
    >
      {(["es", "en"] as const).map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => onChange(l)}
          aria-pressed={lang === l}
          className={`rounded-[2px] px-2 py-1 text-[0.66rem] font-medium uppercase tracking-[0.1em] transition-colors ${
            lang === l ? "bg-accent text-paper" : "text-muted hover:text-ink"
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  );
}

function Section({
  id,
  index,
  label,
  title,
  note,
  children,
}: {
  id: string;
  index: string;
  label: string;
  title: string;
  note?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-16 border-t border-line">
      <div className="mx-auto grid max-w-page gap-8 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[190px_1fr] lg:gap-12">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <div className="flex flex-col gap-2.5">
            <span className="text-[0.66rem] font-medium tabular-nums tracking-[0.1em] text-accent">
              {index}
            </span>
            <span className="h-px w-8 bg-accent/40" aria-hidden="true" />
            <span className="max-w-[9.5rem] text-[0.66rem] font-medium uppercase leading-[1.6] tracking-[0.16em] text-accent">
              {label}
            </span>
          </div>
        </div>
        <div className="min-w-0">
          <h2 className="max-w-[26ch] text-[clamp(1.65rem,3.2vw,2.35rem)] font-semibold leading-[1.12] tracking-[-0.025em]">
            {title}
          </h2>
          {note ? (
            <p className="mt-4 max-w-[62ch] text-[0.93rem] leading-[1.7] text-muted">
              {note}
            </p>
          ) : null}
          <div className="mt-10">{children}</div>
        </div>
      </div>
    </section>
  );
}

export default function Portfolio() {
  const [lang, setLang] = useState<Lang>("es");
  const t = copy[lang];

  useEffect(() => {
    const saved = window.localStorage.getItem("jq-lang");
    if (saved === "es" || saved === "en") setLang(saved);
  }, []);

  useEffect(() => {
    document.documentElement.lang = t.htmlLang;
    document.title = t.metaTitle;
    window.localStorage.setItem("jq-lang", lang);
  }, [lang, t.htmlLang, t.metaTitle]);

  return (
    <div className="min-h-screen">
      <a
        href="#work"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-[2px] focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:text-paper"
      >
        {t.nav.work}
      </a>

      <header className="sticky top-0 z-50 border-b border-line bg-paper/95 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-page items-center justify-between px-5 sm:px-8">
          <a
            href="#top"
            className="flex items-baseline gap-2.5 text-[0.82rem] font-semibold tracking-[-0.01em]"
          >
            Juan Quiroz
            <span className="hidden text-[0.62rem] font-normal uppercase tracking-[0.16em] text-muted sm:inline">
              {t.hero.role.split("·")[0].trim()}
            </span>
          </a>

          <nav
            aria-label={lang === "es" ? "Secciones" : "Sections"}
            className="hidden items-center gap-7 md:flex"
          >
            {(
              [
                ["#work", t.nav.work],
                ["#experience", t.nav.experience],
                ["#stack", t.nav.stack],
                ["#contact", t.nav.contact],
              ] as const
            ).map(([href, label]) => (
              <a
                key={href}
                href={href}
                className="text-[0.72rem] uppercase tracking-[0.1em] text-muted transition-colors hover:text-accent"
              >
                {label}
              </a>
            ))}
          </nav>

          <LangToggle lang={lang} onChange={setLang} label={t.switchLabel} />
        </div>
      </header>

      <main id="top">
        {/* ---------------- HERO ---------------- */}
        <section className="mx-auto max-w-page px-5 pb-16 pt-14 sm:px-8 sm:pb-20 sm:pt-24">
          <div className="rise flex items-center gap-2.5">
            <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            <span className="text-[0.64rem] uppercase tracking-[0.18em] text-muted">
              {t.hero.availability}
            </span>
          </div>

          <h1 className="rise rise-1 mt-7 text-balance text-[clamp(3rem,10vw,6.2rem)] font-extrabold leading-[0.88] tracking-tightest">
            Juan Quiroz
          </h1>

          <p className="rise rise-1 mt-6 text-[clamp(1.05rem,2.4vw,1.5rem)] font-medium tracking-[-0.015em] text-accent">
            {t.hero.role}
          </p>

          <div className="rise rise-2 mt-10 grid gap-8 border-t border-line pt-8 sm:grid-cols-[1fr_auto] sm:items-start sm:gap-14">
            <p className="max-w-[56ch] text-[1.06rem] leading-[1.75] text-ink-soft">
              {t.hero.intro}
            </p>
            <p className="max-w-[26ch] whitespace-pre-line text-[0.72rem] uppercase leading-[1.9] tracking-[0.1em] text-muted sm:text-right">
              {t.hero.location}
            </p>
          </div>

          <div className="rise rise-3 mt-9 flex flex-wrap items-center gap-3">
            <a
              href={t.hero.cvHref}
              download
              className="inline-flex items-center gap-2 rounded-[2px] bg-accent px-5 py-2.5 text-[0.78rem] font-medium tracking-[0.01em] text-paper transition-colors hover:bg-[#153a50]"
            >
              <Download size={14} strokeWidth={1.75} aria-hidden="true" />
              {t.hero.ctaCv}
            </a>
            <a
              href={`mailto:${t.contact.email}`}
              className="inline-flex items-center gap-2 rounded-[2px] border border-line-strong px-5 py-2.5 text-[0.78rem] font-medium tracking-[0.01em] text-ink transition-colors hover:border-accent hover:text-accent"
            >
              {t.hero.ctaContact}
              <ArrowUpRight size={14} strokeWidth={1.75} aria-hidden="true" />
            </a>
          </div>
        </section>

        {/* ---------------- PROOF ---------------- */}
        <section
          aria-label={t.proof.label}
          className="border-y border-accent bg-accent text-paper"
        >
          <div className="mx-auto max-w-page px-5 py-9 sm:px-8 sm:py-10">
            <div className="flex items-center gap-3 text-[0.6rem] font-medium uppercase tracking-[0.2em] text-paper/55">
              <span className="h-px w-6 bg-paper/35" aria-hidden="true" />
              {t.proof.label}
            </div>
            <dl className="mt-6 grid grid-cols-2 gap-x-8 gap-y-7 border-t border-paper/20 pt-7 sm:grid-cols-4">
              {t.proof.items.map((m) => (
                <div
                  key={m.label}
                  className="sm:border-l sm:border-paper/20 sm:pl-7 sm:first:border-l-0 sm:first:pl-0"
                >
                  <dd className="text-[clamp(1.8rem,4vw,2.5rem)] font-semibold leading-none tracking-[-0.03em] tabular-nums">
                    {m.value}
                  </dd>
                  <dt className="mt-2 text-[0.6rem] uppercase leading-snug tracking-[0.14em] text-paper/60">
                    {m.label}
                  </dt>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* ---------------- WORK ---------------- */}
        <Section
          id="work"
          index={t.work.index}
          label={t.work.label}
          title={t.work.title}
          note={t.work.note}
        >
          <div>
            {t.work.products.map((p) => (
              <article
                key={p.name}
                className="border-t border-line-strong pt-8 first:border-t-0 first:pt-0 [&+article]:mt-12"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2">
                  <h3 className="text-[1.55rem] font-semibold leading-tight tracking-[-0.025em]">
                    {p.name}
                  </h3>
                  <span className="text-[0.64rem] uppercase tracking-[0.13em] text-muted">
                    {p.kind}
                  </span>
                </div>

                <p className="mt-4 max-w-[68ch] text-[0.94rem] leading-[1.75] text-ink-soft">
                  {p.body}
                </p>

                <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-6 border-y border-line py-6 sm:grid-cols-4">
                  {p.metrics.map((m) => (
                    <div key={m.label}>
                      <div className="text-[1.7rem] font-semibold leading-none tracking-[-0.03em] tabular-nums text-accent">
                        {m.value}
                      </div>
                      <div className="mt-2.5 flex items-start gap-2 text-[0.62rem] uppercase leading-snug tracking-[0.11em] text-muted">
                        <span
                          className="mt-[4px] h-px w-3 shrink-0 bg-accent/40"
                          aria-hidden="true"
                        />
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-5 flex flex-wrap items-center justify-between gap-x-6 gap-y-2">
                  <p className="text-[0.76rem] leading-relaxed text-muted">
                    {p.stack}
                  </p>
                  <span className="text-[0.62rem] uppercase tracking-[0.12em] text-muted/80">
                    {t.work.privateNote}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </Section>

        {/* ---------------- EXPERIENCE ---------------- */}
        <Section
          id="experience"
          index={t.experience.index}
          label={t.experience.label}
          title={t.experience.title}
          note={t.experience.note}
        >
          <ol>
            {t.experience.roles.map((r) => (
              <li
                key={r.company}
                className="grid gap-2 border-t border-line py-7 first:border-t-0 first:pt-0 sm:grid-cols-[150px_1fr] sm:gap-8"
              >
                <span className="flex items-start gap-2 text-[0.66rem] uppercase tracking-[0.12em] text-muted sm:pt-1">
                  {r.period.includes("Present") ? (
                    <span className="relative mt-[5px] flex h-1.5 w-1.5 shrink-0">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-50" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
                    </span>
                  ) : null}
                  <span>{r.period}</span>
                </span>
                <div>
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-0.5">
                    <h3 className="text-[1.02rem] font-semibold tracking-[-0.01em]">
                      {r.company}
                    </h3>
                    <span className="text-[0.82rem] text-accent">
                      {r.title}
                    </span>
                  </div>
                  <p className="mt-2 max-w-[64ch] text-[0.9rem] leading-[1.7] text-ink-soft">
                    {r.summary}
                  </p>
                  {r.detail ? (
                    <p className="mt-2.5 text-[0.64rem] uppercase tracking-[0.13em] text-muted">
                      {r.detail}
                    </p>
                  ) : null}
                </div>
              </li>
            ))}
          </ol>
        </Section>

        {/* ---------------- STACK ---------------- */}
        <Section
          id="stack"
          index={t.stack.index}
          label={t.stack.label}
          title={t.stack.title}
          note={t.stack.note}
        >
          <dl className="border-y border-line">
            {t.stack.groups.map((g) => (
              <div
                key={g.label}
                className="grid gap-1 border-t border-line py-4 first:border-t-0 sm:grid-cols-[150px_1fr] sm:gap-8"
              >
                <dt className="text-[0.64rem] uppercase tracking-[0.13em] text-muted sm:pt-1">
                  {g.label}
                </dt>
                <dd className="text-[0.9rem] leading-[1.65] text-ink-soft">
                  {g.items}
                </dd>
              </div>
            ))}
          </dl>
        </Section>

        {/* ---------------- CONTACT ---------------- */}
        <section
          id="contact"
          className="scroll-mt-16 border-t border-accent bg-accent text-paper"
        >
          <div className="mx-auto max-w-page px-5 py-20 sm:px-8 sm:py-24">
            <div className="flex items-center gap-3 text-[0.64rem] font-medium uppercase tracking-[0.18em] text-paper/60">
              <span className="tabular-nums text-paper/85">{t.contact.index}</span>
              <span className="h-px w-8 bg-paper/30" aria-hidden="true" />
              <span>{t.contact.label}</span>
            </div>

            <h2 className="mt-7 max-w-[20ch] text-balance text-[clamp(2.1rem,5.4vw,3.6rem)] font-semibold leading-[1.03] tracking-[-0.03em]">
              {t.contact.title}
            </h2>
            <p className="mt-6 max-w-[54ch] text-[0.98rem] leading-[1.75] text-paper/70">
              {t.contact.body}
            </p>

            <a
              href={`mailto:${t.contact.email}`}
              className="group mt-12 inline-flex items-baseline gap-3 border-b border-paper/25 pb-3 text-[clamp(1.3rem,4.4vw,2.4rem)] font-medium tracking-[-0.025em] text-paper transition-colors hover:border-paper"
            >
              <span>{t.contact.email}</span>
              <ArrowUpRight
                size={24}
                strokeWidth={1.5}
                aria-hidden="true"
                className="translate-y-[-2px] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>

            <div className="mt-12 flex flex-wrap gap-x-10 gap-y-4">
              {t.contact.links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="me noopener noreferrer"
                  className="group inline-flex items-center gap-1.5 text-[0.78rem] font-medium uppercase tracking-[0.1em] text-paper/65 transition-colors hover:text-paper"
                >
                  {l.label}
                  <ArrowUpRight
                    size={13}
                    strokeWidth={1.75}
                    aria-hidden="true"
                    className="text-paper/45 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              ))}
              <a
                href={t.contact.cvHref}
                download
                className="inline-flex items-center gap-1.5 text-[0.78rem] font-medium uppercase tracking-[0.1em] text-paper/65 transition-colors hover:text-paper"
              >
                <Download size={13} strokeWidth={1.75} aria-hidden="true" />
                {t.contact.cvLabel}
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-paper/15 bg-accent text-paper/50">
        <div className="mx-auto flex max-w-page flex-col gap-1.5 px-5 py-8 text-[0.68rem] tracking-[0.02em] sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <span>© 2026 {t.footer.rights}</span>
          <span>{t.footer.built}</span>
        </div>
      </footer>
    </div>
  );
}
