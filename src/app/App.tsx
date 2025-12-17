import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { Route, Routes, useLocation } from "react-router";
import { routesConfig } from "@/shared/config/routesCpnfig";
import styled from "styled-components";
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
      {/* <Main>
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
      </Main> */}
      <Footer />
      <ScrollTop />
    </div>
  );
}

const Main = styled.main`
  padding-top: var(--header-height);
`;
