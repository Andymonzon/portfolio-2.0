import { Browser } from "../Browser/Browser";

export const Desktop = () => {
  return (
    <div
      className="w-full flex flex-grow rounded-t-sm box-border"
      style={{
        backgroundImage: 'url("https://i.gifer.com/g32K.gif")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <Browser />
    </div>
  );
};
