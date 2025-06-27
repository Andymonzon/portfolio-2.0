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

export const SpeakerModel = ({
  nodes,
  materials,
  setObjectSelectedHover,
  objectSelectedHover,
  actions,
}: Props) => {
  const { setCurrentModelSelected, currentModelSelected } = useContextAction();

  const handleClick = () => {
    setObjectSelectedHover("");
    if (currentModelSelected === "parlante001") return;

    const actionCamara = actions["camaraRadio"];
    const actionRadio = actions["animacionParlante"];
    setCurrentModelSelected("parlante001");
    if (actionCamara) {
      actionCamara.reset();
      actionCamara.setLoop(LoopOnce, 1);
      actionCamara.clampWhenFinished = true;
      actionCamara.play();

      const onFinished = (e: any) => {
        if (e.action === actionCamara && actionRadio) {
          console.log("Camara terminó. Activando parlante.");
          actionRadio.reset();
          actionRadio.setLoop(LoopOnce, 1);
          actionRadio.clampWhenFinished = true;
          actionRadio.play();

          actions["camaraRadio"]
            ?.getMixer()
            .removeEventListener("finished", onFinished);
        }
      };

      actionCamara.getMixer().addEventListener("finished", onFinished);
    }
  };

  const handlePointerOver = (id: string) => {
    if (currentModelSelected === "parlante001") return;
    setObjectSelectedHover(id);
  };

  return (
    <group name="parlante">
      <group name="29b256d4dadd4d4f9ba3b983510f3b85objcleanermaterialmergergle">
        <mesh
          name="parlante001"
          castShadow
          receiveShadow
          geometry={nodes.parlante001.geometry}
          material={materials.None}
          position={[5.552, 9.109, 13.176]}
          rotation={[-2.732, 0, -Math.PI]}
          onClick={(e) => {
            e.stopPropagation();
            handleClick();
          }}
          onPointerOver={() => handlePointerOver("parlante001")}
          onPointerOut={() => handlePointerOver("")}
        >
          <ModelOutline
            objectSelected={objectSelectedHover}
            currentId={"parlante001"}
          />
          <group name="btnAtras">
            <mesh
              name="Object_0039"
              castShadow
              receiveShadow
              geometry={nodes.Object_0039.geometry}
              material={materials.None}
            />
            <mesh
              name="Object_0039_1"
              castShadow
              receiveShadow
              geometry={nodes.Object_0039_1.geometry}
              material={materials["Material.045"]}
            />
          </group>
          <group name="btnPausar">
            <mesh
              name="Object_0037"
              castShadow
              receiveShadow
              geometry={nodes.Object_0037.geometry}
              material={materials.None}
            />
            <mesh
              name="Object_0037_1"
              castShadow
              receiveShadow
              geometry={nodes.Object_0037_1.geometry}
              material={materials["Material.045"]}
            />
          </group>
          <group name="btnReproducir">
            <mesh
              name="Object_0040"
              castShadow
              receiveShadow
              geometry={nodes.Object_0040.geometry}
              material={materials.None}
            />
            <mesh
              name="Object_0040_1"
              castShadow
              receiveShadow
              geometry={nodes.Object_0040_1.geometry}
              material={materials["Material.045"]}
            />
          </group>
          <group name="btnSig">
            <mesh
              name="Object_0038"
              castShadow
              receiveShadow
              geometry={nodes.Object_0038.geometry}
              material={materials.None}
            />
            <mesh
              name="Object_0038_1"
              castShadow
              receiveShadow
              geometry={nodes.Object_0038_1.geometry}
              material={materials["Material.045"]}
            />
          </group>
        </mesh>
      </group>
    </group>
  );
};
