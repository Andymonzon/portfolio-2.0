import { PerspectiveCamera } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { PerspectiveCamera as PerspectiveCameraType } from "three";

export const Camera = () => {
  const cameraRef = useRef<PerspectiveCameraType | null>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const initialRotation = useRef({ x: 3.02, y: 0.921, z: -3.04 });

  // useEffect(() => {
  //   const handleMouseMove = (event: MouseEvent) => {
  //     const x = (event.clientX / window.innerWidth) * 2 - 1;
  //     const y = -(event.clientY / window.innerHeight) * 2 + 1;
  //     mouse.current = { x, y };
  //   };

  //   window.addEventListener("mousemove", handleMouseMove);
  //   return () => window.removeEventListener("mousemove", handleMouseMove);
  // }, []);

  // useFrame(() => {
  //   if (!cameraRef.current) return;

  //   // puedo cambiar el valor de maxOffset para aumentar o disminuir la sensibilidad
  //   const maxOffset = 0.03;

  //   // const targetX = initialRotation.current.x - mouse.current.y * maxOffset;
  //   const targetY = initialRotation.current.y + mouse.current.x * maxOffset;

  //   // cameraRef.current.rotation.x +=
  //   //   (targetX - cameraRef.current.rotation.x) * 0.05;
  //   cameraRef.current.rotation.y +=
  //     (targetY - cameraRef.current.rotation.y) * 0.05;
  // });

  return (
    <PerspectiveCamera
      name="Camera"
      makeDefault
      ref={cameraRef}
      far={1000}
      near={0.1}
      fov={32.269}
      position={[17.664, 3.382, -14.074]}
      rotation={[3.023, 0.921, -3.043]}
    />
  );
};
