import { use } from "react";
import { ContextAction } from "../context/ContextAction";

export const useContextAction = () => {
  const context = use(ContextAction);

  if (!context) {
    throw new Error(
      "useContextAction must be used within a ContextActionProvider"
    );
  }

  return context;
};
