import {
  createContext,
  useReducer,
  useRef,
  useState,
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
  currentModelSelected: string;
  setCurrentModelSelected: React.Dispatch<React.SetStateAction<string>>;
};

export const ContextAction = createContext<ContextActionType>({
  dispatchIsPlaying: () => {},
  refGlobalMusic: { current: false },
  currentModelSelected: "",
  setCurrentModelSelected: () => {},
});

interface Props {
  children: React.ReactNode;
}

export const ContextActionProvider = ({ children }: Props) => {
  const [currentModelSelected, setCurrentModelSelected] = useState("");
  const [_, dispatchIsPlaying] = useReducer(musicReducer, initialMusicState);
  const refGlobalMusic = useRef<boolean>(false);

  return (
    <ContextAction
      value={{
        dispatchIsPlaying,
        refGlobalMusic,
        currentModelSelected,
        setCurrentModelSelected,
      }}
    >
      {children}
    </ContextAction>
  );
};
