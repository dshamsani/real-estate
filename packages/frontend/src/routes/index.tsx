import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/app/Header";
import { Partners } from "@/app/Partners";
import { Properties } from "@/app/Properties";
import { AboutUs } from "@/app/AboutUs";
import { Developers } from "@/app/Developers";
import { Join } from "@/app/Join";
import { Subscribe } from "@/app/Subscribe";

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
