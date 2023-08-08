import {
  AppBar,
  Toolbar,
  Button,
  Box,
  useMediaQuery,
  Popper,
  Paper,
  Typography,
  Divider,
} from "@mui/material";

import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";

import SearchField from "components/SearchField";

import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const navigate = useNavigate();

  const { page } = useSelector((state) => state.navigation);

  const weekdays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const down_lg_matches = useMediaQuery((theme) =>
    theme.breakpoints.down("lg")
  );

  const handlePopperOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopperClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "danger.main",
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
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
          {page === "home" ? (
            <>
              <SearchField />
              <Box sx={{ flexGrow: 1 }} />
            </>
          ) : null}
          {page !== "checkout" ? (
            <>
              <Box
                onMouseEnter={handlePopperOpen}
                onMouseLeave={handlePopperClose}
              >
                <Button
                  variant="text"
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
                    px: 1.2,
                    cursor: "default",
                  }}
                  style={{
                    backgroundColor: anchorEl ? "#0000001a" : "transparent",
                  }}
                  disableRipple
                >
                  {down_lg_matches ? "" : "Open"}
                </Button>
                <Popper
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  placement="bottom-end"
                  sx={{ zIndex: (theme) => theme.zIndex.drawer + 2 }}
                >
                  <Paper
                    sx={{
                      borderRadius: 0,
                      boxShadow: 3,
                      px: 3,
                      py: 4,
                    }}
                  >
                    <Typography
                      sx={{ fontSize: 24, color: "black" }}
                      gutterBottom
                    >
                      We are open now!
                    </Typography>
                    <Divider />
                    <Typography
                      sx={{
                        fontSize: 17,
                        fontWeight: 600,
                        color: "forest.main",
                        my: 2.5,
                      }}
                    >
                      Opening hours
                    </Typography>
                    {weekdays.map((day, index) => {
                      return (
                        <Box key={index}>
                          <Box sx={{ display: "flex" }}>
                            <Typography
                              sx={{
                                color: "black",
                                fontWeight: 600,
                                fontSize: 15,
                              }}
                            >{`${day}:`}</Typography>
                            <Box sx={{ flexGrow: 1 }} />
                            <Typography sx={{ color: "black", fontSize: 15 }}>
                              0:00 - 0:00
                            </Typography>
                          </Box>
                          {index == weekdays.length - 1 ? null : (
                            <Divider sx={{ my: 1.5 }} />
                          )}
                        </Box>
                      );
                    })}
                  </Paper>
                </Popper>
              </Box>
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
                  "&:hover": {
                    backgroundColor: "#0000001a",
                  },
                  px: 1.2,
                }}
                disableRipple
                href="/signin"
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
                  "&:hover": {
                    backgroundColor: "#0000001a",
                  },
                  px: 1.2,
                }}
                disableRipple
                href="/signup"
              >
                {down_lg_matches ? "" : "Sign Up"}
              </Button>
            </>
          ) : null}
          {page === "home" || page === "checkout" ? null : (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                height: 64,
              }}
            >
              <ShoppingCartIcon sx={{ width: 30, height: 30, mx: 1 }} />
              <Box
                sx={{
                  display: "flex",
                  position: "relative",
                  alignItems: "center",
                  bgcolor: "golden.main",
                  borderRadius: "2px",
                  height: 24,
                  pr: "3px",
                  "&::after": {
                    display: "block",
                    content: `""`,
                    width: 18,
                    height: 18,
                    left: -8,
                    position: "absolute",
                    bgcolor: "golden.main",
                    borderRadius: "3px",
                    transform: "rotate(45deg)",
                    zIndex: -1,
                  },
                }}
              >
                <Typography
                  sx={{ color: "black", fontSize: 15, letterSpacing: 0.6 }}
                >
                  £0.00
                </Typography>
              </Box>
            </Box>
          )}
          {/* <Button
            variant="standard"
            startIcon={<RestaurantMenuIcon sx={{ width: 30, height: 30 }} />}
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
              "&:hover": {
                backgroundColor: "#0000001a",
              },
              px: 1.2,
            }}
            disableRipple
            href="/signup"
          >
            Back to Menu
          </Button> */}
        </Toolbar>
      </AppBar>
      <Offset />
    </Box>
  );
};

export default NavBar;
