import Link from "next/link";
import QrGenerator from "@/components/QrGenerator";
import { LANDING_PAGES, SITE_NAME, SITE_URL } from "@/lib/constants";

export interface LandingFaqItem {
  q: string;
  a: string;
}

export interface LandingBlock {
  heading: string;
  paragraphs: string[];
  code?: string;
}

export interface LandingPageProps {
  slug: string;
  h1: string;
  tagline: string;
  intro: string[];
  howToHeading: string;
  steps: string[];
  blocks: LandingBlock[];
  faqs: LandingFaqItem[];
  generatorInitialData?: string;
  generatorLabel?: string;
  ctaHeading: string;
}

export default function LandingPage({
  slug,
  h1,
  tagline,
  intro,
  howToHeading,
  steps,
  blocks,
  faqs,
  generatorInitialData,
  generatorLabel,
  ctaHeading,
}: LandingPageProps) {
  const pageUrl = `${SITE_URL}/${slug}`;
  const others = LANDING_PAGES.filter((p) => p.slug !== slug);
  const current = LANDING_PAGES.find((p) => p.slug === slug);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: SITE_NAME, item: SITE_URL },
      { "@type": "ListItem", position: 2, name: current?.navLabel ?? h1, item: pageUrl },
    ],
  };

  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: howToHeading,
    step: steps.map((text, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      text,
    })),
  };

  return (
    <div id="top" className="mx-auto max-w-5xl px-4 py-8">
      <nav className="mb-6 text-sm text-slate-500" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-brand-600 hover:underline">
          {SITE_NAME}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-slate-700">{current?.navLabel ?? h1}</span>
      </nav>

      <header className="mb-8">
        <h1 className="text-3xl font-bold text-brand-600 sm:text-4xl">{h1}</h1>
        <p className="mt-3 text-lg text-slate-600">{tagline}</p>
      </header>

      <article className="mb-8 space-y-4 text-slate-700">
        {intro.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </article>

      <QrGenerator initialData={generatorInitialData} dataLabel={generatorLabel} />

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-slate-800">{howToHeading}</h2>
        <ol className="mt-4 list-decimal space-y-2 pl-6 text-slate-700">
          {steps.map((s, i) => (
            <li key={i}>{s}</li>
          ))}
        </ol>
      </section>

      {blocks.map((block, i) => (
        <section key={i} className="mt-10">
          <h2 className="text-2xl font-bold text-slate-800">{block.heading}</h2>
          <div className="mt-3 space-y-3 text-slate-700">
            {block.paragraphs.map((p, j) => (
              <p key={j}>{p}</p>
            ))}
          </div>
          {block.code && (
            <pre className="mt-4 overflow-x-auto rounded-lg bg-slate-900 p-4 text-xs leading-relaxed text-slate-100">
              <code>{block.code}</code>
            </pre>
          )}
        </section>
      ))}

      <section className="mt-10">
        <h2 className="text-2xl font-bold text-slate-800">Frequently asked questions</h2>
        <div className="mt-4 space-y-3">
          {faqs.map((item, i) => (
            <details key={i} className="rounded-lg border border-slate-200 bg-white p-4">
              <summary className="cursor-pointer font-medium text-slate-800">{item.q}</summary>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="mt-10 rounded-2xl bg-brand-50 p-6 text-center">
        <h2 className="text-xl font-bold text-brand-700">{ctaHeading}</h2>
        <p className="mt-2 text-slate-600">
          Free, unlimited, no sign-up, and nothing you type ever leaves your browser.
        </p>
        <a
          href="#top"
          className="mt-4 inline-block rounded-lg bg-brand-600 px-6 py-2.5 font-medium text-white hover:bg-brand-700"
        >
          &uarr; Back to the generator
        </a>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-bold text-slate-800">More QR code tools</h2>
        <ul className="mt-3 flex flex-wrap gap-2">
          <li>
            <Link
              href="/"
              className="inline-block rounded-full border border-slate-300 bg-white px-4 py-1.5 text-sm font-medium text-slate-700 hover:border-brand-400 hover:text-brand-700"
            >
              Custom QR Code Generator
            </Link>
          </li>
          {others.map((p) => (
            <li key={p.slug}>
              <Link
                href={`/${p.slug}`}
                className="inline-block rounded-full border border-slate-300 bg-white px-4 py-1.5 text-sm font-medium text-slate-700 hover:border-brand-400 hover:text-brand-700"
              >
                {p.navLabel}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <footer className="mt-12 border-t border-slate-200 pt-6 text-center text-sm text-slate-400">
        &copy; {new Date().getFullYear()} {SITE_NAME} &middot; 100% free &middot; no sign-up &middot;
        generated locally in your browser
      </footer>
    </div>
  );
}
