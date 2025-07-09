interface Props {
  img: string;
  title: string;
  active: boolean;
  setSelectTab: React.Dispatch<React.SetStateAction<"linkedin" | "github">>;
  id: "linkedin" | "github";
}

export const Tab = ({ title, img, active, setSelectTab, id }: Props) => {
  const handleClick = () => {
    setSelectTab(id);
  };

  return (
    <div
      className={`flex items-center gap-3 text-[#bfbfbf] cursor-pointer ${
        active ? "bg-[#3b3b3f]" : ""
      } px-2 py-1 rounded-sm w-[258px]`}
      onClick={handleClick}
    >
      <img src={img} alt={title} className="w-4 h-4" />
      <h2 className="text-sm">{title}</h2>
      <div></div>
    </div>
  );
};
