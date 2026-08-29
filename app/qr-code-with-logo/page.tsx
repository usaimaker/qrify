import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";
import { SITE_URL } from "@/lib/constants";

const SLUG = "qr-code-with-logo";
const TITLE = "Free QR Code Generator with Logo";
const DESCRIPTION =
  "Put your logo in the middle of a QR code and keep it scannable. Free, no watermark, no sign-up. Download high-res PNG or vector SVG.";

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
      h1="QR Code Generator with Logo"
      tagline="Drop your brand mark into the center of a QR code, keep it fully scannable, and export it without a watermark."
      intro={[
        "A logo QR code is an ordinary QR code with a small image placed over the middle of the grid. It exists for one reason: a bare black-and-white square looks anonymous, and people hesitate before scanning something anonymous. Putting a recognisable mark in the middle tells the person holding the phone who they are about to trust, which is why restaurant menus, packaging inserts, conference badges and print ads almost always use one.",
        "The reason this works at all is error correction. Every QR code stores redundant copies of its data, and the spec defines four levels of redundancy: L recovers about 7% of lost modules, M about 15%, Q about 25% and H about 30%. When you upload a logo here, QRify silently switches the code to level H and reserves a clean area behind the image, so the modules hidden by your logo are reconstructed from the redundancy instead of breaking the scan.",
        "Everything runs in your browser. Your logo file is read locally with the FileReader API and drawn straight into the canvas, so it is never uploaded to a server. When you are happy with the result you can export a high-resolution PNG for print or a vector SVG for design work, both free of charge and free of licensing conditions.",
      ]}
      howToHeading="How to add a logo to a QR code"
      steps={[
        "Type or paste the destination in the URL or text box, for example your product page or booking link.",
        "Scroll to Center logo (optional) and upload your mark. A square PNG with a transparent background, or an SVG, gives the cleanest result.",
        "Set the foreground color to your brand color and, if you want more depth, enable the gradient foreground and pick a second color.",
        "Keep the logo visually under about a quarter of the code width, and leave the margin setting at 8 or higher so the quiet zone stays intact.",
        "Scan the preview with your own phone camera before exporting, then download PNG for slides and print, or SVG if a designer or print shop needs vector artwork.",
      ]}
      blocks={[
        {
          heading: "How much of a QR code can a logo cover?",
          paragraphs: [
            "The honest answer is less than most people assume. Level H tolerates roughly 30% of the modules being unreadable, but that budget is shared with everything else that can go wrong: glare on a glossy menu, a crease in a flyer, a low-light restaurant, an old phone camera. If you spend the entire budget on a huge logo there is nothing left for the real world.",
            "A practical rule is to keep the logo at or under 25% of the code width, which is exactly what QRify defaults to. Also avoid covering the three large corner squares. Those are the finder patterns a scanner uses to locate and orient the code before it decodes anything, and they are not protected by error correction.",
            "One more thing that costs you nothing: the more data you encode, the denser the grid becomes, and the denser the grid, the more modules a fixed-size logo will hide. Shortening a long tracking URL before you generate is often the single easiest way to make a logo code scan reliably.",
          ],
        },
        {
          heading: "Choosing a logo file that actually works",
          paragraphs: [
            "Solid, chunky shapes survive; thin hairlines and small lettering do not, because at the size a logo occupies inside a QR code they turn to mush on paper. If your full lockup includes a wordmark, use just the icon or monogram instead.",
            "Aim for a square or near-square crop so the image is not letterboxed inside the reserved area. A transparent PNG or an SVG lets the code background show through, which usually looks better than a hard white box, although a white box is a perfectly safe fallback on a busy background.",
            "Finally, mind the contrast between the logo and the dots around it. A dark navy logo sitting on dark navy dots reads as a smudge, not as branding. If your brand color is dark, keep the dots dark and give the logo a light plate; if your brand color is light, invert that.",
          ],
        },
      ]}
      faqs={[
        {
          q: "Will adding a logo stop the QR code from scanning?",
          a: "Not if you keep it modest. QRify raises the error correction level to H as soon as you upload an image, which recovers around 30% of obscured modules, and reserves a clean area behind the logo. Keep it under about 25% of the width, avoid the three corner squares, and test-scan the preview before you export.",
        },
        {
          q: "What image format should I use for the logo?",
          a: "SVG or a transparent PNG, cropped roughly square. Avoid thin strokes and small text, because they disappear at the size the logo occupies. Use the icon or monogram rather than a full horizontal lockup.",
        },
        {
          q: "Is my logo uploaded to a server?",
          a: "No. The file is read locally in your browser and drawn into the code on your own device. Nothing is transmitted, stored or logged, which also means you can use it with unreleased branding.",
        },
        {
          q: "Can I use a logo QR code on commercial packaging?",
          a: "Yes. There is no watermark, no attribution requirement and no licence to buy. Export the SVG and hand it to your printer.",
        },
      ]}
      ctaHeading="Generate a branded QR code with your logo"
    />
  );
}
