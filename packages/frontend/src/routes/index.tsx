import { createFileRoute } from "@tanstack/react-router";
import { Header } from "../pages/Header";
import { Partners } from "../pages/Partners";
import { Properties } from "../pages/Properties";
import { AboutUs } from "../pages/AboutUs";
import { Developers } from "../pages/Developers";
import { Join } from "../pages/Join";
import { Subscribe } from "../pages/Subscribe";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <Header />
      <Partners />
      <Properties />
      <AboutUs />
      <Developers />
      <Join />
      <Subscribe />
    </>
  );
}
