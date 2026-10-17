import { NextRequest } from "next/server";

export const dynamic = "force-dynamic";

const REPO = "usaimaker/qrify";
const STATS_PATH = "stats/hits.jsonl";
const BRANCH = "stats";
const TOKEN = process.env.QRIFY_STATS_PAT || "";

export async function GET(req: NextRequest) {
  const u = new URL(req.url);
  const path = u.searchParams.get("p") || "/";
  const ref = req.headers.get("referer") || u.searchParams.get("r") || "";
  const country = req.headers.get("x-vercel-ip-country") || "??";
  const ua = (req.headers.get("user-agent") || "").slice(0, 90);

  let refHost = "";
  if (ref) {
    try { refHost = new URL(ref).host; } catch { refHost = ref.slice(0, 60); }
  }

  const rec =
    JSON.stringify({ t: new Date().toISOString(), p: path, c: country, ref: refHost, ua }) + "\n";

  if (TOKEN) {
    await appendToGitHub(rec);
  }

  const gif = Buffer.from("R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", "base64");
  return new Response(gif, {
    status: 200,
    headers: { "Content-Type": "image/gif", "Cache-Control": "no-store, no-cache, must-revalidate", "x-tk": TOKEN ? "1" : "0", "x-tk-len": String(TOKEN.length) },
  });
}

async function appendToGitHub(line: string): Promise<void> {
  const api = "https://api.github.com";
  const auth: Record<string, string> = {
    Authorization: "Bearer " + TOKEN,
    "User-Agent": "qrify-track",
    Accept: "application/vnd.github+json",
  };
  for (let attempt = 0; attempt < 5; attempt++) {
    try {
      const getUrl = api + "/repos/" + REPO + "/contents/" + STATS_PATH + "?ref=" + BRANCH;
      const g = await fetch(getUrl, { headers: auth });
      let content = "";
      let sha = "";
      if (g.ok) {
        const j = await g.json();
        content = Buffer.from(j.content, "base64").toString("utf8");
        sha = j.sha;
      } else if (g.status !== 404) {
        await new Promise((r) => setTimeout(r, 300));
        continue;
      }
      const newContent = Buffer.from(content + line).toString("base64");
      const putUrl = api + "/repos/" + REPO + "/contents/" + STATS_PATH + "?branch=" + BRANCH;
      const pr = await fetch(putUrl, {
        method: "PUT",
        headers: { ...auth, "Content-Type": "application/json" },
        body: JSON.stringify({ message: "track: record hit", content: newContent, sha: sha || undefined }),
      });
      if (pr.ok) return;
      if (pr.status === 409) { await new Promise((r) => setTimeout(r, 400)); continue; }
      return;
    } catch {
      await new Promise((r) => setTimeout(r, 300));
    }
  }
}
