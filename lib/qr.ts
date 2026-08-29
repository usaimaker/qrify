export type DotsType =
  | "square"
  | "dots"
  | "rounded"
  | "extra-rounded"
  | "classy"
  | "classy-rounded"
  | "terminal";
export type CornersSquareType = "dot" | "square" | "extra-rounded";
export type CornersDotType = "dot" | "square";
export type GradientType = "linear" | "radial";

export interface QrSettings {
  data: string;
  dotsColor: string;
  dotsType: DotsType;
  bgColor: string;
  cornersSquareType: CornersSquareType;
  cornersDotType: CornersDotType;
  gradientEnabled: boolean;
  gradientColor: string;
  gradientType: GradientType;
  logoDataUrl: string | null;
  margin: number;
}

export const DEFAULT_SETTINGS: QrSettings = {
  data: "https://qrify-ebon.vercel.app",
  dotsColor: "#4f46e5",
  dotsType: "rounded",
  bgColor: "#ffffff",
  cornersSquareType: "extra-rounded",
  cornersDotType: "square",
  gradientEnabled: false,
  gradientColor: "#ec4899",
  gradientType: "linear",
  logoDataUrl: null,
  margin: 8,
};

export function buildPayload(s: QrSettings): Record<string, unknown> {
  const dotsOptions: { type: DotsType; color: string; gradient?: unknown } = {
    type: s.dotsType,
    color: s.dotsColor,
  };
  if (s.gradientEnabled) {
    dotsOptions.gradient = {
      type: s.gradientType,
      rotation: 0,
      colorStops: [
        { offset: 0, color: s.dotsColor },
        { offset: 1, color: s.gradientColor },
      ],
    };
  }

  const payload: Record<string, unknown> = {
    width: 320,
    height: 320,
    type: "svg",
    data: s.data || "https://qrify-ebon.vercel.app",
    margin: s.margin,
    qrOptions: { errorCorrectionLevel: s.logoDataUrl ? "H" : "M" },
    dotsOptions,
    backgroundOptions: { color: s.bgColor },
    cornersSquareOptions: { type: s.cornersSquareType, color: s.dotsColor },
    cornersDotOptions: { type: s.cornersDotType, color: s.dotsColor },
    imageOptions: { hideBackgroundDots: true, imageSize: 0.25, margin: 4 },
  };

  if (s.logoDataUrl) {
    payload.image = s.logoDataUrl;
  }

  return payload;
}

export function debounce<T extends (...args: never[]) => void>(fn: T, delay: number): T {
  let timer: ReturnType<typeof setTimeout> | undefined;
  return ((...args: never[]) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  }) as T;
}
