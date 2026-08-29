import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";
import { SITE_URL } from "@/lib/constants";

const SLUG = "vcard-qr-code";
const TITLE = "vCard QR Code Generator";
const DESCRIPTION =
  "Turn your contact details into a QR code that saves straight into a phone contact list. Free digital business card, no app and no subscription.";

const VCARD_TEMPLATE = [
  "BEGIN:VCARD",
  "VERSION:3.0",
  "N:Doe;Jane;;;",
  "FN:Jane Doe",
  "ORG:Acme Studio",
  "TITLE:Founder",
  "TEL;TYPE=CELL:+15551234567",
  "EMAIL:jane@example.com",
  "URL:https://example.com",
  "END:VCARD",
].join("\n");

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
      h1="vCard QR Code Generator"
      tagline="Encode your contact card directly into a QR code, so a scan drops your details into someone's phone with one tap."
      intro={[
        "vCard is the file format behind every .vcf attachment your phone has ever offered to import. It is plain text with one field per line, and it is understood natively by iOS, Android, Outlook, Gmail and essentially every address book written in the last two decades. Encode that text into a QR code and you have a business card that works offline, needs no app on either side, and costs nothing to run.",
        "This matters more than it sounds. Most paid digital business card products encode a link to a hosted profile page. That is convenient until the subscription lapses or the vendor shuts the service down, at which point every card you printed becomes a dead link. A vCard QR code carries the actual data, so it keeps working in ten years with no account attached to it.",
        "A working template is already loaded below. Edit the fields to your own details, keep the BEGIN and END lines, and the preview updates as you type. As always the rendering is local, so nothing about your contact details is transmitted to us.",
      ]}
      generatorInitialData={VCARD_TEMPLATE}
      generatorLabel="vCard payload (edit the fields, keep BEGIN and END)"
      howToHeading="How to create a vCard QR code"
      steps={[
        "In the box above, replace the sample values with your own. N is the structured name in the order Last;First;Middle;Prefix;Suffix, and FN is the display name shown in the contact list.",
        "Update ORG, TITLE, TEL, EMAIL and URL. Write phone numbers in full international form starting with a plus sign, so the number dials correctly from any country.",
        "Delete any line you do not need. Every character makes the grid denser, and a lean card scans far more reliably than an exhaustive one.",
        "Style the code and optionally add your company mark, then scan the preview with your own phone to check the contact sheet looks right before you commit.",
        "Download the SVG and send it to your print shop, or the PNG for an email signature, a slide or a video call background.",
      ]}
      blocks={[
        {
          heading: "The vCard format, and which fields are worth including",
          paragraphs: [
            "Use VERSION:3.0 unless you have a specific reason not to. Version 4.0 is newer and technically cleaner, but 3.0 has the widest support across older Android address books and desktop mail clients, and the difference is invisible to the person scanning.",
            "The fields that earn their space are FN, N, TEL, EMAIL, ORG, TITLE and URL. The ones that usually do not are long postal addresses, a second fax number, a photo (never embed a photo, it will not fit) and free-text notes. A postal address alone can easily add a hundred characters and push the code up several size versions.",
            "TYPE parameters let you label a value, for example TEL;TYPE=CELL or TEL;TYPE=WORK,VOICE, and phones will show them as separate labelled rows. If you include an address, ADR takes seven semicolon-separated components and most of them are usually left empty.",
          ],
          code: [
            "BEGIN:VCARD",
            "VERSION:3.0",
            "N:Doe;Jane;;;              Last;First;Middle;Prefix;Suffix",
            "FN:Jane Doe                display name (required in practice)",
            "ORG:Acme Studio",
            "TITLE:Founder",
            "TEL;TYPE=CELL:+15551234567 full international format",
            "TEL;TYPE=WORK:+15559876543",
            "EMAIL:jane@example.com",
            "URL:https://example.com",
            "ADR;TYPE=WORK:;;1 Market St;San Francisco;CA;94105;USA",
            "END:VCARD",
          ].join("\n"),
        },
        {
          heading: "Why a vCard code looks dense, and how to print it",
          paragraphs: [
            "A QR code grows in discrete steps. As the character count rises it jumps to the next version, adding rows and columns of smaller modules. A short URL might fit in a 25 by 25 grid; a full contact card easily needs 45 by 45 or more. That is normal, not a fault, but it changes how you have to print it.",
            "Denser codes need physical size and contrast. A rough working rule is one centimetre of printed code for every ten centimetres of scanning distance, so a card someone holds at 25cm wants at least 2.5cm of code, and a poster read from three metres wants 30cm. Keep a dark foreground on a light background, and do not shrink a dense vCard code into a corner of a business card and hope.",
            "If you have trimmed the fields and it is still too dense for the space you have, the pragmatic fallback is to encode a short URL to a page that serves the .vcf file. You trade permanence for density. For most people, cutting the postal address and the second phone number is enough to avoid that trade.",
          ],
        },
      ]}
      faqs={[
        {
          q: "Does the person scanning need an app?",
          a: "No. The native camera on modern iPhones and Android phones recognises vCard text and offers to create a contact directly. There is nothing to install on either side.",
        },
        {
          q: "Should I encode a vCard or a link to my website?",
          a: "A vCard works offline and never breaks, but it cannot be edited after printing and produces a denser code. A link stays editable and scans easily, but dies if the page or service disappears. For printed cards that need to last, vCard is usually the better trade.",
        },
        {
          q: "Why is my vCard QR code so dense and hard to scan?",
          a: "Too many characters. Remove the postal address, extra phone numbers and any notes, keep phone numbers in compact international format, and print the code larger with strong contrast.",
        },
        {
          q: "Should I use vCard 3.0 or 4.0?",
          a: "Stick with 3.0. It has the broadest compatibility across older Android address books and desktop mail clients, and the person scanning sees no difference.",
        },
        {
          q: "Can I include a photo in the vCard?",
          a: "In practice no. An embedded image balloons the payload far beyond what a scannable QR code can carry. Add your logo to the code itself instead, using the center logo option.",
        },
      ]}
      ctaHeading="Build a digital business card that never expires"
    />
  );
}
