import { useEffect, useState } from "react";
import { ArrowDown } from "../../../../Icons/ArrowDown/ArrowDown";
import { BookIcon } from "../../../../Icons/BookIcon/BookIcon";
import { GithubCopilot } from "../../../../Icons/GithubCopilot/GithubCopilot";
import { GithubLogo } from "../../../../Icons/GithubLogo/GithubLogo";
import { GithubMenu } from "../../../../Icons/GithubMenu/GithubMenu";
import { IssueIcon } from "../../../../Icons/IssueIcon/IssueIcon";
import { NotificationGithubIcon } from "../../../../Icons/NotificationGithubIcon.tsx/NotificationGithubIcon";
import { PackageIcon } from "../../../../Icons/PackageIcon/PackageIcon";
import { Plus } from "../../../../Icons/Plus/Plus";
import { ProjectIcons } from "../../../../Icons/ProjectsIcon/ProjectsIcon";
import { PullRequestsIcon } from "../../../../Icons/PullRequestsIcon/PullRequestsIcon";
import { RepositoriesIcon } from "../../../../Icons/RepositoriesIcon/RepositoriesIcon";
import { SearchIcon } from "../../../../Icons/SearchIcon/SearchIcon";
import { StarIcon } from "../../../../Icons/StarIcon/StarIcon";
import { githubFetchPinned } from "./githubFetchPinned/githubFetchPinned";
import type {
  GithubProfile,
  PinnedRepo,
} from "../../../../../../../../model/github.model";
import { githubFetchProfile } from "./githubFetchProfile/githubFetchProfile";
import { FollowerIcon } from "../../../../Icons/FollowerIcon/FollowerIcon";
import { LocationIcon } from "../../../../Icons/LocationIcon/LocationIcon";
import { UrlIcon } from "../../../../Icons/UrlIcon/UrlIcon";
import { LinkedinGithubIcon } from "../../../../Icons/LinkedinGithubIcon/LinkedinGithubIcon";
import { GitHubCalendarComponent } from "./GithubCalendarComponent/GithubCalendarComponent";
import { GithubTabs } from "./GithubTabs/GithubTabs";

interface Props {
  selectedTab: "linkedin" | "github";
}

export const GithubPage = ({ selectedTab }: Props) => {
  const [repos, setRepos] = useState<PinnedRepo[] | null>(null);
  const [info, setInfo] = useState<GithubProfile | null>(null);
  const [activeTabG, setActiveTabG] = useState<{
    overview: boolean;
    repositories: boolean;
  }>({ overview: true, repositories: false });

  useEffect(() => {
    const fetchRepos = async () => {
      const { data } = await githubFetchPinned();
      setRepos(data);
    };

    const fetchInfo = async () => {
      const { data } = await githubFetchProfile();
      setInfo(data);
      console.log(data);
    };

    fetchRepos();
    fetchInfo();
  }, []);

  return (
    <div
      className="flex flex-col box-border h-full overflow-auto"
      style={{
        display: selectedTab === "github" ? "flex" : "none",
      }}
    >
      <header className="bg-[#010409] flex flex-col items-center px-4">
        <section className="flex items-center justify-between w-full py-3">
          <div className="flex items-center gap-2">
            <button className="p-2 border border-[#3d444d] rounded-md">
              <GithubMenu />
            </button>
            <a
              href="https://github.com/Andymonzon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubLogo />
            </a>
            <span className="text-xs">Andymonzon</span>
          </div>
          <div className="flex items-center gap-2">
            {/* buscador */}
            <div className="flex items-center text-[#9198a1] border border-[#9198a1] pr-15 pl-1 py-1.5 rounded-md gap-2">
              <SearchIcon />
              <span className="text-xs">
                Type <kbd>/</kbd> to search
              </span>
            </div>
            <div className="flex">
              <div className="border border-[#9198a1] p-1.5 rounded-l-md flex items-center">
                <GithubCopilot />
              </div>
              <div className="border border-[#9198a1] p-1 rounded-r-md flex items-center">
                <ArrowDown color="#9198a1" />
              </div>
            </div>
            <kbd className="text-[#9198a1]">|</kbd>
            <div className="flex items-center border border-[#9198a1] rounded-md ">
              <div className="px-2 py-1.5 flex items-center">
                <Plus />
              </div>
              <div className="pr-1">
                <ArrowDown color="#9198a1" />
              </div>
            </div>
            <div className="border border-[#9198a1] p-1.5 rounded-md flex items-center">
              <IssueIcon />
            </div>
            <div className="border border-[#9198a1] p-1.5 rounded-md flex items-center">
              <PullRequestsIcon />
            </div>
            <div className="border border-[#9198a1] p-1.5 rounded-md flex items-center">
              <NotificationGithubIcon />
            </div>

            <a
              href="https://github.com/Andymonzon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://github.com/Andymonzon.png"
                alt="Andymonzon"
                className="w-8 h-8 rounded-full"
              />
            </a>
          </div>
        </section>
        <section className="w-full flex gap-4 py-3 ">
          <GithubTabs
            icon={<BookIcon />}
            title="Overview"
            active={activeTabG.overview}
            onClick={() =>
              setActiveTabG({ overview: true, repositories: false })
            }
          />
          <GithubTabs
            icon={<RepositoriesIcon />}
            title="Repositories"
            active={activeTabG.repositories}
            onClick={() =>
              setActiveTabG({ overview: false, repositories: true })
            }
          />
          <GithubTabs icon={<ProjectIcons />} title="Projects" />
          <GithubTabs icon={<PackageIcon />} title="Packages" />
          <GithubTabs icon={<StarIcon />} title="Stars" />
        </section>
      </header>
      <main className="bg-[#0d1117] h-full px-10">
        <div className="mx-auto w-[900px] my-10 flex gap-5">
          <aside className="flex flex-col gap-3">
            <img
              src="https://github.com/Andymonzon.png"
              alt="Andymonzon"
              width={260}
              height={260}
              className="rounded-full"
            />
            <div>
              <h2 className="font-semibold text-lg">Andrés Monzón</h2>
              <p className="text-[#9198a1] text-sm">Andymonzon · he/him</p>
            </div>
            <a
              href="https://github.com/Andymonzon"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm border border-[#9198a1] bg-[#212830] py-1 flex justify-center rounded-md"
            >
              Follow
            </a>
            <div className="flex gap-1">
              <span className="flex gap-1 items-center text-[11px]">
                <FollowerIcon />
                {info?.followers}
                <p className="text-[#9198a1]">Followers</p>
              </span>
              ·
              <div className="flex gap-1 items-center text-[11px]">
                {info?.following}
                <p className="text-[#9198a1]">Following</p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-xs">
                <LocationIcon />
                {info?.location}
              </div>
              <div className="flex items-center gap-2 text-xs">
                <UrlIcon />
                <a href={info?.blog} target="_blank" rel="noopener noreferrer">
                  {info?.blog}
                </a>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <LinkedinGithubIcon />
                <a
                  href="https://www.linkedin.com/in/andresvmonzon/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  /in/andresvmonzon/
                </a>
              </div>
            </div>
          </aside>
          <div className="w-full flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <p>Pinned</p>

              {/* repositorios */}
              <div className="flex flex-wrap gap-3">
                {repos != null
                  ? repos.map((repo) => (
                      <div
                        key={repo.name}
                        className="border border-[#3d444d] rounded-md p-3 flex flex-col w-[49%] gap-2"
                      >
                        <span className="flex items-center justify-between w-full">
                          <div className="flex items-center gap-2">
                            <RepositoriesIcon />
                            <a
                              href={repo.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[#4493f8] text-sm"
                            >
                              {repo.name}
                            </a>
                          </div>
                          <p className="text-xs border border-[#9198a1] text-[#9198a1] px-1.5 rounded-full">
                            Public
                          </p>
                        </span>

                        <div className="flex gap-2 items-center">
                          <div
                            style={{
                              backgroundColor: `${repo.primaryLanguage?.color}`,
                              width: "10px",
                              height: "10px",
                              borderRadius: "50%",
                            }}
                          ></div>
                          <p className="text-[10px] text-[#9198a1]">
                            {repo.primaryLanguage?.name}
                          </p>
                        </div>
                      </div>
                    ))
                  : null}
              </div>
            </div>
            <div>
              <GitHubCalendarComponent />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
