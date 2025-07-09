import { useContextAction } from "../../hooks/useContextAction";

export const BtnBack = () => {
  const {
    currentModelSelected,
    refAction,
    setCurrentModelSelected,
    setIsAnimationEnd,
  } = useContextAction();

  const handleBack = () => {
    const action = refAction.current;
    refAction.current = null;
    setIsAnimationEnd(false);
    if (!action) return;

    action.paused = false;
    action.timeScale = -1;
    action.play();

    action.time = action.getClip().duration;

    const onFinished = (e: any) => {
      if (e.action === action) {
        setCurrentModelSelected("");
        action.getMixer().removeEventListener("finished", onFinished);
      }
    };

    action.getMixer().addEventListener("finished", onFinished);
  };

  return (
    <div
      className="absolute top-10 left-10 bg-red-500 z-10"
      onClick={handleBack}
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
