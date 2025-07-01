import { useState } from "react";
import { Browser } from "../Browser/Browser";

interface Props {
  setIsMinimized: React.Dispatch<
    React.SetStateAction<{ type: "minimized" | "close" | ""; value: boolean }>
  >;
  isMinimized: { type: "minimized" | "close" | ""; value: boolean };
}

export const Desktop = ({ setIsMinimized, isMinimized }: Props) => {
  const handleMinimize = (type: "minimized" | "close") => {
    setIsMinimized({ type, value: true });
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
      {isMinimized.value ? null : <Browser handleMinimize={handleMinimize} />}
    </div>
  );
};
