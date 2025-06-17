import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Lights } from "./Lights/Lights";
import { Room } from "./Room/Room";
import { useRef } from "react";
import { SpotLight } from "three";

export const Scene = () => {
  const lightLampRef = useRef<SpotLight | null>(null);

  return (
    <Canvas shadows>
      <PerspectiveCamera
        name="Camera"
        makeDefault
        far={1000}
        near={0.1}
        fov={32.269}
        position={[17.664, 3.382, -14.074]}
        rotation={[3.02, 0.921, -3.04]}
      />

      <Lights lightLampRef={lightLampRef} />

      <Room lightLampRef={lightLampRef} />
    </Canvas>
  );
};
