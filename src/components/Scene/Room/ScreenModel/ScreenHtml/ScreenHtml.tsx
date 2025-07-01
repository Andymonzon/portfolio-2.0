import { Html } from "@react-three/drei";
import { Desktop } from "../Desktop/Desktop";
import { Taskbar } from "../Taskbar/Taskbar";
import { useState } from "react";

interface Props {
  currentModelSelected: string;
}
export const ScreenHtml = ({ currentModelSelected }: Props) => {
  // TODO: cambiar esto para que acepte a todas las apps
  const [isMinimized, setIsMinimized] = useState<{
    type: "minimized" | "close" | "";
    value: boolean;
  }>({
    type: "minimized",
    value: true,
  });

  return (
    <Html
      center
      transform
      occlude
      rotation={[0, Math.PI / 0.2, 0]}
      position={[-7.919, 7.98, 13.423]}
      distanceFactor={1.5}
      pointerEvents={currentModelSelected === "monitor" ? "auto" : "none"}
      className="box-border"
    >
      <div className="w-[1080px] h-[620px] flex items-center  flex-col text-white ">
        <Desktop setIsMinimized={setIsMinimized} isMinimized={isMinimized} />
        <Taskbar setIsMinimized={setIsMinimized} isMinimized={isMinimized} />
      </div>
    </Html>
  );
};
