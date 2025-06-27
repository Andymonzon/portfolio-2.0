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
          "linear-gradient(359deg,rgba(89, 38, 201, 1) 0%, rgba(34, 14, 132, 1) 50%, rgba(8, 2, 52, 1) 100%)",
      }}
    >
      <Scene />
    </div>
  );
}

export default App;
