import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { Route, Routes, useLocation } from "react-router";
import { routesConfig } from "@/shared/config/routesCpnfig";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { ScrollTop } from "@/features/ScrollTop/ScrollTop";
import { useEffect } from "react";

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
