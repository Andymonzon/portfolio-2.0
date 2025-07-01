import WindowsLogo from "/screen/windowsLogo.png";
import LupaIcono from "/screen/lupa.png";
import CarpetaIcono from "/screen/carpetaIcono.png";
import BraveLogo from "/screen/braveLogo.png";
import VsCodeLogo from "/screen/vscodeLogo.png";
import TerminalLogo from "/screen/windowsTerminal.png";
import type { AppNames, AppState } from "../ScreenHtml/ScreenHtml";

interface Props {
  setIsMinimized: React.Dispatch<
    React.SetStateAction<Record<AppNames, AppState>>
  >;
  isMinimized: Record<AppNames, AppState>;
}

export const Taskbar = ({ setIsMinimized, isMinimized }: Props) => {
  const handleMaximize = (app: AppNames) => {
    setIsMinimized((prevState) => {
      return {
        ...prevState,
        [app]: { type: "", value: false },
      };
    });
  };

  const widthApp = (app: AppNames) => {
    if (isMinimized[app].type === "close") return "";
    if (isMinimized[app].type === "minimized") return "w-[5px]";
    if (isMinimized[app].type === "") return "w-[15px] bg-[#f46762]";
  };

  return (
    <div className="w-full h-[45px] flex rounded-b-sm items-center justify-between bg-neutral-800 px-3 py-5">
      <div className="flex flex-grow basis-0"></div>
      <div className="flex items-center justify-center ">
        <div className="flex items-center p-2">
          <img src={WindowsLogo} alt="windows logo" width={25} height={25} />
        </div>
        <div className="flex items-center p-2">
          <img
            src={LupaIcono}
            alt="buscador"
            width={25}
            height={25}
            style={{
              filter: "brightness(0) invert(1)",
            }}
          />
        </div>
        <div className="flex items-center p-2">
          <img src={CarpetaIcono} alt="carpeta" width={25} height={25} />
        </div>
        <div
          className="flex items-center p-2 cursor-pointer flex-col justify-center relative"
          onClick={() => handleMaximize("brave")}
        >
          <img src={BraveLogo} alt="brave" width={25} height={25} />
          <div
            className={`bg-[#8d8d8d] ${widthApp(
              "brave"
            )} h-[2px] duration-300 rounded-full absolute bottom-[2px]`}
          ></div>
        </div>
        <div
          className="flex items-center p-2 cursor-pointer flex-col justify-center relative"
          onClick={() => handleMaximize("vscode")}
        >
          <img src={VsCodeLogo} alt="vscode" width={25} height={25} />
          <div className="w-[5px] h-[2px] bg-[#8d8d8d] rounded-full absolute bottom-[2px]"></div>
        </div>
        <div className="flex items-center p-2">
          <img src={TerminalLogo} alt="terminal" width={25} height={25} />
        </div>
      </div>
      <div className="flex items-center flex-grow justify-end basis-0">
        <div>flechita</div>
        <div>idioma</div>
        <div>wifi</div>
        <div>volumen</div>
        <div>hora</div>
      </div>
    </div>
  );
};
