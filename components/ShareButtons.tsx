"use client";

import { SITE_URL, SITE_TITLE, SITE_DESCRIPTION } from "@/lib/constants";

type ShareTarget = {
  key: string;
  label: string;
  color: string;
  build: () => string;
};

const SHARES: ShareTarget[] = [
  {
    key: "x",
    label: "X / Twitter",
    color: "bg-black",
    build: () =>
      `https://twitter.com/intent/tweet?url=${encodeURIComponent(
        SITE_URL,
      )}&text=${encodeURIComponent(SITE_TITLE)}`,
  },
  {
    key: "facebook",
    label: "Facebook",
    color: "bg-blue-600",
    build: () => `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(SITE_URL)}`,
  },
  {
    key: "linkedin",
    label: "LinkedIn",
    color: "bg-blue-700",
    build: () =>
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(SITE_URL)}`,
  },
  {
    key: "reddit",
    label: "Reddit",
    color: "bg-orange-600",
    build: () =>
      `https://www.reddit.com/submit?url=${encodeURIComponent(
        SITE_URL,
      )}&title=${encodeURIComponent(SITE_TITLE)}`,
  },
  {
    key: "pinterest",
    label: "Pinterest",
    color: "bg-red-600",
    build: () =>
      `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(
        SITE_URL,
      )}&description=${encodeURIComponent(SITE_DESCRIPTION)}`,
  },
  {
    key: "email",
    label: "Email",
    color: "bg-slate-600",
    build: () =>
      `mailto:?subject=${encodeURIComponent(SITE_TITLE)}&body=${encodeURIComponent(
        SITE_DESCRIPTION + " " + SITE_URL,
      )}`,
  },
];

export default function ShareButtons() {
  const onShare = (build: () => string) => {
    if (typeof window !== "undefined") {
      window.open(build(), "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
      <span className="text-sm text-slate-500">Share this tool:</span>
      {SHARES.map((s) => (
        <button
          key={s.key}
          onClick={() => onShare(s.build)}
          className={`rounded-full ${s.color} px-4 py-1.5 text-sm font-medium text-white hover:opacity-90`}
        >
          {s.label}
        </button>
      ))}
    </div>
  );
}
