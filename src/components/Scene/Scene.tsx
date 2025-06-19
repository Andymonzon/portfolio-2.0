import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Lights } from "./Lights/Lights";
import { Room } from "./Room/Room";
import { useRef } from "react";
import { SpotLight } from "three";

export const Scene = () => {
  const lightLampRef = useRef<SpotLight | null>(null);

  return (
    <Canvas shadows>
      <Lights lightLampRef={lightLampRef} />

      <Stars radius={450} />
      <Room lightLampRef={lightLampRef} />
    </Canvas>
  );
};
