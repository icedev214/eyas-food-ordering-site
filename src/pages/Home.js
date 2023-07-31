import { Box } from "@mui/material";

import NavBar from "components/NavBar";
import Banner from "components/Banner";
import HomeContent from "components/HomeContent";
import Cart from "components/Cart";

const Home = () => {
  return (
    <>
      <NavBar />
      <Box sx={{ display: "flex" }}>
        <Box sx={{ flexGrow: 1 }}>
          <Banner />
          <HomeContent />
        </Box>
        <Box sx={{ width: 350 }} />
      </Box>
      <Cart />
    </>
  );
};

export default Home;
