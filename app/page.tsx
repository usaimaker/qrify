import Link from "next/link";
import QrGenerator from "@/components/QrGenerator";
import ContentSections from "@/components/ContentSections";
import ShareButtons from "@/components/ShareButtons";
import { FAQ_ITEMS } from "@/lib/faq";
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION, LANDING_PAGES } from "@/lib/constants";

// JSON-LD is injected inside an inline <script>. Escape angle brackets so content
// can never terminate the element, even if copy is edited later.
function safeJsonLd(data: unknown): string {
  return JSON.stringify(data)
    .replace(/</g, "\\u003c")
    .replace(/>/g, "\\u003e")
    .replace(/&/g, "\\u0026");
}

export default function Home() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  const webAppJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    applicationCategory: "UtilityApplication",
    operatingSystem: "Any",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    browserRequirements: "Requires JavaScript. Works in any modern browser.",
  };

  return (
    <div id="top" className="mx-auto max-w-5xl px-4 py-8">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-brand-600 sm:text-5xl">{SITE_NAME}</h1>
        <p className="mt-3 text-lg text-slate-600">
          Free custom QR code generator &middot; your logo, colors and gradients &middot; export PNG
          or vector SVG
        </p>
      </header>

      <QrGenerator />
      <ShareButtons />

      <nav className="mt-8 flex flex-wrap justify-center gap-2" aria-label="QR code guides">
        {LANDING_PAGES.map((page) => (
          <Link
            key={page.slug}
            href={`/${page.slug}`}
            className="rounded-full border border-slate-300 bg-white px-4 py-1.5 text-sm font-medium text-slate-700 hover:border-brand-400 hover:text-brand-700"
          >
            {page.navLabel}
          </Link>
        ))}
      </nav>

      <ContentSections />

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-slate-800">Free QR code tools for every use case</h2>
        <p className="mt-2 text-slate-600">
          Each guide below solves one specific job, with the exact link format, print settings and
          pitfalls you need to get right the first time.
        </p>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {LANDING_PAGES.map((page) => (
            <Link
              key={page.slug}
              href={`/${page.slug}`}
              className="rounded-xl border border-slate-200 bg-white p-4 transition hover:border-brand-400 hover:shadow-sm"
            >
              <span className="block font-semibold text-brand-700">{page.navLabel}</span>
              <span className="mt-1 block text-sm leading-relaxed text-slate-600">{page.blurb}</span>
            </Link>
          ))}
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(webAppJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(faqJsonLd) }}
      />
    </div>
  );
}
