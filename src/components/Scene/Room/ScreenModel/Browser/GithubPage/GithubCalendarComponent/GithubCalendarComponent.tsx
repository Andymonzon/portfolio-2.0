import GitHubCalendar from "react-github-calendar";
import "./GithubCalendarFix.css";

export const GitHubCalendarComponent = () => {
  return (
    <div className="w-full border flex items-center justify-center rounded-md border-[#3d444d] p-2">
      <GitHubCalendar
        username="Andymonzon"
        blockSize={8.8}
        blockMargin={3}
        fontSize={12}
      />
    </div>
  );
};
