import { MainPage } from "@/pages/MainPage";
import { ProjectsPage } from "@/pages/ProjectsPage";
import type { ReactNode } from "react";
interface RouteType {
  link: string;
  element: ReactNode;
}
export const routesConfig: RouteType[] = [
  { link: "/", element: <MainPage /> },
  { link: "/projects", element: <ProjectsPage /> },
  { link: "/contacts", element: <MainPage /> },
  // { link: "/projects/:id", element: <ProjectsPage /> },
];
