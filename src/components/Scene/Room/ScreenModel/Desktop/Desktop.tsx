import { Browser } from "../Browser/Browser";

export const Desktop = () => {
  return (
    <div
      className="w-full h-full flex rounded-t-sm items-center justify-center bg-amber-500"
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
