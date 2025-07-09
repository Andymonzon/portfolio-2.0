import { useContextAction } from "../../../../hooks/useContextAction";
import { ModelOutline } from "../ModelOutline/ModelOutline";
import { LoopOnce } from "three";
import { ScreenHtml } from "./ScreenHtml/ScreenHtml";

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
  const {
    setCurrentModelSelected,
    currentModelSelected,
    refAction,
    setIsAnimationEnd,
  } = useContextAction();

  const handleClick = () => {
    setObjectSelectedHover("");
    if (currentModelSelected === "monitor") return;

    setCurrentModelSelected("monitor");
    const action = actions["camaraPantalla2"];
    if (action) {
      action.timeScale = 1;
      action.reset();
      action.setLoop(LoopOnce, 1);
      action.clampWhenFinished = true;
      action.play();

      const onFinished = (e: any) => {
        if (e.action === action) {
          setIsAnimationEnd(true);
          refAction.current = action;
          action.getMixer().removeEventListener("finished", onFinished);
        }
      };

      action.getMixer().addEventListener("finished", onFinished);
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
              <ScreenHtml />
            </mesh>
          </group>
        </group>
      </group>
    </group>
  );
};
