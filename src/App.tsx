import { BtnBack } from "./components/BtnBack/BtnBack";
import { Scene } from "./components/Scene/Scene";
import { useContextAction } from "./hooks/useContextAction";

function App() {
  const { dispatchIsPlaying, refGlobalMusic } = useContextAction();

  return (
    <div
      onClick={(e) => {
        if (refGlobalMusic.current === null) {
          refGlobalMusic.current = false;
          e.stopPropagation();
          dispatchIsPlaying({ type: "PLAY" });
          return;
        }
      }}
      className="w-screen h-screen"
      style={{
        background:
          "linear-gradient(359deg,rgba(44, 33, 117, 1) 0%, rgba(29, 14, 89, 1) 50%, rgba(0, 0, 0, 1) 100%)",
      }}
    >
      <BtnBack />
      <Scene />
    </div>
  );
}

export default App;
