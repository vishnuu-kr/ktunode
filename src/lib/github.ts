const GITHUB_API = "https://api.github.com";

function getGitHubConfig() {
  const token = process.env.GITHUB_TOKEN;
  const repoFull = process.env.VERCEL_GIT_REPO_OWNER && process.env.VERCEL_GIT_REPO_SLUG
    ? `${process.env.VERCEL_GIT_REPO_OWNER}/${process.env.VERCEL_GIT_REPO_SLUG}`
    : process.env.GITHUB_REPOSITORY || "";
  return { token, repo: repoFull };
}

export function isServerless(): boolean {
  return !!process.env.VERCEL || !!process.env.AWS_REGION;
}

async function getFileSha(repo: string, path: string, token: string): Promise<string | null> {
  const res = await fetch(`${GITHUB_API}/repos/${repo}/contents/${path}`, {
    headers: { Authorization: `Bearer ${token}`, Accept: "application/vnd.github.v3+json" },
  });
  if (!res.ok) return null;
  const data = await res.json();
  return typeof data === "object" && data !== null && "sha" in data ? (data as { sha: string }).sha : null;
}

export async function commitFileToGitHub(
  filePath: string,
  content: string,
  commitMessage: string
): Promise<void> {
  const { token, repo } = getGitHubConfig();
  if (!token || !repo) {
    throw new Error(
      "Server filesystem is read-only. Set GITHUB_TOKEN and GITHUB_REPOSITORY environment variables to enable config saves."
    );
  }

  const sha = await getFileSha(repo, filePath, token);
  const body: Record<string, unknown> = {
    message: commitMessage,
    content: Buffer.from(content).toString("base64"),
    committer: { name: "KTUNODE Admin", email: "admin@ktunode.com" },
  };
  if (sha) body.sha = sha;

  const res = await fetch(`${GITHUB_API}/repos/${repo}/contents/${filePath}`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/vnd.github.v3+json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    const msg = typeof err === "object" && err !== null && "message" in err ? (err as { message: string }).message : res.statusText;
    throw new Error(`GitHub API error: ${msg}`);
  }
}
