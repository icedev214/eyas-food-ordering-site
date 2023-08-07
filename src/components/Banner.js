import { Box, Button, Typography } from "@mui/material";

import PhoneIcon from "@mui/icons-material/Phone";
import PlaceIcon from "@mui/icons-material/Place";

import { useSelector } from "react-redux";

const pageBannerDic = {
  home: "Menu",
  signin: "Sign In",
  signup: "Sign Up",
  location: "Our Location",
  "checkout-intro": "Please introduce yourself",
  "checkout-edit": "Checkout",
  "review-order": "Please review your order",
};

const Banner = () => {
  const { page } = useSelector((state) => state.navigation);

  return (
    <Box
      sx={{
        backgroundImage:
          page == "home"
            ? "url('/images/banner-back-1.jpg')"
            : "url('/images/steak.jpg')",
        backgroundPosition: "center",
        height: 240,
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        position: "relative",
      }}
    >
      <Box
        sx={{
          bgcolor: "#00000084",
          width: "100%",
          height: 50,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
          top: 0,
        }}
      >
        <Typography
          align="center"
          sx={{
            color: "golden.main",
            fontSize: 24,
            textShadow: "1px 1px 1px black",
            fontWeight: 600,
            letterSpacing: 1,
          }}
        >
          Call Us
        </Typography>
        <PhoneIcon
          sx={{
            fontSize: 28,
            mx: 1,
            color: "golden.main",
          }}
          style={{ filter: "drop-shadow(1px 1px 1px black)" }}
        />
        <Typography
          align="center"
          sx={{
            color: "golden.main",
            fontSize: 24,
            textShadow: "1px 1px 1px black",
            fontWeight: 600,
            letterSpacing: 1.6,
          }}
        >
          01234 567 890
        </Typography>
      </Box>
      <Typography
        color="white"
        sx={{
          fontSize: 64,
          textShadow:
            "2px 2px 4px rgba(0, 0, 0, 0.6), -2px -2px 4px rgba(0, 0, 0, 0.6)",
        }}
      >
        {pageBannerDic[page]}
      </Typography>
      {page == "location" ? null : (
        <Button
          href="/location"
          variant="contained"
          color="golden"
          endIcon={
            <PlaceIcon
              sx={{
                transform: "rotate(90deg)",
                width: 28,
                height: 28,
                color: "black",
              }}
            />
          }
          sx={{
            color: "black",
            borderRadius: 0,
            height: 30,
            fontSize: 16,
            p: 1,
            transform: "translateX(-50%) rotate(-90deg) translateY(50%)",
            position: "absolute",
            left: 0,
          }}
        >
          Our Location
        </Button>
      )}
    </Box>
  );
};

export default Banner;
