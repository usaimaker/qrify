export interface FaqItem {
  q: string;
  a: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    q: "Is QRify really free? Are there any limits?",
    a: "Yes, completely free. There is no generation limit, no watermark, no account and no email required. Open the page and start downloading.",
  },
  {
    q: "Do my QR codes or uploaded logos get sent to a server?",
    a: "No. Every QR code is rendered locally in your browser using JavaScript. The text you type and the logo you upload never leave your device, so nothing is stored or logged on our side.",
  },
  {
    q: "Can I use the QR codes commercially?",
    a: "Yes. The QR codes you generate are yours to use anywhere, with no attribution required: packaging, posters, business cards, menus, event signage, product labels and paid campaigns.",
  },
  {
    q: "Which file formats can I export?",
    a: "High-resolution PNG for anything screen or print based, and true vector SVG for design tools and large-format printing. Both support a transparent or custom background color.",
  },
  {
    q: "Can I put my own logo in the middle of the QR code?",
    a: "Yes. When you upload a logo, QRify automatically raises the error correction level to H, which tolerates roughly 30% of the code being obscured, so the center stays readable.",
  },
  {
    q: "Why will my QR code not scan?",
    a: "Almost always contrast or logo size. Use a dark foreground on a light background, keep the logo under about 25% of the code width, keep the quiet zone margin, and if you use a gradient make sure both ends stay dark enough.",
  },
];
