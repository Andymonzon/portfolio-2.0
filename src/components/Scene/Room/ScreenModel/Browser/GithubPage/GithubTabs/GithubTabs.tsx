interface Props {
  icon: React.ReactNode;
  title: string;
  active?: boolean;
  onClick?: () => void;
}

export const GithubTabs = ({ icon, title, onClick, active = false }: Props) => {
  return (
    <button
      className={`flex gap-1 text-xs items-center relative cursor-pointer ${
        active
          ? "after:h-px after:w-full after:absolute after:-bottom-3 after:content-[''] after:bg-[#f78166]"
          : ""
      }`}
      onClick={onClick}
    >
      {icon}
      <span>{title}</span>
    </button>
  );
};
