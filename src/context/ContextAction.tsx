import {
  createContext,
  useReducer,
  useRef,
  type Dispatch,
  type Ref,
} from "react";
import {
  initialMusicState,
  musicReducer,
  type MusicAction,
} from "../reducers/reducerMusic";

type ContextActionType = {
  dispatchIsPlaying: Dispatch<MusicAction>;
  refGlobalMusic: React.RefObject<boolean>;
};

export const ContextAction = createContext<ContextActionType>({
  dispatchIsPlaying: () => {},
  refGlobalMusic: { current: false },
});

interface Props {
  children: React.ReactNode;
}

export const ContextActionProvider = ({ children }: Props) => {
  const [_, dispatchIsPlaying] = useReducer(musicReducer, initialMusicState);
  const refGlobalMusic = useRef<boolean>(false);

  return (
    <ContextAction value={{ dispatchIsPlaying, refGlobalMusic }}>
      {children}
    </ContextAction>
  );
};
