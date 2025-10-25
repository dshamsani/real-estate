import { createRootRoute, Outlet } from "@tanstack/react-router";
import { NavBar } from "@/components/navbar/Navbar";
import { Footer } from "@/app/Footer";

export const Route = createRootRoute({
  component: () => (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  ),
});
