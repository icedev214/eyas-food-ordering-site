import {
  Box,
  Button,
  Typography,
  Card,
  CardContent,
  Divider,
  Alert,
} from "@mui/material";

import WestIcon from "@mui/icons-material/West";
import EastIcon from "@mui/icons-material/East";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

import { setPage } from "redux/slices/navigation";

import { useDispatch } from "react-redux";
import { useEffect } from "react";

const Item = ({ name, amount, price }) => {
  return (
    <Box sx={{ display: "flex", alignItems: "end", mt: 2 }}>
      <Typography sx={{ fontSize: 18 }}>{name}</Typography>
      <Box sx={{ flexGrow: 1 }} />
      <Typography
        sx={{ fontSize: 15, mr: 1 }}
        style={{ marginBottom: 1.2 }}
      >{`${amount} x`}</Typography>
      <Typography
        sx={{ fontSize: 17, fontWeight: 600 }}
      >{`£${price}`}</Typography>
    </Box>
  );
};

const ReviewOrder = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPage("review-order"));
  }, [dispatch]);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        px: 10,
        py: 3,
        mb: 2,
        flexDirection: "column",
        width: "100%",
      }}
    >
      <Card
        sx={{ borderRadius: 0, mb: 2, maxWidth: 1000, width: "100%" }}
        elevation={3}
      >
        <CardContent sx={{ p: 3 }}>
          <Typography
            sx={{ fontSize: 24, fontWeight: 600, letterSpacing: 0.6 }}
            gutterBottom
          >
            Collection
          </Typography>
          <Divider sx={{ mb: 2 }} />
          <Alert
            icon={<ErrorOutlineIcon sx={{ color: "black" }} />}
            sx={{
              color: "black",
              backgroundColor: "golden.light",
              fontSize: 17,
              ".MuiAlert-icon": {
                alignItems: "center",
              },
            }}
          >
            You have chosen to collect your order from us. If you wish to change
            this please go back, choose "Delivery" and provide your address
          </Alert>
          <Typography sx={{ fontSize: 15, mt: 1 }}>
            <b>Chosen date/time</b>: 07.08.2023 17:55
          </Typography>
        </CardContent>
      </Card>
      <Card
        sx={{ borderRadius: 0, mb: 2, maxWidth: 1000, width: "100%" }}
        elevation={3}
      >
        <CardContent sx={{ p: 3 }}>
          <Typography
            sx={{ fontSize: 24, fontWeight: 600, letterSpacing: 0.6 }}
            gutterBottom
          >
            Items
          </Typography>
          <Divider sx={{ mb: 2 }} />
          <Item name="Tea Time Special for Two" amount={3} price={12.95} />
          <Item name="Tea Time Special for Two" amount={3} price={12.95} />
          <Item name="Tea Time Special for Two" amount={3} price={12.95} />
        </CardContent>
      </Card>
      <Card
        sx={{ borderRadius: 0, mb: 2, maxWidth: 1000, width: "100%" }}
        elevation={3}
      >
        <CardContent sx={{ p: 3 }}>
          <Typography
            sx={{ fontSize: 24, fontWeight: 600, letterSpacing: 0.6 }}
            gutterBottom
          >
            Order Summary
          </Typography>
          <Divider sx={{ mb: 2 }} />
          <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
            <Typography sx={{ fontSize: 15 }}>Subtotal:</Typography>
            <Box sx={{ flexGrow: 1 }} />
            <Typography sx={{ fontSize: 15 }}>£38.85</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
            <Typography sx={{ fontSize: 20, fontWeight: 600 }}>
              Order total:
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            <Typography sx={{ fontSize: 20, fontWeight: 600 }}>
              £38.85
            </Typography>
          </Box>
        </CardContent>
      </Card>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          maxWidth: 1000,
          width: "100%",
        }}
      >
        <Button
          variant="contained"
          color="lightgold"
          sx={{
            color: "black",
            px: 4,
            letterSpacing: 0.6,
          }}
          startIcon={<WestIcon />}
        >
          BACK TO EDIT
        </Button>
        <Box sx={{ flexGrow: 1 }} />
        <Button
          variant="contained"
          color="forest"
          sx={{ color: "white", px: 4, letterSpacing: 0.6 }}
          endIcon={<EastIcon />}
        >
          CONTINUE
        </Button>
      </Box>
    </Box>
  );
};

export default ReviewOrder;
