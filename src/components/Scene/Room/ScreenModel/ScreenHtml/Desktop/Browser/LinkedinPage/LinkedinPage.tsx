import { ArrowDown } from "../../../../Icons/ArrowDown/ArrowDown";
import { HomeIcon } from "../../../../Icons/HomeIcon/HomeIcon";
import { LinkedinIcon } from "../../../../Icons/LinkedinIcon/LinkedinIcon";
import { MessageIcon } from "../../../../Icons/MessageIcon/MessageIcon";
import { NetworkIcon } from "../../../../Icons/NetworkIcon/NetworkIcon";
import { NotificationIcon } from "../../../../Icons/NotificationIcon/NotificationIcon";
import { SearchIcon } from "../../../../Icons/SearchIcon/SearchIcon";
import { WorkIcon } from "../../../../Icons/WorkIcon/WorkIcon";

import ImageProfileNav from "/screen/browser/profileNav.jpg";
import BannerImage from "/screen/browser/banner.jpg";
import ProfileDefault from "/screen/browser/profileDefault.jpg";
import OpenToWorkImg from "/screen/browser/openToWorkImage.png";
import Abstract from "/screen/browser/abstract_aleph_logo.jpg";
import UTN from "/screen/browser/universidad_tecnologica_nacional_logo.jpg";
import { UserPlus } from "../../../../Icons/UserPlus/UserPlus";

interface Props {
  selectedTab: "linkedin" | "github";
}

export const LinkedinPage = ({ selectedTab }: Props) => {
  return (
    <div
      className="flex flex-col box-border h-full overflow-auto"
      style={{
        display: selectedTab === "linkedin" ? "flex" : "none",
      }}
    >
      <header className="flex items-center  bg-[#1b1f23] w-full px-10">
        <div className="mx-auto flex w-[900px] items-center">
          <a
            href="https://www.linkedin.com/in/andresvmonzon/"
            target="_blank"
            rel="noopener noreferrer"
            className=""
          >
            <div
              style={{
                margin: "0 .4rem 0 -.4rem",
              }}
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
      <div className="bg-black flex  flex-col items-center justify-center ">
        <div className=" my-6  mx-auto w-[900px] rounded-sm flex gap-5">
          <main className=" w-3/4 flex flex-col gap-2">
            <section className="bg-[#1b1f23] rounded-xl overflow-hidden pb-5">
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
              <div className="mt-14 px-5 flex flex-col gap-3">
                <div className="flex items-start justify-between">
                  <section className="flex flex-col gap-1">
                    <div>
                      <h2 className="text-2xl leading-6 font-semibold">
                        Andrés Monzón
                      </h2>
                      <p className="text-md">Software Developer</p>
                    </div>
                    <div>
                      <p className="text-sm text-[#ffffff99]">
                        Buenos Aires y alrededores
                      </p>
                    </div>
                    <p className="text-[#71b7fb]">Más de 500 contactos</p>
                  </section>
                  <section className="flex flex-col gap-2 w-[215px] ">
                    <div className="flex gap-2 items-center">
                      <img
                        src={Abstract}
                        alt="abstract"
                        width={30}
                        height={30}
                      />
                      <p>Abstract</p>
                    </div>
                    <div className="flex gap-2 items-center">
                      <img src={UTN} alt="utn" width={30} height={30} />
                      <p>Universidad Tecnológica Nacional</p>
                    </div>
                  </section>
                </div>
                <div className="flex gap-2">
                  <a
                    href="https://www.linkedin.com/in/andresvmonzon/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#71b7fb] text-[#000000e6] font-semibold px-3 py-[2px] rounded-full flex w-max items-center gap-1"
                  >
                    <UserPlus />
                    Conectar
                  </a>
                  <a
                    href="https://www.linkedin.com/in/andresvmonzon/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-transparent text-[#71b7fb] border border-[#71b7fb] font-semibold px-3 py-[2px] rounded-full flex w-max items-center gap-1"
                  >
                    Enviar mensaje
                  </a>
                  <button className="bg-transparent text-[#ffffffbf] border border-[#ffffffbf] font-semibold px-3 py-[2px] rounded-full flex w-max items-center gap-1">
                    Más
                  </button>
                </div>
              </div>
            </section>

            <section className="flex flex-col bg-[#1b1f23] rounded-xl p-5 gap-3">
              <h2 className="font-semibold text-xl">Acerca de</h2>
              <div className="text-base flex flex-col gap-2">
                <p>
                  👋 Hola, soy Andrés. Soy desarrollador web enfocado en
                  Frontend, con conocimientos de Backend.
                </p>
                <p>
                  Me apasiona crear interfaces modernas, visualmente atractivas
                  e interactivas que brinden experiencias de usuario de calidad.
                </p>
                <p>
                  💻 Trabajo con tecnologías como: React, Next.js, Redux,
                  JavaScript, TypeScript, Node.js, Express, HTML, CSS, Tailwind
                  CSS, Blender, React Three Fiber y GSAP.
                </p>
                <p>
                  Siempre busco aprender nuevas herramientas y perfeccionar mi
                  forma de desarrollar productos que generen impacto y valor.
                </p>
              </div>
            </section>
          </main>
          <aside className="w-1/4 bg-[#1b1f23] rounded-xl"></aside>
        </div>
      </div>
    </div>
  );
};
