import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { Route, Routes, useLocation } from "react-router";
import { ScrollTop } from "@/features/ScrollTop/ScrollTop";
import { useEffect } from "react";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { routesConfig } from "@/shared/config/routesCpnfig";

export function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <div className="app">
      <Header />
      <main>
        <Routes>
          {routesConfig.map((l) => (
            <Route
              key={l.link}
              path={l.link}
              element={l.element}
            />
          ))}
          <Route
            path={"*"}
            element={<NotFoundPage />}
          />
        </Routes>
      </main>
      <Footer />
      <ScrollTop />
    </div>
  );
}
