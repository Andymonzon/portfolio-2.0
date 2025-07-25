import { useProgress } from "@react-three/drei";
import { useEffect, useState } from "react";

export const Loader = () => {
  // TODO: revisar si es necesario el boton de start y mejorar el diseño del loader
  const [showScene, setShowScene] = useState(false);

  const [dot, setDot] = useState(0);
  const { loaded, total } = useProgress();

  useEffect(() => {
    console.log(loaded, total);
    if (loaded === total) {
      setShowScene(true);
    }
  }, [loaded, total]);

  useEffect(() => {
    const interval = setInterval(() => {
      setDot((prev) => (prev + 1) % 4);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-screen h-screen flex items-center justify-center z-10 bg-black text-white flex-col transition-opacity duration-1000
${showScene ? "opacity-0 pointer-events-none" : "opacity-100"}
`}
    >
      <p className="text-5xl font-bold">Cargando{".".repeat(dot)}</p>
    </div>
  );
};
