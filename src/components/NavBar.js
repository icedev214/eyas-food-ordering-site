import { AppBar, Toolbar, Button, Box } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

import SearchField from "components/SearchField";

import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        style={{ background: "#ea0713" }}
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar style={{ paddingLeft: 12, paddingRight: 12 }}>
          <Box
            sx={{
              backgroundImage: "url('/images/chef.jpg')",
              width: 57,
              height: 60,
              cursor: "pointer",
            }}
            onClick={() => {
              navigate("/");
            }}
          />
          <Box sx={{ flexGrow: 1 }} />
          <SearchField />
          <Box sx={{ flexGrow: 1 }} />
          <Button
            variant="standard"
            startIcon={<AccessTimeIcon sx={{ width: 30, height: 30 }} />}
            sx={{ color: "white", fontSize: 14, borderRadius: 0, height: 64 }}
            disableRipple
          >
            Open
          </Button>
          <Button
            variant="standard"
            startIcon={<ExitToAppIcon sx={{ width: 30, height: 30 }} />}
            sx={{ color: "white", fontSize: 14, borderRadius: 0, height: 64 }}
            disableRipple
            onClick={() => {
              navigate("/signin");
            }}
          >
            Sign In
          </Button>
          <Button
            variant="standard"
            startIcon={<PersonAddIcon sx={{ width: 30, height: 30 }} />}
            sx={{ color: "white", fontSize: 14, borderRadius: 0, height: 64 }}
            disableRipple
            onClick={() => {
              navigate("/signup");
            }}
          >
            Sign Up
          </Button>
        </Toolbar>
      </AppBar>
      <Offset />
    </Box>
  );
};

export default NavBar;
