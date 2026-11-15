import type { Metadata, Viewport } from "next";
import Link from "next/link";
import {
  ADSENSE_PUBLISHER_ID,
  GSC_VERIFICATION,
  SITE_URL,
  SITE_TITLE,
  SITE_DESCRIPTION,
  SITE_KEYWORDS,
  SITE_NAME,
} from "@/lib/constants";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: SITE_KEYWORDS,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: SITE_NAME }],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#4f46e5",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/icon.svg" />
        <meta name="google-adsense-account" content={ADSENSE_PUBLISHER_ID} />
        {GSC_VERIFICATION && (
          <meta name="google-site-verification" content={GSC_VERIFICATION} />
        )}
        <script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_PUBLISHER_ID}`}
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-screen bg-slate-50 text-slate-900 antialiased">
        {children}
        <footer className="mt-12 border-t border-slate-200 bg-white">
          <div className="mx-auto max-w-5xl px-4 py-6 text-center text-sm text-slate-500">
            &copy; {new Date().getFullYear()} {SITE_NAME} &middot; 100% free &middot; no sign-up
            <span className="mx-2">&middot;</span>
            <Link href="/about" className="hover:text-brand-700">
              About
            </Link>
            <span className="mx-2">&middot;</span>
            <Link href="/privacy" className="hover:text-brand-700">
              Privacy
            </Link>
            <span className="mx-2">&middot;</span>
            <Link href="/contact" className="hover:text-brand-700">
              Contact
            </Link>
            {/* QRIFY_MONETIZE_START — idempotent, verified real payout channels */}
            <div className="mx-auto mt-5 max-w-3xl rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 text-left text-sm leading-relaxed text-slate-600">
              <p className="mb-1 font-semibold text-slate-800">Keep QRify free</p>
              <p className="mb-3">
                QRify is a free QR code generator with no sign-up. Ads help keep it online;
                you can also support hosting directly or pick a tested printer for your codes.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-2">
                <a href="https://ko-fi.com/aidaily" target="_blank" rel="noopener noreferrer" className="rounded-lg bg-indigo-600 px-3 py-2 font-medium text-white hover:bg-indigo-700">
                  Support on Ko-fi
                </a>
                <a href="https://www.buymeacoffee.com/felovery" target="_blank" rel="noopener noreferrer" className="rounded-lg border border-slate-300 bg-white px-3 py-2 font-medium text-slate-700 hover:bg-slate-100">
                  Buy me a coffee
                </a>
                <a href="https://www.amazon.com/s?k=qr+code+label+printer&tag=felovery-20" target="_blank" rel="sponsored noopener noreferrer" className="rounded-lg border border-slate-300 bg-white px-3 py-2 font-medium text-slate-700 hover:bg-slate-100">
                  QR label printers on Amazon
                </a>
              </div>
              <p className="mt-3 text-xs text-slate-400">
                As an Amazon Associate I earn from qualifying purchases. Affiliate links do not
                change the price you pay. QRify never sells your data.
              </p>
            </div>
            {/* QRIFY_MONETIZE_END */}
          </div>
        </footer>
        <Analytics />
        <Script id="qrify-track" strategy="afterInteractive">
          {`(function(){try{var i=new Image();i.src='/api/track?p='+encodeURIComponent(location.pathname)+'&r='+encodeURIComponent(document.referrer||'');}catch(e){}})();`}
        </Script>
      </body>
    </html>
  );
}
