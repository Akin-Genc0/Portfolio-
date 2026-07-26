import { GithubDashboard } from "@/components/GithubDashboard";
import { Sidebar } from "@/components/Sidebar";
import { getGithubPortfolio } from "@/lib/github";

export default async function Home() {
  const { profile, repositories, events } = await getGithubPortfolio();

  return (
    <div className="mx-auto grid min-h-screen max-w-[1880px] grid-cols-1 gap-2 p-2 lg:grid-cols-[300px_minmax(0,1fr)] lg:gap-4 lg:p-4">
      <Sidebar profile={profile} />
      <GithubDashboard
        events={events}
        profile={profile}
        repositories={repositories}
      />
    </div>
  );
}
