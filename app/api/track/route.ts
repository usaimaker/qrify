import { NextRequest } from "next/server";

export const dynamic = "force-dynamic";

const REPO = "usaimaker/qrify";
const PATH = "stats/hits.jsonl";
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
  const rec = JSON.stringify({ t: new Date().toISOString(), p: path, c: country, ref: refHost, ua }) + "\n";

  let wres: Record<string, string> = { w: "skip" };
  if (TOKEN) { try { wres = await appendViaContents(rec); } catch (e) { wres = { w: "exc", msg: String(e).slice(0, 60) }; } }

  const gif = Buffer.from("R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", "base64");
  return new Response(gif, {
    status: 200,
    headers: {
      "Content-Type": "image/gif",
      "Cache-Control": "no-store, no-cache, must-revalidate",
      "x-tk": TOKEN ? "1" : "0",
      "x-write": wres.w + (wres.code ? ":" + wres.code : "") + (wres.msg ? ":" + wres.msg : ""),
    },
  });
}

async function gh(method: string, url: string, body?: any): Promise<any> {
  const r = await fetch(url, {
    method,
    headers: { ...AUTH, "Content-Type": "application/json" },
    body: body ? JSON.stringify(body) : undefined,
  });
  const txt = await r.text();
  if (!r.ok) { const e: any = new Error("gh " + r.status); e.status = r.status; e.msg = txt.slice(0, 70); throw e; }
  return txt ? JSON.parse(txt) : null;
}

async function appendViaContents(line: string): Promise<Record<string, string>> {
  const base = "https://api.github.com/repos/" + REPO + "/contents/" + PATH; // 默认分支(=main)
  for (let attempt = 0; attempt < 6; attempt++) {
    try {
      let content = "";
      let sha = "";
      try {
        const g = await gh("GET", base);
        content = Buffer.from(g.content, "base64").toString("utf8");
        sha = g.sha;
      } catch (e: any) { if (e.status !== 404) throw e; }
      const newContent = content + line;
      const body: any = { message: "track: record hit", content: Buffer.from(newContent).toString("base64") };
      if (sha) body.sha = sha;
      const r = await fetch(base, {
        method: "PUT",
        headers: { ...AUTH, "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (r.ok) return { w: "ok" };
      if (r.status === 409) { await new Promise((res) => setTimeout(res, 350)); continue; } // 并发冲突，重读重试
      const t = await r.text();
      return { w: "fail", code: String(r.status), msg: t.slice(0, 60) };
    } catch (e: any) {
      if (attempt < 5) { await new Promise((res) => setTimeout(res, 500)); continue; }
      return { w: "exc", code: String(e && e.status || ""), msg: (e && e.msg) || String(e).slice(0, 60) };
    }
  }
  return { w: "exhausted" };
}
