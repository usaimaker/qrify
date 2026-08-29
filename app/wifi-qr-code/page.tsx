import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";
import { SITE_URL } from "@/lib/constants";

const SLUG = "wifi-qr-code";
const TITLE = "WiFi QR Code Generator";
const DESCRIPTION =
  "Create a WiFi QR code so guests join your network by scanning instead of typing the password. Free, browser-based, exports PNG or SVG.";

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
      h1="WiFi QR Code Generator"
      tagline="Let guests join your network by pointing a camera at a sticker, instead of spelling out a 20-character password."
      intro={[
        "A WiFi QR code does not contain a link. It contains a short, standardised line of plain text that describes a network: its name, its security type and its password. Modern phones recognise that pattern and offer to join the network directly from the camera app, which is why cafes, guest houses, dental waiting rooms, co-working desks and Airbnb hosts print them and stop answering the same question forty times a week.",
        "Because the payload is just text, you build it yourself and paste it in. The template is already loaded in the box below, so you only need to replace the network name after S: and the password after P:. Everything is assembled and rendered on your own machine, meaning your WiFi password is never transmitted to us or to anyone else.",
        "Style it to match the room, then export SVG and print it at whatever size you need. A table tent, a small card by the till, or a sign inside a cupboard door all work; the code does not expire and does not depend on any service staying online, because the credentials are encoded directly inside it.",
      ]}
      generatorInitialData="WIFI:T:WPA;S:MyNetwork;P:MyPassword;;"
      generatorLabel="WiFi payload (replace S: name and P: password)"
      howToHeading="How to create a WiFi QR code"
      steps={[
        "In the box above, replace MyNetwork with your exact network name (SSID). It is case sensitive, so copy it from your router or phone rather than typing from memory.",
        "Replace MyPassword with the network password, keeping the semicolons and the two trailing semicolons at the end of the line.",
        "If the network is open with no password, change the payload to WIFI:T:nopass;S:MyNetwork;; and delete the P: section entirely.",
        "Restyle it if you like, then scan the preview with your own phone to confirm it offers to join the right network.",
        "Download the SVG for printing, or the PNG if you are dropping it into a slide, a booking confirmation email or a digital sign.",
      ]}
      blocks={[
        {
          heading: "The WIFI payload format, field by field",
          paragraphs: [
            "The syntax comes from a widely adopted convention that both iOS and Android implement. It is a single line, fields are separated by semicolons, and the line closes with two semicolons.",
            "T is the authentication type and accepts WPA (use this for WPA, WPA2 and WPA3), WEP for genuinely ancient hardware, or nopass for an open network. S is the SSID, the network name exactly as it is broadcast. P is the password, which you omit for open networks. H:true can be appended to mark a hidden network, which tells the phone to probe for an SSID that is not being advertised.",
            "If your SSID or password contains a semicolon, comma, colon, double quote or backslash, escape that character with a backslash. A password of pa;ss becomes P:pa\\;ss. Forgetting this is the single most common reason a WiFi code silently joins nothing.",
          ],
          code: [
            "WIFI:T:WPA;S:MyNetwork;P:MyPassword;;",
            "",
            "T  auth type   WPA | WEP | nopass",
            "S  SSID        exact network name, case sensitive",
            "P  password    omit entirely when T:nopass",
            "H  hidden      optional, add H:true; for hidden networks",
            "",
            "Open network:   WIFI:T:nopass;S:CafeGuest;;",
            "Hidden network: WIFI:T:WPA;S:BackOffice;P:s3cret;H:true;;",
            "Escaped chars:  WIFI:T:WPA;S:Bar\\;Grill;P:pa\\;ss;;",
          ].join("\n"),
        },
        {
          heading: "Where it works, and one security note",
          paragraphs: [
            "On iPhone, the native camera app has offered to join WiFi from a QR code since iOS 11. On Android it has been built into the camera or Google Lens since Android 10, and many manufacturer camera apps supported it earlier. Older devices may need a dedicated QR reader app, but at this point that is a small minority of phones in circulation.",
            "The security note matters: a printed WiFi QR code is exactly as secret as the wall it is taped to. Anyone who can see it, or photograph it from across the room, has your password. That is fine for a deliberately shared guest network and a bad idea for the network your point-of-sale terminal, NAS or office machines sit on.",
            "The clean pattern is to enable the guest network on your router, give it its own password, and generate the code for that. Guests get one-scan access, your internal devices stay on a separate segment, and you can rotate the guest password and reprint a sticker without touching anything else.",
          ],
        },
      ]}
      faqs={[
        {
          q: "Does a WiFi QR code work on both iPhone and Android?",
          a: "Yes. iOS has handled it in the native camera app since iOS 11, and Android since version 10 through the camera or Google Lens. Very old handsets may need a separate QR reader app.",
        },
        {
          q: "My WiFi password contains a semicolon or comma. What do I do?",
          a: "Escape it with a backslash inside the payload. A password of pa;ss is written as P:pa\\;ss. The same applies to commas, colons, double quotes and backslashes in either the SSID or the password.",
        },
        {
          q: "Can I make a QR code for a hidden network?",
          a: "Yes, append H:true before the closing semicolons, for example WIFI:T:WPA;S:BackOffice;P:s3cret;H:true;;. This tells the phone to actively probe for an SSID that is not being broadcast.",
        },
        {
          q: "Is my WiFi password sent anywhere?",
          a: "No. The QR code is rendered entirely in your browser with JavaScript, so the payload never leaves your device. Nothing is uploaded, stored or logged.",
        },
        {
          q: "What if the network has no password?",
          a: "Use WIFI:T:nopass;S:YourNetwork;; and drop the P: field completely. Leaving an empty P: in place can make some phones fail the join.",
        },
      ]}
      ctaHeading="Print a WiFi QR code your guests can actually use"
    />
  );
}
