import { Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Lights } from "./Lights/Lights";
import { Room } from "./Room/Room";

export const Scene = () => {
  return (
    <Canvas>
      <mesh>
        <boxGeometry args={[2, 2, 2]} />
        <meshPhongMaterial />
        <meshStandardMaterial color={"red"} />
      </mesh>
      <Environment preset="city" />
      <Lights />
      <Room />
    </Canvas>
  );
};
