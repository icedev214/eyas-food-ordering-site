import { Box, Fade, Tooltip, Typography } from "@mui/material";

import { useRef } from "react";

import { styled } from "@mui/material/styles";

const CookieButton = () => {
  const areaRef = useRef(null);

  return (
    <Tooltip
      title={
        <>
          <Typography align="center" sx={{ fontSize: 14 }}>
            Cookie
          </Typography>
          <Typography align="center" sx={{ fontSize: 14 }}>
            Settings
          </Typography>
        </>
      }
      arrow
      TransitionComponent={Fade}
      componentsProps={{
        tooltip: {
          sx: {
            px: 2.4,
            bgcolor: "#00000080",
            borderColor: "black",
            transform: "rotate(45deg)",
          },
        },
        arrow: {
          sx: {
            color: "#00000080",
          },
        },
        popper: {
          anchorEl: {
            getBoundingClientRect: () => {
              return new DOMRect(
                areaRef.current.getBoundingClientRect().x + 40,
                areaRef.current.getBoundingClientRect().y + 36,
                0,
                0
              );
            },
          },
        },
      }}
    >
      <Box
        ref={areaRef}
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
          cursor: "pointer",
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
    </Tooltip>
  );
};

export default CookieButton;
