import { Banner } from "@/sections/Banner";
import { Projects } from "@/sections/Projects";
import { Stack } from "@/sections/Stack";
import { Contacts } from "@/sections/Contacts";
import { Reviews } from "@/sections/Reviews";

export const MainPage = () => {
  return (
    <>
      <Banner />
      <Stack />
      <Projects />
      <Reviews />
      <Contacts />
    </>
  );
};
