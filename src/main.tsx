import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { App } from "./app/App";

import "./app/styles/index.css";
import { ThemeProvider } from "./app/providers/ThemeProvider";
import "@/shared/config/i18n";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename="/portfolio">
      <ThemeProvider>
        <Suspense fallback="">
          <App />
        </Suspense>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
// Rm consoler.log() in projects
// Rm outline body index.css
// NOt workong i18n in gh-pages
