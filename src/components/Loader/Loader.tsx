import { useProgress } from "@react-three/drei";
import { useEffect, useState } from "react";

export const Loader = () => {
  // TODO: revisar si es necesario el boton de start y mejorar el diseño del loader
  const [showScene, setShowScene] = useState(false);

  const [dot, setDot] = useState(0);
  const [loading, setLoading] = useState(true);
  const { loaded } = useProgress();

  useEffect(() => {
    console.log(loaded);
    if (loaded === 131) {
      setLoading(false);
    }
  }, [loaded]);

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
      {loading && (
        <p className="text-5xl font-bold">Cargando{".".repeat(dot)}</p>
      )}
      {!loading && loaded === 131 && (
        <button
          onClick={() => setShowScene(true)}
          className="text-white py-4 px-10 rounded-full cursor-pointer text-5xl"
          style={{
            background:
              "linear-gradient(359deg, rgba(0, 0, 0, 1) 0%, rgba(44, 33, 117, 1)  50%,rgba(29, 14, 89, 1) 100%)",
          }}
        >
          Start
        </button>
      )}
    </div>
  );
};
