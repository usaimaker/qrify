import Link from "next/link";
import { SITE_NAME, SITE_DESCRIPTION } from "@/lib/constants";

export const metadata = {
  title: "About",
  description: `About ${SITE_NAME} — a free, privacy-first QR code generator that runs entirely in your browser.`,
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold text-brand-600">About {SITE_NAME}</h1>
      <p className="mt-4 text-slate-600">{SITE_DESCRIPTION}</p>

      <h2 className="mt-8 text-2xl font-bold text-slate-800">Why we built it</h2>
      <p className="mt-3 text-slate-600">
        Most QR generators upload your content to a server and keep it there. {SITE_NAME} does the
        opposite: every code is generated entirely in your browser. Nothing is stored, nothing is
        tracked beyond anonymous usage stats.
      </p>

      <h2 className="mt-8 text-2xl font-bold text-slate-800">Privacy by design</h2>
      <p className="mt-3 text-slate-600">
        No sign-up, no account, no database of the links you create. Close the tab and the data is
        gone. Read the full details on our{" "}
        <Link href="/privacy" className="text-brand-700 hover:underline">
          Privacy Policy
        </Link>{" "}
        page.
      </p>

      <h2 className="mt-8 text-2xl font-bold text-slate-800">Free, forever</h2>
      <p className="mt-3 text-slate-600">
        {SITE_NAME} is supported by non-intrusive advertising and will always stay free to use with
        no watermarks and no limits. Questions? Reach us on the{" "}
        <Link href="/contact" className="text-brand-700 hover:underline">
          Contact
        </Link>{" "}
        page.
      </p>
    </div>
  );
}
