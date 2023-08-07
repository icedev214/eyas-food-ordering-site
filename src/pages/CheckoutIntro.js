import {
  Box,
  Button,
  Card,
  CardContent,
  Typography,
  Divider,
  Tabs,
  Tab,
  TextField,
  FormControlLabel,
  Checkbox,
  InputAdornment,
  IconButton,
} from "@mui/material";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import { Link } from "react-router-dom";

import { setPage } from "redux/slices/navigation";

import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";

const TabPanel = ({ children, value, index, ...other }) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
};

const allyProps = (index) => {
  return {
    id: `tabpanel-${index}`,
    "aria-controls": `tab-${index}`,
  };
};

const CheckoutIntro = () => {
  const [tabValue, setTabValue] = useState(0);
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPage("checkout-intro"));
  }, [dispatch]);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 10,
        py: 3,
        mb: 2,
      }}
    >
      <Card sx={{ flexGrow: 1, borderRadius: 0 }} elevation={3}>
        <CardContent sx={{ p: 3 }}>
          {/* <Typography
            sx={{ fontSize: 24, fontWeight: 600, letterSpacing: 0.6 }}
            gutterBottom
          >
            Please, introduce yourself
          </Typography>
          <Divider sx={{ mb: 2 }} /> */}
          <Tabs
            value={tabValue}
            onChange={(event, newVal) => {
              setTabValue(newVal);
            }}
            TabIndicatorProps={{
              sx: {
                backgroundColor: "danger.dark",
              },
            }}
            sx={{
              ".MuiTab-root": {
                color: "black",
                px: 3,
              },
              ".MuiTab-root.Mui-selected": {
                color: "danger.dark",
              },
              mb: 3,
            }}
          >
            <Tab label="Express checkout" {...allyProps(0)} />
            <Tab label="I have user account" {...allyProps(1)} />
          </Tabs>
          <TabPanel value={tabValue} index={0}>
            <Typography sx={{ fontSize: 14 }}>Your name</Typography>
            <TextField variant="standard" color="forest" fullWidth />
            <Typography sx={{ fontSize: 14, mt: 2 }}>Your Phone</Typography>
            <TextField variant="standard" color="forest" fullWidth />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label={
                <Box sx={{ display: "flex", gap: 0.5 }}>
                  <Typography sx={{ fontSize: 14 }}>I agree with</Typography>
                  <Link
                    to="/terms-of-use"
                    style={{
                      fontSize: 14,
                      textDecoration: "none",
                      color: "#039be5",
                    }}
                  >
                    Terms and Conditions
                  </Link>
                  <Typography sx={{ fontSize: 14 }}>and</Typography>
                  <Link
                    to="/privacy-policy"
                    style={{
                      fontSize: 14,
                      textDecoration: "none",
                      color: "#039be5",
                    }}
                  >
                    Privacy Policy
                  </Link>
                </Box>
              }
              sx={{ mt: 1 }}
            />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                mt: 2,
              }}
            >
              <Button
                variant="contained"
                color="forest"
                sx={{ color: "white", px: 4, letterSpacing: 0.6 }}
              >
                CONTINUE
              </Button>
            </Box>
          </TabPanel>
          <TabPanel value={tabValue} index={1}>
            <Typography sx={{ fontSize: 14 }}>E-mail</Typography>
            <TextField variant="standard" color="forest" fullWidth></TextField>
            <Typography sx={{ fontSize: 14, mt: 2 }}>Password</Typography>
            <TextField
              variant="standard"
              color="forest"
              fullWidth
              type={showPassword ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onMouseDown={(event) => {
                        event.preventDefault();
                      }}
                      onClick={() => {
                        setShowPassword((show) => !show);
                      }}
                      edge="end"
                      size="small"
                      disableRipple
                    >
                      {showPassword ? (
                        <VisibilityOff
                          sx={{ color: "#333333", fontSize: 20 }}
                        />
                      ) : (
                        <Visibility sx={{ color: "#333333", fontSize: 20 }} />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                mt: 3,
              }}
            >
              <Button
                variant="contained"
                color="forest"
                sx={{ color: "white", px: 4, letterSpacing: 0.6 }}
              >
                CONTINUE
              </Button>
            </Box>
          </TabPanel>
        </CardContent>
      </Card>
    </Box>
  );
};

export default CheckoutIntro;
