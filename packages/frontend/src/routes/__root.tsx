import { createRootRoute, Outlet } from "@tanstack/react-router";
import { NavBar } from "../components/navbar/Navbar";
import { Footer } from "../pages/Footer";

export const Route = createRootRoute({
  component: () => (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  ),
});
