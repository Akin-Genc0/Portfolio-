import { GithubDashboard } from "@/components/GithubDashboard";
import { Sidebar } from "@/components/Sidebar";
import { getGithubPortfolio } from "@/lib/github";

export default async function Home() {
  const { profile, repositories, events } = await getGithubPortfolio();

  return (
    <div className="mx-auto grid min-h-screen max-w-[1600px] grid-cols-1 p-4 sm:p-6 xl:grid-cols-[230px_minmax(0,1fr)] xl:gap-10 xl:p-8">
      <Sidebar profile={profile} />
      <GithubDashboard
        events={events}
        profile={profile}
        repositories={repositories}
      />
    </div>
  );
}
