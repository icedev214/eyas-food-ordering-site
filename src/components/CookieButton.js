import { Box } from "@mui/material";

const CookieButton = () => {
  return (
    <Box
      sx={{
        width: 0,
        height: 0,
        borderLeft: "30px solid #f79700",
        borderBottom: "30px solid #f79700",
        borderTop: "30px solid transparent",
        borderRight: "30px solid transparent",
        position: "fixed",
        left: 0,
        bottom: 0,
      }}
    >
      <Box
        sx={{
          backgroundImage: "url('/images/cookie-settings.svg')",
          width: 22,
          height: 22,
          position: "relative",
          left: -24,
          top: 2,
          transform: "rotate(45deg)",
        }}
      />
    </Box>
  );
};

export default CookieButton;
