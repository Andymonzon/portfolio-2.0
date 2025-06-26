import { ModelOutline } from "../ModelOutline/ModelOutline";
import { LoopOnce } from "three";

interface Props {
  nodes: any;
  materials: any;
  actions: any;
  setObjectSelected: (id: string) => void;
  objectSelected: string | null;
}

export const ChalkboardModel = ({
  nodes,
  materials,
  setObjectSelected,
  objectSelected,
  actions,
}: Props) => {
  const handleClick = () => {
    const action = actions["camaraPizarra2"];
    if (action) {
      action.reset();
      action.setLoop(LoopOnce, 1);
      action.clampWhenFinished = true;
      action.play();
    }
  };

  return (
    <group name="pizarra">
      <group
        name="a4847b1ba2d94c319197fa7e7f89b3e4objcleanermaterialmergergle"
        onPointerOver={() => setObjectSelected("contornoPizarra")}
        onPointerOut={() => setObjectSelected("")}
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
            objectSelected={objectSelected}
            currentId={"contornoPizarra"}
          />
        </mesh>
      </group>
    </group>
  );
};
