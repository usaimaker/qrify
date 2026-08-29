import { FAQ_ITEMS } from "@/lib/faq";
import { SITE_NAME } from "@/lib/constants";

export default function ContentSections() {
  return (
    <section className="mt-12 space-y-10">
      <article className="space-y-4 text-slate-700">
        <h2 className="text-2xl font-bold text-slate-800">What is a custom QR code?</h2>
        <p>
          A custom (or stylized) QR code keeps the machine-readable data grid of a normal QR code but
          restyles everything a scanner does not strictly need: the dot shape, the corner markers,
          the foreground and background colors, and the small area in the middle where a logo can
          sit. Plain black-and-white codes work, but they look like an afterthought on a poster, a
          menu or a product box. {SITE_NAME} lets you generate a code that matches your brand in a
          few seconds, straight in the browser, with no design software involved.
        </p>

        <h2 className="text-2xl font-bold text-slate-800">Why use {SITE_NAME}?</h2>
        <ul className="list-disc space-y-1 pl-6">
          <li>
            <strong>Genuinely free</strong>: unlimited codes, no watermark, no account, no trial that
            expires and locks your artwork.
          </li>
          <li>
            <strong>Private by design</strong>: rendering happens in your browser, so your URLs and
            logo files never get uploaded anywhere.
          </li>
          <li>
            <strong>Vector output</strong>: download SVG for print and design tools, or high-res PNG
            for the web and slide decks.
          </li>
          <li>
            <strong>Static, not tracked</strong>: the code encodes your destination directly, so it
            keeps working forever and does not depend on a redirect service staying online.
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-slate-800">Features</h2>
        <ul className="list-disc space-y-1 pl-6">
          <li>7 dot styles: square, dots, rounded, extra-rounded, classy, classy-rounded, terminal</li>
          <li>Linear and radial gradient foregrounds</li>
          <li>Center logo upload, with error correction raised to level H automatically</li>
          <li>Independent foreground and background colors, including transparent backgrounds</li>
          <li>Separate styling for the corner squares and corner dots</li>
          <li>Adjustable quiet-zone margin</li>
        </ul>

        <h2 className="text-2xl font-bold text-slate-800">Design rules that keep it scannable</h2>
        <p>
          Three things decide whether a pretty QR code actually works in the real world. First,
          <strong> contrast</strong>: keep a dark foreground on a light background, never the other way
          around, because most scanners expect that polarity. Second, <strong>logo size</strong>: stay
          under roughly 25% of the code width so the error correction has room to recover the hidden
          modules. Third, <strong>the quiet zone</strong>: leave the empty margin around the code
          intact, and never place text or a border inside it. Then print at a sensible size, roughly
          1cm of code for every 10cm of expected scanning distance, and test with a real phone before
          you send anything to a printer.
        </p>
      </article>

      <div>
        <h2 className="text-2xl font-bold text-slate-800">Frequently asked questions</h2>
        <div className="mt-4 space-y-3">
          {FAQ_ITEMS.map((item, i) => (
            <details key={i} className="rounded-lg border border-slate-200 bg-white p-4">
              <summary className="cursor-pointer font-medium text-slate-800">{item.q}</summary>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.a}</p>
            </details>
          ))}
        </div>
      </div>

      <div className="rounded-2xl bg-brand-50 p-6 text-center">
        <h3 className="text-xl font-bold text-brand-700">Generate your custom QR code now</h3>
        <p className="mt-2 text-slate-600">Free, no sign-up, ready in seconds.</p>
        <a
          href="#top"
          className="mt-4 inline-block rounded-lg bg-brand-600 px-6 py-2.5 font-medium text-white hover:bg-brand-700"
        >
          &uarr; Back to the generator
        </a>
      </div>
    </section>
  );
}
