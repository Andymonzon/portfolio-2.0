interface Props {
  img: string;
  title: string;
  active: boolean;
}

export const Tab = ({ title, img, active }: Props) => {
  return (
    <div
      className={`flex items-center gap-3 text-[#bfbfbf] ${
        active ? "bg-[#3b3b3f]" : ""
      } px-2 py-1 rounded-sm w-[258px]`}
    >
      <img src={img} alt={title} className="w-4 h-4" />
      <h2 className="text-sm">{title}</h2>
      <div></div>
    </div>
  );
};
