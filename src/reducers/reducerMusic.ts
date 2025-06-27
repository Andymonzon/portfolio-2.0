import { tracks } from "../helpers/audioManager";

export type MusicState = {
  isPlaying: boolean;
  currentTrack: keyof typeof tracks | null;
};

export const initialMusicState: MusicState = {
  isPlaying: false,
  currentTrack: null,
};

export type MusicAction =
  | { type: "PLAY" }
  | { type: "STOP" }
  | { type: "NEXT" }
  | { type: "BACK" }
  | { type: "SET_TRACK"; track: keyof typeof tracks };

const trackOrder: (keyof typeof tracks)[] = ["onePiece", "unravel", "jjk"];

export const musicReducer = (
  state: MusicState,
  action: MusicAction
): MusicState => {
  switch (action.type) {
    case "PLAY": {
      if (state.isPlaying) return state;

      const trackKey = state.currentTrack ?? "onePiece";
      const track = tracks[trackKey];

      tracks.rain.play().catch(console.error);

      track.play().catch(console.error);

      return {
        isPlaying: true,
        currentTrack: trackKey,
      };
    }

    case "STOP": {
      if (!state.isPlaying) return state;

      if (state.currentTrack) {
        const track = tracks[state.currentTrack];
        track.pause();
      }

      return {
        ...state,
        isPlaying: false,
      };
    }

    case "NEXT": {
      let nextTrackKey: keyof typeof tracks;

      if (!state.currentTrack) {
        nextTrackKey = trackOrder[0];
      } else {
        const currentIdx = trackOrder.indexOf(state.currentTrack);
        nextTrackKey = trackOrder[(currentIdx + 1) % trackOrder.length];
      }

      if (state.currentTrack) {
        const current = tracks[state.currentTrack];
        current.pause();
        current.currentTime = 0;
      }

      tracks[nextTrackKey].play().catch(console.error);

      return {
        isPlaying: true,
        currentTrack: nextTrackKey,
      };
    }

    case "BACK": {
      let backTrackKey: keyof typeof tracks;

      if (!state.currentTrack) {
        backTrackKey = trackOrder[trackOrder.length - 1];
      } else {
        const currentIdx = trackOrder.indexOf(state.currentTrack);
        backTrackKey =
          trackOrder[(currentIdx - 1 + trackOrder.length) % trackOrder.length];
      }

      if (state.currentTrack) {
        const current = tracks[state.currentTrack];
        current.pause();
        current.currentTime = 0;
      }

      tracks[backTrackKey].play().catch(console.error);

      return {
        isPlaying: true,
        currentTrack: backTrackKey,
      };
    }

    case "SET_TRACK":
      return {
        ...state,
        currentTrack: action.track,
      };

    default:
      return state;
  }
};
