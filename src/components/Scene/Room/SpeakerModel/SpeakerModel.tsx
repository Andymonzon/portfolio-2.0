import { useState } from "react";
import { useContextAction } from "../../../../hooks/useContextAction";
import { ModelOutline } from "../ModelOutline/ModelOutline";
import { LoopOnce } from "three";
import { useCursor } from "@react-three/drei";

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
  const [hovered, setHovered] = useState(false);
  useCursor(hovered);

  const {
    setCurrentModelSelected,
    currentModelSelected,
    refGlobalMusic,
    dispatchIsPlaying,
    setIsAnimationEnd,
    refAction,
  } = useContextAction();

  const handleBack = () => {
    const actionCamara = actions["camaraRadio"];
    const actionRadio = actions["animacionParlante"];
    if (!actionCamara || !actionRadio) return;

    refAction.current = null;
    setIsAnimationEnd(false);

    actionCamara.paused = false;
    actionCamara.timeScale = -1;
    actionCamara.time = actionCamara.getClip().duration;
    actionCamara.play();

    const onFinishedCamara = (e: any) => {
      if (e.action === actionCamara) {
        actionCamara.stop();
        actionCamara.reset();
        actionCamara.timeScale = 1;
        actionCamara
          .getMixer()
          .removeEventListener("finished", onFinishedCamara);
        setCurrentModelSelected("");
      }
    };

    actionRadio.paused = false;
    actionRadio.timeScale = -1;
    actionRadio.time = actionRadio.getClip().duration;
    actionRadio.play();

    const onFinishedParlante = (e: any) => {
      if (e.action === actionRadio) {
        actionRadio.stop();
        actionRadio.reset();
        actionRadio.timeScale = 1;
        actionRadio
          .getMixer()
          .removeEventListener("finished", onFinishedParlante);
      }
    };

    actionCamara.getMixer().addEventListener("finished", onFinishedCamara);
    actionRadio.getMixer().addEventListener("finished", onFinishedParlante);
  };

  const handleClick = () => {
    setObjectSelectedHover("");
    if (currentModelSelected === "parlante001" || currentModelSelected !== "")
      return;

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
          setIsAnimationEnd(true);
          refAction.current = handleBack;

          actions["camaraRadio"]
            ?.getMixer()
            .removeEventListener("finished", onFinished);
        }
      };

      actionCamara.getMixer().addEventListener("finished", onFinished);
    }
  };

  const handlePointerOver = (id: string) => {
    if (currentModelSelected) return;
    setObjectSelectedHover(id);
  };

  return (
    <group name="parlante">
      <group name="29b256d4dadd4d4f9ba3b983510f3b85objcleanermaterialmergergle">
        <group
          name="parlante001"
          castShadow
          receiveShadow
          // geometry={nodes.parlante001.geometry}
          // material={materials.None}
          position={[5.552, 9.109, 13.176]}
          rotation={[-2.732, 0, -Math.PI]}
          onClick={(e) => {
            e.stopPropagation();
            handleClick();
          }}
          onPointerOver={() => {
            handlePointerOver("parlante001");
            setHovered(true);
          }}
          onPointerOut={() => {
            handlePointerOver("");
            setHovered(false);
          }}
        >
          <mesh
            name="Object_0036"
            castShadow
            receiveShadow
            geometry={nodes.Object_0036.geometry}
            material={materials.None}
          >
            <ModelOutline
              objectSelected={objectSelectedHover}
              currentId={"parlante001"}
            />
          </mesh>
          <mesh
            name="Object_0036_1"
            castShadow
            receiveShadow
            geometry={nodes.Object_0036_1.geometry}
            material={materials["Material.012"]}
          />

          <group
            name="btnAtras"
            onPointerOver={() => setObjectSelectedHover("btnAtras")}
            onPointerOut={() => setObjectSelectedHover("")}
            onClick={() => {
              refGlobalMusic.current = true;
              dispatchIsPlaying({ type: "BACK" });
            }}
          >
            <mesh
              name="Object_0039"
              castShadow
              receiveShadow
              geometry={nodes.Object_0039.geometry}
              material={materials.None}
            >
              {currentModelSelected === "parlante001" && (
                <ModelOutline
                  objectSelected={objectSelectedHover}
                  currentId={"btnAtras"}
                />
              )}
            </mesh>
            <mesh
              name="Object_0039_1"
              castShadow
              receiveShadow
              geometry={nodes.Object_0039_1.geometry}
              material={materials["Material.045"]}
            ></mesh>
          </group>
          <group
            name="btnPausar"
            onPointerOver={() => setObjectSelectedHover("btnPausar")}
            onPointerOut={() => setObjectSelectedHover("")}
            onClick={(e) => {
              e.stopPropagation();
              refGlobalMusic.current = true;
              dispatchIsPlaying({ type: "STOP" });
            }}
          >
            <mesh
              name="Object_0037"
              castShadow
              receiveShadow
              geometry={nodes.Object_0037.geometry}
              material={materials.None}
            >
              {currentModelSelected === "parlante001" && (
                <ModelOutline
                  objectSelected={objectSelectedHover}
                  currentId={"btnPausar"}
                />
              )}
            </mesh>
            <mesh
              name="Object_0037_1"
              castShadow
              receiveShadow
              geometry={nodes.Object_0037_1.geometry}
              material={materials["Material.045"]}
            ></mesh>
          </group>
          <group
            name="btnReproducir"
            onPointerOver={() => setObjectSelectedHover("btnReproducir")}
            onPointerOut={() => setObjectSelectedHover("")}
            onClick={(e) => {
              e.stopPropagation();
              refGlobalMusic.current = true;
              dispatchIsPlaying({ type: "PLAY" });
            }}
          >
            <mesh
              name="Object_0040"
              castShadow
              receiveShadow
              geometry={nodes.Object_0040.geometry}
              material={materials.None}
            >
              {currentModelSelected === "parlante001" && (
                <ModelOutline
                  objectSelected={objectSelectedHover}
                  currentId={"btnReproducir"}
                />
              )}
            </mesh>
            <mesh
              name="Object_0040_1"
              castShadow
              receiveShadow
              geometry={nodes.Object_0040_1.geometry}
              material={materials["Material.045"]}
            ></mesh>
          </group>
          <group
            name="btnSig"
            onPointerOver={() => setObjectSelectedHover("btnSig")}
            onPointerOut={() => setObjectSelectedHover("")}
            onClick={() => {
              console.log("musica siguiente");
              refGlobalMusic.current = true;
              dispatchIsPlaying({ type: "NEXT" });
            }}
          >
            <mesh
              name="Object_0038"
              castShadow
              receiveShadow
              geometry={nodes.Object_0038.geometry}
              material={materials.None}
            >
              {currentModelSelected === "parlante001" && (
                <ModelOutline
                  objectSelected={objectSelectedHover}
                  currentId={"btnSig"}
                />
              )}
            </mesh>
            <mesh
              name="Object_0038_1"
              castShadow
              receiveShadow
              geometry={nodes.Object_0038_1.geometry}
              material={materials["Material.045"]}
            ></mesh>
          </group>
        </group>
      </group>
    </group>
  );
};
