export const ADSENSE_PUBLISHER_ID = "ca-pub-9959815194191047";

// Google Search Console 所有权验证 token（HTML 元标记法）。
// 为空时不渲染。已硬编码当前 qrify.dynv6.net 的 SC 验证 token 作为兜底，
// 确保静态预渲染的 HTML 必然包含该 meta 标签（环境变量方式在静态页构建期取不到）。
export const GSC_VERIFICATION =
  process.env.NEXT_PUBLIC_GSC_VERIFICATION ||
  process.env.GSC_VERIFICATION ||
  "J-PQr8rpxOgFD6GMG2R7IDbI0jyJZlOLGXQkCeSfEXc";

export const SITE_URL = "https://qrify.dynv6.net";
export const SITE_NAME = "QRify";
export const SITE_TITLE = "Free QR Code Generator with Logo, Color & SVG - QRify";
export const SITE_DESCRIPTION =
  "Create custom QR codes with your own logo, colors, gradients and rounded dots. Free, no sign-up, generated in your browser. Download high-res PNG or vector SVG.";
export const SITE_KEYWORDS = [
  "qr code generator",
  "free qr code generator",
  "custom qr code",
  "qr code with logo",
  "svg qr code",
  "gradient qr code",
  "wifi qr code generator",
  "vcard qr code",
  "qr code maker",
  "qr code for pdf",
  "restaurant menu qr code",
  "google maps qr code",
  "whatsapp qr code",
  "instagram qr code",
  "email qr code",
  "phone number qr code",
  "youtube video qr code",
  "business card qr code",
  "transparent qr code",
  "QRify",
];

export interface LandingPageMeta {
  slug: string;
  navLabel: string;
  blurb: string;
}

// 长尾 SEO 着陆页清单：sitemap、站内互链与首页工具网格都从这里读取，新增页面只需改这一处。
// 前 4 项对应 app/<slug>/page.tsx 静态页；其余由 app/[slug]/page.tsx 动态生成。
export const LANDING_PAGES: LandingPageMeta[] = [
  { slug: "qr-code-with-logo", navLabel: "QR Code with Logo", blurb: "Put your brand mark in the centre without breaking the scan." },
  { slug: "wifi-qr-code", navLabel: "WiFi QR Code", blurb: "Let guests join your network with one scan instead of a long password." },
  { slug: "vcard-qr-code", navLabel: "vCard QR Code", blurb: "Share a full contact card that saves straight into a phone." },
  { slug: "svg-qr-code", navLabel: "SVG QR Code", blurb: "Vector output that stays razor sharp at any print size." },
  { slug: "qr-code-for-pdf", navLabel: "QR Code for PDF", blurb: "Link a document, manual or brochure from any printed surface." },
  { slug: "restaurant-menu-qr-code", navLabel: "Restaurant Menu QR Code", blurb: "Table codes you never reprint when the menu changes." },
  { slug: "google-maps-qr-code", navLabel: "Google Maps QR Code", blurb: "Open your exact location and start directions instantly." },
  { slug: "whatsapp-qr-code", navLabel: "WhatsApp QR Code", blurb: "Open a chat, optionally with a pre-filled message." },
  { slug: "instagram-qr-code", navLabel: "Instagram QR Code", blurb: "Turn packaging, posters and receipts into followers." },
  { slug: "email-qr-code", navLabel: "Email QR Code", blurb: "Open the mail app with address, subject and body filled in." },
  { slug: "phone-number-qr-code", navLabel: "Phone Number QR Code", blurb: "One scan opens the dialler with your number ready." },
  { slug: "youtube-video-qr-code", navLabel: "YouTube Video QR Code", blurb: "Attach a tutorial or demo film to a physical object." },
  { slug: "business-card-qr-code", navLabel: "Business Card QR Code", blurb: "Fit your whole contact and portfolio on a small card." },
  { slug: "transparent-qr-code", navLabel: "Transparent QR Code", blurb: "No white box — drop the code onto coloured artwork." },
];
