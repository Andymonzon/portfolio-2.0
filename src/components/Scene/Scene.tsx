import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Lights } from "./Lights/Lights";
import { Room } from "./Room/Room";
import { Suspense, useRef } from "react";
import { SpotLight } from "three";
import {
  Bloom,
  BrightnessContrast,
  EffectComposer,
} from "@react-three/postprocessing";
import { Rain } from "./Rain/Rain";
import { Loader } from "../Loader/Loader";

export const Scene = () => {
  const lightLampRef = useRef<SpotLight | null>(null);

  return (
    <>
      <Loader />
      <Canvas shadows>
        <Suspense fallback={null}>
          <Lights lightLampRef={lightLampRef} />
          <Rain />
          <Stars radius={450} />
          <Room lightLampRef={lightLampRef} />
          <EffectComposer>
            <Bloom
              mipmapBlur
              luminanceThreshold={0.1}
              luminanceSmoothing={0.1}
            />
            <BrightnessContrast contrast={0.2} />
          </EffectComposer>
        </Suspense>
      </Canvas>
    </>
  );
};
