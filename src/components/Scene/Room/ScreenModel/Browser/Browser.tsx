import { Tab } from "./Tab/Tab";
import LinkedinLogo from "/screen/browser/linkedinLogo.png";
import GithubLogo from "/screen/browser/githubLogo.png";
import { MaximizeIcon } from "../Icons/MaximizeIcon/MaximizeIcon";
import { MinimizeIcon } from "../Icons/MinimizeIcon/MinimizeIcon";
import { CloseIcon } from "../Icons/CloseIcon/CloseIcon";
import { LinkedinPage } from "./LinkedinPage/LinkedinPage";

export const Browser = () => {
  return (
    <div className="w-full h-full flex flex-col">
      {/* barra de navegacion */}
      <div className="">
        <div className="bg-[#1f1f23] flex items-center justify-between box-border">
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
      </div>
      {/* contenido */}
      <div className="bg-[#1f1f1f] flex-grow overflow-auto">
        <LinkedinPage />
      </div>
    </div>
  );
};
