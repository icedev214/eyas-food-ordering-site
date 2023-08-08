import { Box } from "@mui/material";

import NavBar from "components/NavBar";
import Banner from "components/Banner";
import Cart from "components/Cart";
import Footer from "components/Footer";

import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <>
      <NavBar />
      <Box sx={{ display: "flex" }}>
        <Box sx={{ flexGrow: 1 }}>
          <Banner />
          <Outlet />
        </Box>
        <Cart />
      </Box>
      <Footer />
    </>
  );
};

export default HomeLayout;
