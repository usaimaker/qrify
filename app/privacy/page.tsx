import Link from "next/link";
import { SITE_NAME } from "@/lib/constants";

export const metadata = {
  title: "Privacy Policy",
  description: `${SITE_NAME} privacy policy — what we collect, what we don't, and how ads work.`,
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold text-brand-600">Privacy Policy</h1>
      <p className="mt-4 text-slate-600">
        {SITE_NAME} is built so you don&rsquo;t have to trust us with your data.
      </p>

      <h2 className="mt-8 text-2xl font-bold text-slate-800">What we do NOT collect</h2>
      <ul className="mt-3 list-disc space-y-2 pl-6 text-slate-600">
        <li>
          The text, URLs or contact details you turn into a QR code are processed locally in your
          browser and are never uploaded to our servers.
        </li>
        <li>We do not require an account or sign-up.</li>
        <li>We do not store a database of the codes you create.</li>
      </ul>

      <h2 className="mt-8 text-2xl font-bold text-slate-800">What we do collect</h2>
      <ul className="mt-3 list-disc space-y-2 pl-6 text-slate-600">
        <li>
          Anonymous, aggregated usage analytics (page views) via Vercel Analytics, with no personal
          identifiers.
        </li>
        <li>Standard server logs (IP, user-agent) retained briefly for security.</li>
      </ul>

      <h2 className="mt-8 text-2xl font-bold text-slate-800">Advertising</h2>
      <p className="mt-3 text-slate-600">
        This site may show ads served by Google AdSense. Google may use cookies to serve ads based on
        your prior visits. You can opt out at any time through Google&rsquo;s Ads Settings or by
        managing cookies in your browser.
      </p>

      <h2 className="mt-8 text-2xl font-bold text-slate-800">Contact</h2>
      <p className="mt-3 text-slate-600">
        Questions about this policy? Email{" "}
        <a href="mailto:felovery@gmail.com" className="text-brand-700 hover:underline">
          felovery@gmail.com
        </a>
        .
      </p>
    </div>
  );
}
