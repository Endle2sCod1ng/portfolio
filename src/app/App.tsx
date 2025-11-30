import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { Route, Routes } from "react-router";
import { routesConfig } from "@/shared/config/routesCpnfig";
import styled from "styled-components";
import { NotFoundPage } from "@/pages/NotFoundPage";

export function App() {
  return (
    <div className="app">
      <Header />
      <Main>
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
      </Main>
      <Footer />
    </div>
  );
}
const Main = styled.main`
  padding-top: var(--header-height);
`;
