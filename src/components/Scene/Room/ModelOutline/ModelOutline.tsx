import { Outlines } from "@react-three/drei";

interface Props {
  objectSelected: string | null;
  currentId: string | null;
}

export const ModelOutline = ({ objectSelected, currentId }: Props) => {
  return (
    <>
      {objectSelected === currentId ? (
        <Outlines thickness={1} color={"#fff"} />
      ) : null}
    </>
  );
};
