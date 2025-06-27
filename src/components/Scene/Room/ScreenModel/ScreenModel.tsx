import { useContextAction } from "../../../../hooks/useContextAction";
import { ModelOutline } from "../ModelOutline/ModelOutline";
import { LoopOnce } from "three";
import { Html } from "@react-three/drei";

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
      position={[-7.919, 6.153, 13.282]}
      rotation={[-Math.PI / 2, 0, -Math.PI]}
      scale={6.295}
      onClick={(e) => {
        e.stopPropagation();
        handleClick();
      }}
    >
      <group
        name="e2759b92a838405e8167c182f17d0afcfbx"
        rotation={[-Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      >
        <group
          name="RootNode001"
          rotation={[Math.PI, 0, Math.PI]}
          onPointerOver={() => handlePointerOver("monitor")}
          onPointerOut={() => handlePointerOver("")}
        >
          <group
            name="PC_Monitor"
            rotation={[-Math.PI / 2, 0, -Math.PI]}
            scale={100}
          >
            <mesh
              name="PC_Monitor_Monitor_1_0"
              castShadow
              receiveShadow
              geometry={nodes.PC_Monitor_Monitor_1_0.geometry}
              material={materials.Monitor_1}
              rotation={[0, 0, -Math.PI]}
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
              geometry={nodes.PC_Monitor_Monitor_screen_0.geometry}
              material={materials.Monitor_screen}
              rotation={[0, 0, -Math.PI]}
            >
              <Html position={[0, 0, 0]}>
                <div className="bg-red-500">hola</div>
              </Html>
            </mesh>
          </group>
        </group>
      </group>
    </group>
  );
};
