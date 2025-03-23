import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Import Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";

// Import global styles
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
