import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";
import { SITE_URL } from "@/lib/constants";

const SLUG = "svg-qr-code";
const TITLE = "SVG QR Code Generator";
const DESCRIPTION =
  "Download your QR code as a true vector SVG: infinitely scalable, print-ready and editable in Figma, Illustrator or straight in code. Free, no sign-up.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/${SLUG}` },
  openGraph: {
    type: "article",
    url: `${SITE_URL}/${SLUG}`,
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function Page() {
  return (
    <LandingPage
      slug={SLUG}
      h1="SVG QR Code Generator"
      tagline="Export a real vector QR code that stays razor sharp at any size, from a business card to a building wrap."
      intro={[
        "Most free QR generators hand you a PNG at a fixed pixel size. That is fine for a slide and useless for print: enlarge it and the edges turn to soft grey mush, which is exactly the condition that makes scanners give up. An SVG has no pixels at all. It stores the code as mathematical paths, so the renderer redraws crisp edges at whatever size you ask for, whether that is 2cm on a label or 4 metres on a trade show banner.",
        "There is a second reason developers and designers ask for SVG specifically: it is editable text. You can open the file in Figma, Illustrator or Inkscape and recolour it, or open it in a code editor and change a fill attribute by hand. You can paste it inline into HTML so it costs zero extra network requests, and you can drop it into a CSS background as a data URI.",
        "The generator below already renders in SVG internally, so the download is a genuine vector file rather than a bitmap in a wrapper. Style the code however you like, then use the Download SVG button. It is free, unlimited, unwatermarked, and generated entirely on your own device.",
      ]}
      howToHeading="How to generate and download an SVG QR code"
      steps={[
        "Enter the URL or text you want the code to carry in the box above.",
        "Choose a dot style and corner style, then set the foreground and background colors. Enable the gradient foreground if you want a two-colour blend.",
        "Optionally upload a center logo. Be aware that a raster logo is embedded into the SVG as base64, so it stays a bitmap even though the code around it is vector. Upload an SVG logo if you need the whole file to remain fully scalable.",
        "Adjust the margin so the quiet zone survives whatever you place the code next to.",
        "Click Download SVG. Open it in Figma, Illustrator or Inkscape to place it in a layout, or drop it straight into your codebase.",
      ]}
      blocks={[
        {
          heading: "SVG or PNG: which one do you actually need?",
          paragraphs: [
            "Choose SVG when the code is going to print, when a designer will place it in a layout, when it needs to appear at more than one size, or when it is going into a web page or app you control. It scales perfectly, the file is typically a few kilobytes, and it stays editable.",
            "Choose PNG when the destination will not accept vector files. Slide decks, Word documents, most email clients, social media uploads, marketplace listings and messaging apps all want a bitmap. QRify exports a high-resolution PNG for exactly these cases.",
            "The failure mode worth avoiding is sending a PNG to a printer. Print work is measured in physical size and resolution, and a 320-pixel PNG blown up to a poster is a blurry code that half the phones in the room will refuse to read. If a print shop asks for vector artwork, give them the SVG.",
          ],
        },
        {
          heading: "Using the SVG in code and in design tools",
          paragraphs: [
            "In a web project the simplest option is to paste the SVG markup inline. It renders without an extra HTTP request, it inherits nothing you do not want, and you can target its paths with CSS or change the fill at runtime. You can also reference it with a normal img tag or embed it in CSS as a data URI, which is handy for a small code in a footer or an email template.",
            "In Figma, use File then Import, or simply drag the .svg onto the canvas; the code arrives as a group of vector shapes you can recolour with the standard fill picker. Illustrator and Inkscape both open it directly. In all three, resize by dragging a corner rather than stretching one side, because a distorted QR code stops being square and stops scanning.",
            "Two things to preserve when you edit. Keep the quiet zone, the empty margin around the grid, free of text, borders and background artwork. And keep the polarity: a dark code on a light background. Inverting it, which is a tempting design choice on a dark layout, breaks decoding on a meaningful share of scanner apps.",
          ],
          code: [
            "Inline in HTML (no extra request, fully styleable)",
            '  <svg viewBox="0 0 320 320"> ... </svg>',
            "",
            "As an image",
            '  <img src="/qrify-qrcode.svg" alt="Scan to visit" width="240" />',
            "",
            "As a CSS background via data URI",
            "  background-image: url(\"data:image/svg+xml;utf8,<svg ...></svg>\");",
            "",
            "Recolour after export: change the fill attribute on the path elements",
          ].join("\n"),
        },
      ]}
      faqs={[
        {
          q: "Is the downloaded file a real vector, or a PNG wrapped in an SVG?",
          a: "A real vector. The code is drawn as path and shape elements, so it scales without any loss. The one exception is a raster logo you upload yourself, which is embedded as a base64 bitmap inside the file. Upload an SVG logo if you need the whole file to stay vector.",
        },
        {
          q: "Can I recolour the SVG after downloading it?",
          a: "Yes. Open it in Figma, Illustrator or Inkscape and use the fill picker, or edit the fill attributes directly in a text editor. Keep a dark code on a light background so it still scans.",
        },
        {
          q: "What size should I print an SVG QR code at?",
          a: "Any size, since it is vector. As a rule of thumb allow about one centimetre of printed code for every ten centimetres of expected scanning distance, and never stretch it out of square.",
        },
        {
          q: "Do I need to credit QRify or buy a licence?",
          a: "No. The codes are free to use commercially, with no watermark and no attribution required.",
        },
      ]}
      ctaHeading="Export a print-ready vector QR code"
    />
  );
}
