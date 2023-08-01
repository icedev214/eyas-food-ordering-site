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

import NavBar from "components/NavBar";
import Banner from "components/Banner";
import Cart from "components/Cart";
import Footer from "components/Footer";
import CookieButton from "components/CookieButton";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

import "@fontsource/lato";

const eyasTheme = createTheme({
  palette: {
    fore: {
      main: "#ffffff",
    },
    golden: {
      main: "#fce57f",
    },
    green: {
      main: "#4caf50",
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
  return (
    <ThemeProvider theme={eyasTheme}>
      <CssBaseline />
      <Router>
        <NavBar />
        <Box sx={{ display: "flex", mb: 5 }}>
          <Box sx={{ flexGrow: 1 }}>
            <Banner />
            <Routes>
              <Route index element={<Home />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/location" element={<Location />} />
            </Routes>
          </Box>
          <Cart />
        </Box>
        <Footer />
        <CookieButton />
      </Router>
    </ThemeProvider>
  );
}

export default App;
