import { useContextAction } from "../../../../hooks/useContextAction";
import { ModelOutline } from "../ModelOutline/ModelOutline";
import { LoopOnce } from "three";

interface Props {
  nodes: any;
  materials: any;
  actions: any;
  setObjectSelectedHover: (id: string) => void;
  objectSelectedHover: string | null;
}

export const ChalkboardModel = ({
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

  const handleBack = () => {
    const action = actions["camaraPizarra2"];
    if (!action) return;

    refAction.current = null;

    setIsAnimationEnd(false);

    action.paused = false;
    action.timeScale = -1;

    action.time = action.getClip().duration;

    action.play();

    const onFinished = (e: any) => {
      if (e.action === action) {
        action.stop();
        action.reset();
        action.timeScale = 1;
        setCurrentModelSelected("");
        action.getMixer().removeEventListener("finished", onFinished);
      }
    };

    action.getMixer().addEventListener("finished", onFinished);
  };

  const handleClick = () => {
    setObjectSelectedHover("");
    if (
      currentModelSelected === "contornoPizarra" ||
      currentModelSelected !== ""
    )
      return;

    setCurrentModelSelected("contornoPizarra");
    const action = actions["camaraPizarra2"];
    if (action) {
      action.reset();
      action.setLoop(LoopOnce, 1);
      action.clampWhenFinished = true;
      action.play();
    }

    const onFinished = (e: any) => {
      if (e.action === action) {
        setIsAnimationEnd(true);
        refAction.current = handleBack;
        action.getMixer().removeEventListener("finished", onFinished);
      }
    };

    action.getMixer().addEventListener("finished", onFinished);
  };

  const handlePointerOver = (id: string) => {
    if (currentModelSelected) return;
    setObjectSelectedHover(id);
  };

  return (
    <group name="pizarra">
      <group
        name="a4847b1ba2d94c319197fa7e7f89b3e4objcleanermaterialmergergle"
        onPointerOver={() => handlePointerOver("contornoPizarra")}
        onPointerOut={() => handlePointerOver("")}
        onClick={(e) => {
          e.stopPropagation();
          handleClick();
        }}
      >
        <mesh
          name="Object_2012"
          castShadow
          receiveShadow
          geometry={nodes.Object_2012.geometry}
          material={materials["Material.020"]}
        />
        <mesh
          name="Object_3005"
          castShadow
          receiveShadow
          geometry={nodes.Object_3005.geometry}
          material={materials["Material.021"]}
        >
          <ModelOutline
            objectSelected={objectSelectedHover}
            currentId={"contornoPizarra"}
          />
        </mesh>
      </group>
    </group>
  );
};
