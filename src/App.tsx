import { useState } from "react";
import { Scene } from "./components/Scene/Scene";

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const handlePlay = () => {
    if (isPlaying) return;
    setIsPlaying(true);
    const rain = new Audio("/audio/rain.mp3");
    const onePiece = new Audio("/audio/onepieceLofi.mp3");
    rain.volume = 0.03;
    rain.loop = true;
    rain.play();

    onePiece.volume = 0.03;
    onePiece.loop = true;
    onePiece.play();
  };

  return (
    <div
      onClick={handlePlay}
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
