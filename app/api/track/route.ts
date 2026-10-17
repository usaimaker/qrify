import { NextRequest } from "next/server";

export const dynamic = "force-dynamic";

const REPO = "usaimaker/qrify";
const DIR = "stats/hits";
const TOKEN = process.env.QRIFY_STATS_PAT || "";
const AUTH: Record<string, string> = TOKEN
  ? { Authorization: "Bearer " + TOKEN, "User-Agent": "qrify-track", Accept: "application/vnd.github+json" }
  : {};

export async function GET(req: NextRequest) {
  const u = new URL(req.url);
  const path = u.searchParams.get("p") || "/";
  const ref = req.headers.get("referer") || u.searchParams.get("r") || "";
  const country = req.headers.get("x-vercel-ip-country") || "??";
  const ua = (req.headers.get("user-agent") || "").slice(0, 90);
  let refHost = "";
  if (ref) { try { refHost = new URL(ref).host; } catch { refHost = ref.slice(0, 60); } }
  const rec = { t: new Date().toISOString(), p: path, c: country, ref: refHost, ua };

  let w = "skip";
  if (TOKEN) { try { w = await writeHit(rec); } catch (e) { w = "exc:" + String(e).slice(0, 50); } }

  const gif = Buffer.from("R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", "base64");
  return new Response(gif, {
    status: 200,
    headers: {
      "Content-Type": "image/gif",
      "Cache-Control": "no-store, no-cache, must-revalidate",
      "x-tk": TOKEN ? "1" : "0",
      "x-write": w,
    },
  });
}

async function writeHit(rec: Record<string, string>): Promise<string> {
  const stamp = Date.now().toString(36);
  const rnd = Math.random().toString(36).slice(2, 8);
  const name = stamp + "-" + rnd + ".json";
  const url = "https://api.github.com/repos/" + REPO + "/contents/" + DIR + "/" + name;
  for (let i = 0; i < 4; i++) {
    try {
      const r = await fetch(url, {
        method: "PUT",
        headers: { ...AUTH, "Content-Type": "application/json" },
        body: JSON.stringify({ message: "track: hit", content: Buffer.from(JSON.stringify(rec)).toString("base64") }),
      });
      if (r.ok) return "ok";
      if (r.status === 409) continue; // 命名冲突，换名重试
      const t = await r.text();
      return "fail:" + r.status + ":" + t.slice(0, 40);
    } catch (e) {
      if (i < 3) { await new Promise((s) => setTimeout(s, 400)); continue; }
      return "exc:" + String(e).slice(0, 50);
    }
  }
  return "exhausted";
}
