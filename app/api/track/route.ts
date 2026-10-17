import { NextRequest } from "next/server";

export const dynamic = "force-dynamic";

const REPO = "usaimaker/qrify";
const PATH = "stats/hits.jsonl";
const BRANCH = "stats";
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
  if (TOKEN) { try { wres = await appendViaGitData(rec); } catch (e) { wres = { w: "exc", msg: String(e).slice(0, 60) }; } }

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
  if (!r.ok) { const e: any = new Error("gh " + r.status); e.status = r.status; e.msg = txt.slice(0, 80); throw e; }
  return txt ? JSON.parse(txt) : null;
}

async function appendViaGitData(line: string): Promise<Record<string, string>> {
  const base = "https://api.github.com/repos/" + REPO;
  for (let attempt = 0; attempt < 4; attempt++) {
    try {
      const ref = await gh("GET", base + "/git/refs/heads/" + BRANCH);
      const headSha = ref.object.sha;
      const commit = await gh("GET", base + "/git/commits/" + headSha);
      const baseTree = commit.tree.sha;
      let existing = "";
      try {
        const c = await gh("GET", base + "/contents/" + PATH + "?ref=" + BRANCH);
        existing = Buffer.from(c.content, "base64").toString("utf8");
      } catch (e: any) { if (e.status !== 404) throw e; }
      const newContent = existing + line;
      const blob = await gh("POST", base + "/git/blobs", { content: Buffer.from(newContent).toString("base64"), encoding: "base64" });
      const tree = await gh("POST", base + "/git/trees", { base_tree: baseTree, tree: [{ path: PATH, mode: "100644", type: "blob", sha: blob.sha }] });
      const newCommit = await gh("POST", base + "/git/commits", { message: "track: record hit", parents: [headSha], tree: tree.sha });
      await gh("PATCH", base + "/git/refs/heads/" + BRANCH, { sha: newCommit.sha });
      return { w: "ok" };
    } catch (e: any) {
      if (attempt < 3) { await new Promise((r) => setTimeout(r, 400)); continue; }
      return { w: "fail", code: String(e && e.status || ""), msg: (e && e.msg) || String(e).slice(0, 60) };
    }
  }
  return { w: "exhausted" };
}
