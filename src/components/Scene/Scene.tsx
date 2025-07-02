import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Lights } from "./Lights/Lights";
import { Room } from "./Room/Room";
import { useRef } from "react";
import { SpotLight } from "three";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { Rain } from "./Rain/Rain";

export const Scene = () => {
  const lightLampRef = useRef<SpotLight | null>(null);

  return (
    <Canvas shadows>
      <Lights lightLampRef={lightLampRef} />
      <Rain />
      <Stars radius={450} />
      <Room lightLampRef={lightLampRef} />
      {/* <EffectComposer>
        <Bloom
          mipmapBlur
          blendFunction={BlendFunction}
          luminanceThreshold={0.1}
          luminanceSmoothing={0.1}
        />
      </EffectComposer> */}
    </Canvas>
  );
};
