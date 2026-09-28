export const ADSENSE_PUBLISHER_ID = "ca-pub-9959815194191047";

// Google Search Console 所有权验证 token（HTML 元标记法）。
// 为空时不渲染。已硬编码当前 qrify-ebon.vercel.app 的 SC 验证 token 作为兜底，
// 确保静态预渲染的 HTML 必然包含该 meta 标签（环境变量方式在静态页构建期取不到）。
export const GSC_VERIFICATION =
  process.env.NEXT_PUBLIC_GSC_VERIFICATION ||
  process.env.GSC_VERIFICATION ||
  "J-PQr8rpxOgFD6GMG2R7IDbI0jyJZlOLGXQkCeSfEXc";

export const SITE_URL = "https://qrify-ebon.vercel.app";
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
  "QRify",
];

export interface LandingPageMeta {
  slug: string;
  navLabel: string;
}

// 长尾 SEO 着陆页清单：sitemap 与页内互链均从这里读取，新增页面只需改这一处。
export const LANDING_PAGES: LandingPageMeta[] = [
  { slug: "qr-code-with-logo", navLabel: "QR Code with Logo" },
  { slug: "wifi-qr-code", navLabel: "WiFi QR Code" },
  { slug: "vcard-qr-code", navLabel: "vCard QR Code" },
  { slug: "svg-qr-code", navLabel: "SVG QR Code" },
];
