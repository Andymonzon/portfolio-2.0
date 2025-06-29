import { useContextAction } from "../../../../hooks/useContextAction";
import { ModelOutline } from "../ModelOutline/ModelOutline";
import { LoopOnce } from "three";
import { Html } from "@react-three/drei";
import { Taskbar } from "./Taskbar/Taskbar";
import { Desktop } from "./Desktop/Desktop";

interface Props {
  nodes: any;
  materials: any;
  actions: any;
  setObjectSelectedHover: (id: string) => void;
  objectSelectedHover: string | null;
}

export const ScreenModel = ({
  nodes,
  materials,
  setObjectSelectedHover,
  objectSelectedHover,
  actions,
}: Props) => {
  const { setCurrentModelSelected, currentModelSelected } = useContextAction();

  const handleClick = () => {
    setObjectSelectedHover("");
    if (currentModelSelected === "monitor") return;

    setCurrentModelSelected("monitor");
    const action = actions["camaraPantalla2"];
    if (action) {
      action.reset();
      action.setLoop(LoopOnce, 1);
      action.clampWhenFinished = true;
      action.play();
    }
  };

  const handlePointerOver = (id: string) => {
    if (currentModelSelected === "monitor") return;
    setObjectSelectedHover(id);
  };

  return (
    <group
      name="monitor"
      onClick={(e) => {
        e.stopPropagation();
        handleClick();
      }}
    >
      <group name="e2759b92a838405e8167c182f17d0afcfbx">
        <group
          name="RootNode001"
          onPointerOver={() => handlePointerOver("monitor")}
          onPointerOut={() => handlePointerOver("")}
        >
          <group name="PC_Monitor">
            <mesh
              name="PC_Monitor_Monitor_1_0"
              castShadow
              receiveShadow
              geometry={nodes.PC_Monitor_Monitor_1_0.geometry}
              material={materials.Monitor_1}
            >
              <ModelOutline
                objectSelected={objectSelectedHover}
                currentId={"monitor"}
              />
            </mesh>
            <mesh
              name="PC_Monitor_Monitor_screen_0"
              castShadow
              receiveShadow
              // geometry={nodes.PC_Monitor_Monitor_screen_0.geometry}
            >
              <Html
                center
                transform
                occlude
                rotation={[0, Math.PI / 0.2, 0]}
                position={[-7.919, 7.98, 13.423]}
                distanceFactor={1.5}
                pointerEvents="none"
              >
                <div className="w-[1080px] h-[620px] flex items-center justify-center flex-col text-white">
                  <Desktop />
                  <Taskbar />
                </div>
              </Html>
            </mesh>
          </group>
        </group>
      </group>
    </group>
  );
};
