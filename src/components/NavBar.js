import { AppBar, Toolbar, Button, Box, useMediaQuery } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

import SearchField from "components/SearchField";

import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

const NavBar = () => {
  const navigate = useNavigate();

  const { page } = useSelector((state) => state.navigation);

  const down_lg_matches = useMediaQuery((theme) =>
    theme.breakpoints.down("lg")
  );

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
          {page == "home" ? (
            <>
              <SearchField />
              <Box sx={{ flexGrow: 1 }} />
            </>
          ) : null}
          <Button
            variant="standard"
            startIcon={<AccessTimeIcon sx={{ width: 30, height: 30 }} />}
            sx={{
              color: "white",
              fontSize: 14,
              borderRadius: 0,
              height: 64,
              minWidth: 24,
              "& .MuiButton-startIcon": {
                marginLeft: "0px",
                marginRight: down_lg_matches ? "0px" : "6px",
              },
              px: 1.6,
            }}
            disableRipple
          >
            {down_lg_matches ? "" : "Open"}
          </Button>
          <Button
            variant="standard"
            startIcon={<ExitToAppIcon sx={{ width: 30, height: 30 }} />}
            sx={{
              color: "white",
              fontSize: 14,
              borderRadius: 0,
              height: 64,
              minWidth: 24,
              "& .MuiButton-startIcon": {
                marginLeft: "0px",
                marginRight: down_lg_matches ? "0px" : "6px",
              },
              px: 1.6,
            }}
            disableRipple
            onClick={() => {
              navigate("/signin");
            }}
          >
            {down_lg_matches ? "" : "Sign In"}
          </Button>
          <Button
            variant="standard"
            startIcon={<PersonAddIcon sx={{ width: 30, height: 30 }} />}
            sx={{
              color: "white",
              fontSize: 14,
              borderRadius: 0,
              height: 64,
              minWidth: 24,
              "& .MuiButton-startIcon": {
                marginLeft: "0px",
                marginRight: down_lg_matches ? "0px" : "6px",
              },
              px: 1.6,
            }}
            disableRipple
            onClick={() => {
              navigate("/signup");
            }}
          >
            {down_lg_matches ? "" : "Sign Up"}
          </Button>
        </Toolbar>
      </AppBar>
      <Offset />
    </Box>
  );
};

export default NavBar;
