import { Box } from "@mui/material";

import NavBar from "components/NavBar";
import Banner from "components/Banner";
import HomeContent from "components/HomeContent";
import Cart from "components/Cart";
import Footer from "components/Footer";
import CookieButton from "components/CookieButton";

const Home = () => {
  return (
    <>
      <NavBar />
      <Box sx={{ display: "flex", mb: 5 }}>
        <Box sx={{ flexGrow: 1 }}>
          <Banner />
          <HomeContent />
        </Box>
        <Cart />
      </Box>
      <Footer />
      <CookieButton />
    </>
  );
};

export default Home;
