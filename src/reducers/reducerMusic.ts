import { onePiece, rain } from "../helpers/audioManager";

export type MusicState = {
  isPlaying: boolean;
};

export const initialMusicState: MusicState = { isPlaying: false };

export type MusicAction = { type: "PLAY" } | { type: "STOP" };

export const musicReducer = (
  state: MusicState,
  action: MusicAction
): MusicState => {
  switch (action.type) {
    case "PLAY":
      if (!state.isPlaying) {
        rain.volume = 0.03;
        rain.loop = true;
        rain.play();

        onePiece.volume = 0.03;
        onePiece.loop = true;
        onePiece.play();
        return { ...state, isPlaying: true };
      }
      return state;

    case "STOP":
      if (state.isPlaying) {
        onePiece.pause();
        onePiece.currentTime = 0;
        return { ...state, isPlaying: false };
      }
      return state;
  }
};
