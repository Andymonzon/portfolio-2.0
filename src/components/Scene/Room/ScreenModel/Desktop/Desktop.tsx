import { useState } from "react";
import { Browser } from "../Browser/Browser";
import type { AppNames, AppState } from "../ScreenHtml/ScreenHtml";

interface Props {
  setIsMinimized: React.Dispatch<
    React.SetStateAction<Record<AppNames, AppState>>
  >;
  isMinimized: Record<AppNames, AppState>;
}

export const Desktop = ({ setIsMinimized, isMinimized }: Props) => {
  const handleMinimize = (type: "minimized" | "close") => {
    setIsMinimized((prevState) => {
      return {
        ...prevState,
        brave: { type, value: true },
      };
    });
  };

  return (
    <div
      className="w-full flex flex-grow rounded-t-sm box-border"
      style={{
        backgroundImage: 'url("https://i.gifer.com/g32K.gif")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      {isMinimized.brave.value ? null : (
        <Browser handleMinimize={handleMinimize} />
      )}
    </div>
  );
};
