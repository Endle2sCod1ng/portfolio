import { MainPage } from "@/pages/MainPage";
import { Header } from "@/widgets/Header";
import { Footer } from "@/widgets/Footer";
import { Route, Routes } from "react-router";
import { routesConfig } from "@/shared/config/routesCpnfig";

export function App() {
  return (
    <div className="app portfolio_theme_dark">
      <Header />

      <Routes>
        {routesConfig.map((l) => (
          <Route
            path={l === "Home" ? "/" : `/${l.toLowerCase()}`}
            element={<MainPage />}
          />
        ))}
      </Routes>
      <Footer />
    </div>
  );
}
