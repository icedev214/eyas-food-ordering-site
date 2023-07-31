import { Box, Card, CardContent, Typography } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";

const Banner = () => {
  return (
    <Box
      sx={{
        backgroundImage: "url('/banner-back-1.jpg')",
        height: 240,
        width: "100%",
      }}
    >
      <Box sx={{ bgcolor: "#00000084", height: 50 }}>
        <Typography
          align="center"
          sx={{
            color: "golden.main",
            fontSize: 28,
            textShadow:
              "2px 2px 4px rgba(0, 0, 0, 0.25), -2px -2px 4px rgba(0, 0, 0, 0.25)",
          }}
        >
          Call Us
          <PhoneIcon sx={{ fontSize: 30, mx: 1, mt: 1 }} />
          01234 567 890
        </Typography>
      </Box>
      <Typography
        color="white"
        sx={{
          fontSize: 40,
          textShadow:
            "2px 2px 4px rgba(0, 0, 0, 0.25), -2px -2px 4px rgba(0, 0, 0, 0.25)",
        }}
      >
        Menu
      </Typography>
    </Box>
  );
};

export default Banner;
