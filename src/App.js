import { Box } from "@mui/material";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Home from "pages/Home";
import SignIn from "pages/SignIn";
import SignUp from "pages/SignUp";
import Location from "pages/Location";
import CookiePolicy from "pages/CookiePolicy";
import PrivacyPolicy from "pages/PrivacyPolicy";
import TermsOfUse from "pages/TermsOfUse";
import CheckoutIntro from "pages/CheckoutIntro";
import CheckoutEdit from "pages/CheckoutEdit";
import ReviewOrder from "pages/ReviewOrder";
import Payment from "pages/Payment";
import CheckoutComplete from "pages/CheckoutComplete";

import NavBar from "components/NavBar";
import Banner from "components/Banner";
import Cart from "components/Cart";
import Footer from "components/Footer";
import CookieButton from "components/CookieButton";
import CookieSetting from "components/CookieSetting";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

import { useSelector } from "react-redux";

import { useState } from "react";

import "@fontsource/lato";

const eyasTheme = createTheme({
  palette: {
    fore: {
      main: "#ffffff",
    },
    golden: {
      main: "#fce57f",
      light: "#ffecb3",
    },
    lightgold: {
      main: "#ffecb3",
    },
    forest: {
      main: "#4fbe62",
    },
    danger: {
      main: "#ea0713",
      dark: "#d50409",
    },
  },
  typography: {
    fontFamily: "lato",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
  },
});

function App() {
  const { page } = useSelector((state) => state.navigation);
  const [showCookie, setShowCookie] = useState(false);

  return (
    <ThemeProvider theme={eyasTheme}>
      <CssBaseline />
      <Router>
        <NavBar />
        <Box sx={{ display: "flex" }}>
          <Box sx={{ flexGrow: 1 }}>
            <Banner />
            <Routes>
              <Route index element={<Home />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/location" element={<Location />} />
              <Route path="/cookie-policy" element={<CookiePolicy />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-use" element={<TermsOfUse />} />
              <Route path="/checkout-intro" element={<CheckoutIntro />} />
              <Route path="/checkout-edit" element={<CheckoutEdit />} />
              <Route path="/review-order" element={<ReviewOrder />} />
              <Route path="/payment" element={<Payment />} />
              <Route path="/checkout-complete" element={<CheckoutComplete />} />
            </Routes>
          </Box>
          <Routes>
            <Route index element={<Cart />} />
          </Routes>
        </Box>
        <Footer />
        {showCookie ? (
          <CookieSetting
            onClose={() => {
              setShowCookie(false);
            }}
          />
        ) : (
          <CookieButton
            onClick={() => {
              setShowCookie(true);
            }}
          />
        )}
      </Router>
    </ThemeProvider>
  );
}

export default App;
