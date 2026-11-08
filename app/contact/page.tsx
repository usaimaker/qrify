import Link from "next/link";
import { SITE_NAME } from "@/lib/constants";

export const metadata = {
  title: "Contact",
  description: `Get in touch with the ${SITE_NAME} team — support, partnerships and takedown requests.`,
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold text-brand-600">Contact {SITE_NAME}</h1>
      <p className="mt-4 text-slate-600">
        We read every message. For support, partnership or takedown requests, email us and we&rsquo;ll
        reply within a few business days.
      </p>
      <div className="mt-6 rounded-xl border border-slate-200 bg-white p-6">
        <p className="text-sm text-slate-500">Email</p>
        <a
          href="mailto:felovery@gmail.com"
          className="text-lg font-semibold text-brand-700 hover:underline"
        >
          felovery@gmail.com
        </a>
      </div>
      <p className="mt-6 text-slate-600">
        {SITE_NAME} is a free, browser-local tool &mdash; your QR data never leaves your device, so
        there is no account or upload to manage. Most questions are answered on our{" "}
        <Link href="/about" className="text-brand-700 hover:underline">
          About
        </Link>{" "}
        and{" "}
        <Link href="/privacy" className="text-brand-700 hover:underline">
          Privacy
        </Link>{" "}
        pages.
      </p>
    </div>
  );
}
