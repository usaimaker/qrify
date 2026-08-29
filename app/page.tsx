import Link from "next/link";
import QrGenerator from "@/components/QrGenerator";
import ContentSections from "@/components/ContentSections";
import ShareButtons from "@/components/ShareButtons";
import { FAQ_ITEMS } from "@/lib/faq";
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION, LANDING_PAGES } from "@/lib/constants";

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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppJsonLd) }}
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
