import { Box } from "@mui/material";

import NavBar from "components/NavBar";
import Banner from "components/Banner";
import Footer from "components/Footer";

import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <NavBar />
      <Banner />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
