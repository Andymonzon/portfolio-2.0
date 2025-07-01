import { Tab } from "./Tab/Tab";
import LinkedinLogo from "/screen/browser/linkedinLogo.png";
import GithubLogo from "/screen/browser/githubLogo.png";
import { MaximizeIcon } from "../Icons/MaximizeIcon/MaximizeIcon";
import { MinimizeIcon } from "../Icons/MinimizeIcon/MinimizeIcon";
import { CloseIcon } from "../Icons/CloseIcon/CloseIcon";
import { LinkedinPage } from "./LinkedinPage/LinkedinPage";

export const Browser = () => {
  return (
    <div className="w-full flex flex-col absolute top-0 left-0 h-[512px]">
      <div className="h-full">
        {/* barra de navegacion */}
        <div className="bg-[#1f1f23] flex items-center justify-between rounded-t-sm">
          {/* pestañas */}
          <div className="flex items-center gap-1 p-1">
            <Tab
              img={LinkedinLogo}
              title="Andrés Monzón | LinkedIn"
              active={true}
            />
            <Tab
              img={GithubLogo}
              title="Andymonzon (Andrés Monzón)"
              active={false}
            />
          </div>
          <div className="flex items-center">
            <button className="hover:bg-[#3b3b3f] py-[9px] px-3">
              <MinimizeIcon />
            </button>
            <button className="hover:bg-[#3b3b3f] py-[9px] px-3">
              <MaximizeIcon />
            </button>
            <button className="hover:bg-red-700 py-[9px] px-3">
              <CloseIcon />
            </button>
          </div>
        </div>
        <div className=" bg-[#3b3b3f] h-8"></div>
        {/* contenido */}
        <LinkedinPage />
      </div>
    </div>
  );
};
