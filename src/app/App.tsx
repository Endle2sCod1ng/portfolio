import { MainPage } from "@/pages/MainPage";
import { Header } from "@/widgets/Header";
import { Footer } from "@/widgets/Footer";
import { Route, Routes } from "react-router";
import { routesConfig } from "@/shared/config/routesCpnfig";
import styled from "styled-components";

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
            element={<MainPage />}
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
