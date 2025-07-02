import { Instance, Instances } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

const config = {
  WIDTH: 50,
  HEIGHT: 50,
  SPEED: 0.4,
  TOTAL: 2000,
  COLOR: 0x707070,
};
export const Rain = () => {
  return (
    <Instances
      limit={config.TOTAL}
      range={config.TOTAL}
      position={[-15, 0, 45]}
    >
      <boxGeometry args={[0.01, 1, 0.01]} />
      <meshBasicMaterial />
      {[...new Array(config.TOTAL)].map((_, idx) => (
        <RainDrop key={idx} />
      ))}
    </Instances>
  );
};

const RainDrop = () => {
  const ref = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (!ref.current) return;

    ref.current.position.y -= config.SPEED;

    if (ref.current.position.y < 0) {
      ref.current.position.x = getRandomInt(
        -config.WIDTH / 2,
        config.WIDTH / 2
      );
      ref.current.position.z = getRandomInt(
        -config.WIDTH / 2,
        config.WIDTH / 2
      );
      ref.current.position.y = config.HEIGHT;
    }
  });

  return (
    <Instance
      ref={ref}
      color={config.COLOR}
      position={[
        getRandomInt(-config.WIDTH / 2, config.WIDTH / 2),
        getRandomInt(0, config.HEIGHT),
        getRandomInt(-config.WIDTH / 2, config.WIDTH / 2),
      ]}
    />
  );
};

const getRandomInt = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
