"use client";

import { useEffect, useRef, useState, type ChangeEvent } from "react";
import type QRCodeStyling from "qr-code-styling";
import {
  DEFAULT_SETTINGS,
  buildPayload,
  type QrSettings,
  type DotsType,
  type CornersSquareType,
  type CornersDotType,
  type GradientType,
} from "@/lib/qr";

const DOTS_TYPES: DotsType[] = [
  "square",
  "dots",
  "rounded",
  "extra-rounded",
  "classy",
  "classy-rounded",
  "terminal",
];
const CORNER_SQUARE_TYPES: CornersSquareType[] = ["dot", "square", "extra-rounded"];
const CORNER_DOT_TYPES: CornersDotType[] = ["dot", "square"];
const GRADIENT_TYPES: GradientType[] = ["linear", "radial"];

export interface QrGeneratorProps {
  /** 着陆页可预填模板文本（如 WIFI: / BEGIN:VCARD），未传则用站点默认 URL。 */
  initialData?: string;
  /** 输入框上方的标签文案，着陆页可按场景覆盖。 */
  dataLabel?: string;
}

export default function QrGenerator({ initialData, dataLabel }: QrGeneratorProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const qrRef = useRef<QRCodeStyling | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const initialRef = useRef<QrSettings>({
    ...DEFAULT_SETTINGS,
    data: initialData ?? DEFAULT_SETTINGS.data,
  });
  const [settings, setSettings] = useState<QrSettings>(initialRef.current);
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    (async () => {
      const mod = await import("qr-code-styling");
      if (!mounted) return;
      const qr = new mod.default(buildPayload(initialRef.current));
      qrRef.current = qr;
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
        qr.append(containerRef.current);
      }
      setLoading(false);
    })();
    return () => {
      mounted = false;
    };
  }, []);

  const updateQr = (next: QrSettings) => {
    qrRef.current?.update(buildPayload(next));
  };

  const handleChange = (patch: Partial<QrSettings>) => {
    const next = { ...settings, ...patch };
    setSettings(next);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => updateQr(next), 200);
  };

  const handleLogo = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      handleChange({ logoDataUrl: typeof reader.result === "string" ? reader.result : null });
    };
    reader.readAsDataURL(file);
  };

  const download = (ext: "png" | "svg") => {
    qrRef.current?.download({ name: "qrify-qrcode", extension: ext });
  };

  const copyPng = async () => {
    try {
      const data = await qrRef.current?.getRawData("png");
      const blob = data instanceof Blob ? data : undefined;
      if (blob && typeof navigator !== "undefined" && navigator.clipboard) {
        await navigator.clipboard.write([new ClipboardItem({ "image/png": blob })]);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      }
    } catch {
      /* clipboard not available */
    }
  };

  return (
    <section className="grid gap-6 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 md:grid-cols-2">
      <div className="flex flex-col items-center justify-center">
        <div
          ref={containerRef}
          className="flex min-h-[320px] w-[320px] items-center justify-center rounded-xl border border-slate-100 bg-white p-2"
        >
          {loading && <span className="text-slate-400">Generating…</span>}
        </div>
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => download("png")}
            className="rounded-lg bg-brand-600 px-4 py-2 text-sm font-medium text-white hover:bg-brand-700"
          >
            Download PNG
          </button>
          <button
            onClick={() => download("svg")}
            className="rounded-lg bg-slate-800 px-4 py-2 text-sm font-medium text-white hover:bg-slate-900"
          >
            Download SVG
          </button>
          <button
            onClick={copyPng}
            className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            {copied ? "Copied!" : "Copy PNG"}
          </button>
        </div>
      </div>

      <div className="space-y-4">
        <label className="block">
          <span className="text-sm font-medium text-slate-700">{dataLabel ?? "URL or text"}</span>
          <textarea
            value={settings.data}
            onChange={(e) => handleChange({ data: e.target.value })}
            rows={3}
            className="mt-1 w-full rounded-lg border border-slate-300 p-2 text-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
            placeholder="https://example.com"
          />
        </label>

        <div className="grid grid-cols-2 gap-3">
          <label className="block">
            <span className="text-sm font-medium text-slate-700">Foreground</span>
            <input
              type="color"
              value={settings.dotsColor}
              onChange={(e) => handleChange({ dotsColor: e.target.value })}
              className="mt-1 h-9 w-full cursor-pointer rounded border border-slate-300"
            />
          </label>
          <label className="block">
            <span className="text-sm font-medium text-slate-700">Background</span>
            <input
              type="color"
              value={settings.bgColor}
              onChange={(e) => handleChange({ bgColor: e.target.value })}
              className="mt-1 h-9 w-full cursor-pointer rounded border border-slate-300"
            />
          </label>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <label className="block">
            <span className="text-sm font-medium text-slate-700">Dot style</span>
            <select
              value={settings.dotsType}
              onChange={(e) => handleChange({ dotsType: e.target.value as DotsType })}
              className="mt-1 w-full rounded-lg border border-slate-300 p-2 text-sm"
            >
              {DOTS_TYPES.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </label>
          <label className="block">
            <span className="text-sm font-medium text-slate-700">Corner square</span>
            <select
              value={settings.cornersSquareType}
              onChange={(e) => handleChange({ cornersSquareType: e.target.value as CornersSquareType })}
              className="mt-1 w-full rounded-lg border border-slate-300 p-2 text-sm"
            >
              {CORNER_SQUARE_TYPES.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <label className="block">
            <span className="text-sm font-medium text-slate-700">Corner dot</span>
            <select
              value={settings.cornersDotType}
              onChange={(e) => handleChange({ cornersDotType: e.target.value as CornersDotType })}
              className="mt-1 w-full rounded-lg border border-slate-300 p-2 text-sm"
            >
              {CORNER_DOT_TYPES.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </label>
          <label className="block">
            <span className="text-sm font-medium text-slate-700">Margin</span>
            <input
              type="number"
              min={0}
              max={40}
              value={settings.margin}
              onChange={(e) => handleChange({ margin: Number(e.target.value) })}
              className="mt-1 w-full rounded-lg border border-slate-300 p-2 text-sm"
            />
          </label>
        </div>

        <div className="rounded-lg bg-slate-50 p-3">
          <label className="flex items-center gap-2 text-sm font-medium text-slate-700">
            <input
              type="checkbox"
              checked={settings.gradientEnabled}
              onChange={(e) => handleChange({ gradientEnabled: e.target.checked })}
            />
            Gradient foreground
          </label>
          {settings.gradientEnabled && (
            <div className="mt-3 grid grid-cols-2 gap-3">
              <label className="block">
                <span className="text-xs text-slate-500">Gradient end color</span>
                <input
                  type="color"
                  value={settings.gradientColor}
                  onChange={(e) => handleChange({ gradientColor: e.target.value })}
                  className="mt-1 h-9 w-full cursor-pointer rounded border border-slate-300"
                />
              </label>
              <label className="block">
                <span className="text-xs text-slate-500">Gradient type</span>
                <select
                  value={settings.gradientType}
                  onChange={(e) => handleChange({ gradientType: e.target.value as GradientType })}
                  className="mt-1 w-full rounded-lg border border-slate-300 p-2 text-sm"
                >
                  {GRADIENT_TYPES.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </label>
            </div>
          )}
        </div>

        <label className="block">
          <span className="text-sm font-medium text-slate-700">Center logo (optional)</span>
          <input
            type="file"
            accept="image/*"
            onChange={handleLogo}
            className="mt-1 w-full text-sm text-slate-500 file:mr-3 file:rounded-lg file:border-0 file:bg-brand-50 file:px-3 file:py-1.5 file:text-sm file:font-medium file:text-brand-700 hover:file:bg-brand-100"
          />
          {settings.logoDataUrl && (
            <button
              onClick={() => handleChange({ logoDataUrl: null })}
              className="mt-1 text-xs text-red-500 hover:underline"
            >
              Remove logo
            </button>
          )}
        </label>
      </div>
    </section>
  );
}
