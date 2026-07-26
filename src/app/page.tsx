import { GithubDashboard } from "@/components/GithubDashboard";
import { Sidebar } from "@/components/Sidebar";
import { getGithubPortfolio } from "@/lib/github";

export default async function Home() {
  const { profile, repositories, events } = await getGithubPortfolio();

  return (
    <div className="site-shell">
      <Sidebar profile={profile} />
      <GithubDashboard
        events={events}
        profile={profile}
        repositories={repositories}
      />
    </div>
  );
}
