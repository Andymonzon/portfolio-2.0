import { Html } from "@react-three/drei";
import { Desktop } from "./Desktop/Desktop";
import { useState } from "react";
import { Taskbar } from "./Taskbar/Taskbar";

interface Props {
  isAnimationEnd: boolean;
}

export interface AppState {
  type: "minimized" | "close" | "";
  value: boolean;
}

export type AppNames = "brave" | "vscode";

export const ScreenHtml = ({ isAnimationEnd }: Props) => {
  const [isMinimized, setIsMinimized] = useState<Record<AppNames, AppState>>({
    brave: { type: "minimized", value: true },
    vscode: { type: "minimized", value: true },
  });

  return (
    <Html
      center
      transform
      occlude={isAnimationEnd ? "raycast" : "blending"}
      rotation={[0, Math.PI / 0.2, 0]}
      position={[-7.919, 7.98, 13.423]}
      distanceFactor={1.5}
      zIndexRange={isAnimationEnd ? [1000000000, 0] : [10, 0]}
      pointerEvents={isAnimationEnd ? "auto" : "none"}
      className="box-border"
    >
      <div className="w-[1080px] h-[620px] flex items-center  flex-col text-white">
        <Desktop setIsMinimized={setIsMinimized} isMinimized={isMinimized} />
        <Taskbar setIsMinimized={setIsMinimized} isMinimized={isMinimized} />
      </div>
    </Html>
  );
};
