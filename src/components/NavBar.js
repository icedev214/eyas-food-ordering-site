import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

import NavBarButton from "components/NavBarButton";
import SearchField from "components/SearchField";

import styled from "@emotion/styled";

const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" style={{ background: "#ea0713" }}>
        <Toolbar>
          <img src="/chef.jpg" alt="chef" />
          <Box sx={{ flexGrow: 1 }} />
          <SearchField />
          <Box sx={{ flexGrow: 1 }} />
          <NavBarButton
            icon={<AccessTimeIcon sx={{ width: 30, height: 30 }} />}
          >
            Open
          </NavBarButton>
          <NavBarButton icon={<ExitToAppIcon sx={{ width: 30, height: 30 }} />}>
            Sign In
          </NavBarButton>
          <NavBarButton icon={<PersonAddIcon sx={{ width: 30, height: 30 }} />}>
            Sign Up
          </NavBarButton>
        </Toolbar>
      </AppBar>
      <Offset />
    </Box>
  );
};

export default NavBar;
