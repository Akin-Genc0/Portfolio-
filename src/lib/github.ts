export type GithubProfile = {
  avatar_url: string;
  bio: string | null;
  html_url: string;
  location: string | null;
  name: string | null;
  public_repos: number;
};

export type GithubRepository = {
  description: string | null;
  fork: boolean;
  html_url: string;
  language: string | null;
  name: string;
  stargazers_count: number;
  updated_at: string;
};

export type GithubEvent = {
  created_at: string;
  id: string;
  repo: { name: string };
  type: string;
};

const username = "Akin-Genc0";
const apiOptions = {
  headers: { Accept: "application/vnd.github+json" },
  next: { revalidate: 3600 },
};

async function getJson<T>(path: string): Promise<T | null> {
  try {
    const response = await fetch(`https://api.github.com${path}`, apiOptions);
    return response.ok ? response.json() : null;
  } catch {
    return null;
  }
}

export async function getGithubPortfolio() {
  const [profile, repositories, events] = await Promise.all([
    getJson<GithubProfile>(`/users/${username}`),
    getJson<GithubRepository[]>(`/users/${username}/repos?sort=updated&per_page=12&type=owner`),
    getJson<GithubEvent[]>(`/users/${username}/events/public?per_page=8`),
  ]);

  return {
    profile,
    repositories: (repositories ?? []).filter((repository) => !repository.fork),
    events: events ?? [],
  };
}

export function formatEvent(event: GithubEvent) {
  const actions: Record<string, string> = { CreateEvent: "Created", DeleteEvent: "Deleted a branch in", PullRequestEvent: "Updated a pull request in", PushEvent: "Pushed to", ReleaseEvent: "Published a release in" };
  return `${actions[event.type] ?? "Updated"} ${event.repo.name.split("/").at(-1)}`;
}

export function relativeDate(date: string) {
  const days = Math.max(0, Math.floor((Date.now() - new Date(date).getTime()) / 86_400_000));
  return days === 0 ? "today" : `${days}d ago`;
}
