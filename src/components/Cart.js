import { Drawer, Toolbar, Box, Typography } from "@mui/material";

import SentimentNeutralIcon from "@mui/icons-material/SentimentNeutral";

const drawerWidth = 350;

const Cart = () => {
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="permanent"
      anchor="right"
    >
      <Toolbar />
      <Box
        sx={{
          width: "100%",
          height: 160,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <SentimentNeutralIcon sx={{ fontSize: 108, color: "#eeeeee" }} />
      </Box>
      <Typography align="center" sx={{ fontSize: 24, fontWeight: 600 }}>
        Your cart is empty
      </Typography>
      <Typography align="center">
        Add something tasty to make me happy
      </Typography>
    </Drawer>
  );
};

export default Cart;
