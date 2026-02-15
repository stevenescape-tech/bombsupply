import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Analytics } from "@vercel/analytics/react";
import { ScreenFill } from "./screens/ScreenFill";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <ScreenFill />
    <Analytics />
  </StrictMode>,
);
