import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ContextActionProvider } from "./context/ContextAction.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ContextActionProvider>
      <App />
    </ContextActionProvider>
  </StrictMode>
);
