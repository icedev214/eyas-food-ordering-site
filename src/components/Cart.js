import { Card, CardContent, Toolbar, Box, Typography } from "@mui/material";

import SentimentNeutralIcon from "@mui/icons-material/SentimentNeutral";

const Cart = () => {
  return (
    <Card
      sx={{ minWidth: 350, borderRadius: 0, overflow: "clip" }}
      elevation={3}
    >
      <CardContent sx={{ position: "sticky", top: 0 }}>
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
      </CardContent>
    </Card>
  );
};

export default Cart;
