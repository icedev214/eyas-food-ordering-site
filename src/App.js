import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "pages/Home";

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
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
