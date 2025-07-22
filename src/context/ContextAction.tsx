import {
  createContext,
  useReducer,
  useRef,
  useState,
  type Dispatch,
} from "react";
import {
  initialMusicState,
  musicReducer,
  type MusicAction,
} from "../reducers/reducerMusic";

type ContextActionType = {
  dispatchIsPlaying: Dispatch<MusicAction>;
  refGlobalMusic: React.RefObject<boolean | null>;
  currentModelSelected: string;
  setCurrentModelSelected: React.Dispatch<React.SetStateAction<string>>;
  refAction: React.RefObject<any | null>;
  isAnimationEnd: boolean;
  setIsAnimationEnd: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ContextAction = createContext<ContextActionType>({
  dispatchIsPlaying: () => {},
  refGlobalMusic: { current: null },
  currentModelSelected: "",
  setCurrentModelSelected: () => {},
  refAction: { current: null },
  isAnimationEnd: false,
  setIsAnimationEnd: () => {},
});

interface Props {
  children: React.ReactNode;
}

export const ContextActionProvider = ({ children }: Props) => {
  const [currentModelSelected, setCurrentModelSelected] = useState("");
  const [_, dispatchIsPlaying] = useReducer(musicReducer, initialMusicState);
  const [isAnimationEnd, setIsAnimationEnd] = useState(false);
  const refGlobalMusic = useRef<boolean | null>(null);
  const refAction = useRef<any | null>(null);

  return (
    <ContextAction
      value={{
        dispatchIsPlaying,
        refGlobalMusic,
        currentModelSelected,
        setCurrentModelSelected,
        refAction,
        setIsAnimationEnd,
        isAnimationEnd,
      }}
    >
      {children}
    </ContextAction>
  );
};
