import { useContextAction } from "../../hooks/useContextAction";

export const BtnBack = () => {
  const { currentModelSelected, refAction } = useContextAction();

  const handleClick = () => {
    if (refAction.current) {
      refAction.current();
    }
  };

  return (
    <div
      className="absolute top-10 left-10 text-[#fff] border border-[#fff] rounded-full p-2 cursor-pointer z-10"
      onClick={handleClick}
      style={{
        display: currentModelSelected === "" ? "none" : "flex",
      }}
    >
      <ArrowLeftIcon />
    </div>
  );
};

const ArrowLeftIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
};
