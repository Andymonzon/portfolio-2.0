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
  const { setCurrentModelSelected, currentModelSelected } = useContextAction();
  const handleClick = () => {
    setObjectSelectedHover("");
    if (currentModelSelected === "contornoPizarra") return;

    setCurrentModelSelected("contornoPizarra");
    const action = actions["camaraPizarra2"];
    if (action) {
      action.reset();
      action.setLoop(LoopOnce, 1);
      action.clampWhenFinished = true;
      action.play();
    }
  };

  const handlePointerOver = (id: string) => {
    if (currentModelSelected === "contornoPizarra") return;
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
