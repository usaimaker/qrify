import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LandingPage from "@/components/LandingPage";
import { SEO_PAGES } from "@/lib/seo-pages";
import { SITE_URL } from "@/lib/constants";

type PageProps = { params: { slug: string } };

// Only the slugs returned below are valid routes; everything else is a hard 404
// instead of an on-demand SSR render, which avoids soft-404 crawl waste.
export const dynamicParams = false;

export function generateStaticParams() {
  return SEO_PAGES.map((page) => ({ slug: page.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const page = SEO_PAGES.find((item) => item.slug === params.slug);
  if (!page) return {};

  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: `${SITE_URL}/${page.slug}` },
    openGraph: {
      type: "article",
      url: `${SITE_URL}/${page.slug}`,
      title: page.title,
      description: page.description,
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
    },
  };
}

export default function Page({ params }: PageProps) {
  const page = SEO_PAGES.find((item) => item.slug === params.slug);
  if (!page) notFound();

  return (
    <LandingPage
      slug={page.slug}
      h1={page.h1}
      tagline={page.tagline}
      intro={page.intro}
      generatorInitialData={page.generatorInitialData}
      generatorLabel={page.generatorLabel}
      howToHeading={page.howToHeading}
      steps={page.steps}
      blocks={page.blocks}
      faqs={page.faqs}
      ctaHeading={page.ctaHeading}
    />
  );
}
