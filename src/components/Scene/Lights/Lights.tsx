import { Environment } from "@react-three/drei";
import { useEffect, type Ref } from "react";
import { SpotLight } from "three";
import gsap from "gsap";

interface Props {
  lightLampRef: Ref<SpotLight | null>;
}

export const Lights = ({ lightLampRef }: Props) => {
  // animacion de la lampara, REVISAR
  useEffect(() => {
    if (!lightLampRef || !("current" in lightLampRef) || !lightLampRef.current)
      return;

    const lamp = lightLampRef.current;

    const tl = gsap.timeline({ repeat: -1, repeatDelay: 5 });

    tl.to(lamp, { intensity: 0, duration: 0.08, ease: "power2.inOut" })
      .to(lamp, { intensity: 100, duration: 0.08, ease: "power2.inOut" })
      .to(lamp, { intensity: 0, duration: 0.08, ease: "power2.inOut" })
      .to(lamp, { intensity: 100, duration: 0.08, ease: "power2.inOut" });

    return () => {
      tl.kill();
    };
  }, [lightLampRef]);

  return (
    <>
      <Environment environmentIntensity={0.5} files={"/hdri/night.hdr"} />
      <spotLight
        name="lampara001"
        ref={lightLampRef}
        castShadow={true}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-radius={10}
        shadow-bias={-0.0001}
        intensity={100}
        angle={0.697}
        penumbra={0.15}
        decay={2}
        color="#ffb198"
        // position={[-16.279, 8.146, 11.705]}
        // rotation={[-0.577, 1.001, 1.167]}
      >
        <group position={[0, 0, -1]} />
      </spotLight>
      <pointLight
        name="Point"
        castShadow={true}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-radius={10}
        shadow-bias={-0.0001}
        intensity={50}
        decay={2}
        color="#a01c7f"
        position={[-21.784, 14.131, 2.125]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <pointLight
        name="Area"
        intensity={200}
        castShadow={true}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-radius={10}
        shadow-bias={-0.0001}
        decay={2}
        color="#9b0cff"
        position={[3.599, 12.471, 5.73]}
        rotation={[-2.484, -0.015, 0.114]}
      />
      {/* <spotLight
        name="Area001_1"
        intensity={0}
        angle={0.777}
        penumbra={0.15}
        decay={2}
        color="#ff4995"
        position={[-7.982, 18.072, 3.107]}
        rotation={[-1.872, 0.501, -0.904]}
      >
        <group position={[0, 0, -1]} />
      </spotLight> */}
      {/* <pointLight
        name="Area002_1"
        intensity={0.5}
        decay={2}
        position={[-12.302, 3.091, 14.727]}
        rotation={[-Math.PI / 2, 0, 0]}
      /> */}
      {/* <pointLight
        name="Point001_1"
        intensity={10000000}
        castShadow={true}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-radius={10}
        shadow-bias={-0.0001}
        decay={2}
        position={[-23.6, 24.315, 29.456]}
        rotation={[-Math.PI / 2, 0, 0]}
      /> */}
    </>
  );
};
