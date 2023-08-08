import { Box, Button, IconButton, Typography } from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";

import { Link } from "react-router-dom";

const CookieSetting = ({ onClose }) => {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: 175,
        backgroundColor: "#000000d9",
        position: "fixed",
        bottom: 0,
        left: 0,
        p: 2,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "start" }}>
        <Typography
          sx={{
            fontSize: 24,
            letterSpacing: 0.4,
            color: "white",
          }}
          gutterBottom
        >
          This website uses cookies
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <IconButton disableRipple sx={{ p: 0, pt: 0.8 }} onClick={onClose}>
          <CloseIcon sx={{ color: "white" }} />
        </IconButton>
      </Box>
      <Typography
        sx={{ fontSize: 14, color: "white", letterSpacing: 0.2 }}
        gutterBottom
      >
        We use cookies to personalise content and to analyze our traffic. Please
        note that with cookies disabled some functions of the site will not
        work, such as authentication or cart.
      </Typography>
      <Link
        to="/terms-of-use"
        style={{
          fontSize: 14,
          color: "#4fbe62",
        }}
      >
        Cookie Policy
      </Link>
      <Box sx={{ flexGrow: 1 }} />
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <CheckIcon sx={{ color: "#4fbe62", mr: 0.6 }} />
        <Typography sx={{ fontSize: 14, color: "white" }}>
          You agreed cookies usage
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <Button
          variant="contained"
          color="danger"
          sx={{ color: "white", px: 4, letterSpacing: 0.6 }}
          onClick={onClose}
        >
          I DISAGREE
        </Button>
      </Box>
    </Box>
  );
};

export default CookieSetting;
