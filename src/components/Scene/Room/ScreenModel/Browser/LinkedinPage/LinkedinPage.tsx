import { ArrowDown } from "../../Icons/ArrowDown/ArrowDown";
import { HomeIcon } from "../../Icons/HomeIcon/HomeIcon";
import { LinkedinIcon } from "../../Icons/LinkedinIcon/LinkedinIcon";
import { MessageIcon } from "../../Icons/MessageIcon/MessageIcon";
import { NetworkIcon } from "../../Icons/NetworkIcon/NetworkIcon";
import { NotificationIcon } from "../../Icons/NotificationIcon/NotificationIcon";
import { SearchIcon } from "../../Icons/SearchIcon/SearchIcon";
import { WorkIcon } from "../../Icons/WorkIcon/WorkIcon";

import ImageProfileNav from "/screen/browser/profileNav.jpg";
import BannerImage from "/screen/browser/banner.jpg";
import ProfileDefault from "/screen/browser/profileDefault.jpg";
import OpenToWorkImg from "/screen/browser/openToWorkImage.png";

export const LinkedinPage = () => {
  return (
    <div className="flex flex-col h-full">
      <header className="flex items-center  bg-[#1b1f23] w-full px-10">
        <div className="mx-auto flex w-[900px] items-center">
          <a
            href="https://www.linkedin.com/in/andresvmonzon/"
            target="_blank"
            rel="noopener noreferrer"
            className="h-full"
          >
            <div
              style={{
                margin: "0 .4rem 0 -.4rem",
              }}
              className="h-full"
            >
              <LinkedinIcon />
            </div>
          </a>
          <div className="relative flex-grow">
            <input
              type="text"
              placeholder="Buscar"
              className="pr-6 border border-[#FFFFFF4D] rounded-3xl px-10 h-8"
            />
            <div className="absolute top-2 left-0.5 w-9 flex items-center justify-center">
              <SearchIcon />
            </div>
          </div>
          <nav className="min-h-14 text-[#ffffffb3] flex items-center ">
            <div className="flex flex-col items-center min-w-20">
              <div>
                <HomeIcon />
              </div>
              <span className="text-xs">Inicio</span>
            </div>

            <div className="flex flex-col items-center min-w-20">
              <div>
                <NetworkIcon />
              </div>
              <span className="text-xs">Mi red</span>
            </div>

            <div className="flex flex-col items-center min-w-20">
              <div>
                <WorkIcon />
              </div>
              <span className="text-xs">Empleos</span>
            </div>

            <div className="flex flex-col items-center min-w-20">
              <div>
                <MessageIcon />
              </div>
              <span className="text-xs">Mensajes</span>
            </div>

            <div className="flex flex-col items-center min-w-20">
              <div>
                <NotificationIcon />
              </div>
              <span className="text-xs">Notificaciones</span>
            </div>

            <div className="flex flex-col items-center min-w-20">
              <div>
                <img
                  src={ImageProfileNav}
                  width="24"
                  height="24"
                  alt="Andrés Monzón"
                  className="rounded-full"
                />
              </div>
              <span className="text-xs flex items-center">
                Yo
                <ArrowDown />
              </span>
            </div>
          </nav>
        </div>
      </header>
      <div className="bg-black flex h-full flex-col items-center justify-center">
        <div className=" my-10 h-full mx-auto w-[900px] rounded-sm flex gap-5">
          <main className="rounded-sm bg-[#1b1f23] overflow-hidden h-full w-3/4 ">
            <div>
              <img src={BannerImage} alt="banner" />
            </div>
            <div className="relative">
              <img
                src={ProfileDefault}
                alt="profile"
                className="rounded-full absolute -top-20 left-5"
              />
              <img
                src={OpenToWorkImg}
                alt="open to work"
                className="absolute -top-20 left-5"
              />
            </div>
            <div className="mt-14 px-5">
              <h2 className="text-xl">Andrés Monzón</h2>
            </div>
          </main>
          <aside className="w-1/4 bg-[#1b1f23] h-full rounded-sm"></aside>
        </div>
      </div>
    </div>
  );
};
