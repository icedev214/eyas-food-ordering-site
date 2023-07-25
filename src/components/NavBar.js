import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

import NavBarButton from "components/NavBarButton";
import SearchField from "components/SearchField";

const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" style={{ background: "#fe1327" }}>
        <Toolbar>
          <img src="/chef.jpg" alt="chef" />
          <Box sx={{ flexGrow: 1 }} />
          <SearchField />
          <Box sx={{ flexGrow: 1 }} />
          <NavBarButton icon={<AccessTimeIcon />}>Open</NavBarButton>
          <NavBarButton icon={<ExitToAppIcon />}>Sign In</NavBarButton>
          <NavBarButton icon={<PersonAddIcon />}>Sign Up</NavBarButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
