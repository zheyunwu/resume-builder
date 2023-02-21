
import { Outlet } from "react-router-dom";
import ResponsiveAppBar from "components/Navbar"

export default function AppLayout() {
  return (
    <>
      <ResponsiveAppBar />
      <Outlet />
    </>
  );
}
