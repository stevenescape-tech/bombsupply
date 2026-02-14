import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ScreenFill } from "./screens/ScreenFill";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <ScreenFill />
  </StrictMode>,
);
