import type { FC } from "react";

import { BrowserRouter } from "react-router-dom";
import { AboutUs } from "./pages/AboutUs";
import { NavBar } from "./components/navbar/Navbar";
import { Developers } from "./pages/Developers";
import { Footer } from "./pages/Footer";
import { Join } from "./pages/Join";
import { Header } from "./pages/Header";
import { Partners } from "./pages/Partners";
import { Properties } from "./pages/Properties";
import { Subscribe } from "./pages/Subscribe";

export const App: FC = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Header />
      <Partners />
      <Properties />
      <AboutUs />
      <Developers />
      <Join />
      <Subscribe />
      <Footer />
    </BrowserRouter>
  );
};
