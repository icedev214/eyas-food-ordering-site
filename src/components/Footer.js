import { Box, Typography, Grid } from "@mui/material";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <Grid container spacing={0} sx={{ bgcolor: "#eeeeee", py: 2 }}>
        <Grid item xs={12} sm={6} md={3}>
          <Box
            sx={{
              height: 60,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Link
              to="/cookie-policy"
              style={{ textDecoration: "none", color: "#000000de" }}
            >
              <Typography>Cookie Policy</Typography>
            </Link>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Box
            sx={{
              height: 60,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Link
              to="/location"
              style={{ textDecoration: "none", color: "#000000de" }}
            >
              <Typography>Our Location</Typography>
            </Link>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Box
            sx={{
              height: 60,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Link
              to="/privacy-policy"
              style={{ textDecoration: "none", color: "#000000de" }}
            >
              <Typography>Privacy Policy</Typography>
            </Link>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Box
            sx={{
              height: 60,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Link
              to="/terms-of-use"
              style={{ textDecoration: "none", color: "#000000de" }}
            >
              <Typography>Terms of Use</Typography>
            </Link>
          </Box>
        </Grid>
      </Grid>
      <Box
        sx={{
          bgcolor: "#dddddd",
          display: "flex",
          alignItems: "center",
          py: 1.8,
          pl: 5.4,
          pr: 3,
        }}
      >
        <Typography sx={{ fontSize: 14 }}>
          &copy; 2018 All Rights Reserved. Powered by <b>Zienix</b>
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <PhoneAndroidIcon sx={{ fontSize: 18 }} />
        <Typography sx={{ fontSize: 14, ml: 0.4 }}>See it on Mobile</Typography>
      </Box>
    </>
  );
};

export default Footer;
