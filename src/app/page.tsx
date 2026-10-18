import { GithubDashboard } from "@/components/GithubDashboard";
import { Sidebar } from "@/components/Sidebar";
import { getGithubPortfolio } from "@/lib/github";

export default async function Home() {
  const { profile, repositories, events } = await getGithubPortfolio();

  return (
    <div className="mx-auto grid min-h-screen max-w-[1400px] grid-cols-1 p-4 sm:p-6 lg:grid-cols-[210px_minmax(0,1fr)] lg:gap-8 lg:p-8">
      <Sidebar profile={profile} />
      <GithubDashboard
        events={events}
        profile={profile}
        repositories={repositories}
      />
    </div>
  );
}
