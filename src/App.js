import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "pages/Home";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

const eyasTheme = createTheme({
  palette: {
    white: {
      main: "#ffffff",
    },
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
