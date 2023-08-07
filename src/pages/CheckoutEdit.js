import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  Divider,
  Radio,
  RadioGroup,
  FormControlLabel,
  TextField,
  Button,
  IconButton,
} from "@mui/material";

import AccountCircle from "@mui/icons-material/AccountCircle";
import EditIcon from "@mui/icons-material/Edit";

import { setPage } from "redux/slices/navigation";

import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";

const CheckoutEdit = () => {
  const [coupon, setCoupon] = useState("");
  const [commentLength, setCommentLength] = useState(0);
  const [name, setName] = useState("User");
  const [phone, setPhone] = useState("+44 1223 24 2332");
  const [isInfoEditing, setIsInfoEditing] = useState(false);

  const commentMaxLength = 500;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPage("checkout-edit"));
  }, [dispatch]);

  return (
    <Grid container spacing={2.6} sx={{ px: 10, py: 3, mb: 5 }}>
      <Grid item xs={12} md={8}>
        <Card sx={{ borderRadius: 0, mb: 2 }} elevation={3}>
          <CardContent sx={{ p: 3 }}>
            <Typography
              sx={{ fontSize: 24, fontWeight: 600, letterSpacing: 0.6 }}
              gutterBottom
            >
              Choose payment method
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <RadioGroup defaultValue="card">
              <FormControlLabel
                value="card"
                control={<Radio size="small" color="forest" />}
                label="Card"
              />
              <FormControlLabel
                value="cash"
                control={<Radio size="small" color="forest" />}
                label="Cash"
              />
            </RadioGroup>
          </CardContent>
        </Card>
        <Card sx={{ borderRadius: 0, mb: 2 }} elevation={3}>
          <CardContent sx={{ p: 3 }}>
            <Typography
              sx={{ fontSize: 24, fontWeight: 600, letterSpacing: 0.6 }}
              gutterBottom
            >
              Your order
            </Typography>
            <Divider />
          </CardContent>
        </Card>
        <Card sx={{ borderRadius: 0, mb: 2 }} elevation={3}>
          <CardContent sx={{ p: 3 }}>
            <Typography
              sx={{ fontSize: 24, fontWeight: 600, letterSpacing: 0.6 }}
              gutterBottom
            >
              Discount coupons
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <TextField
                variant="standard"
                color="forest"
                value={coupon}
                onChange={(event) => {
                  setCoupon(event.target.value);
                }}
                sx={{ mr: 1, flexGrow: 1 }}
              />
              <Button
                variant="contained"
                color="forest"
                sx={{ color: "white", px: 4, letterSpacing: 0.6 }}
              >
                APPLY
              </Button>
            </Box>
          </CardContent>
        </Card>
        <Card sx={{ borderRadius: 0 }} elevation={3}>
          <CardContent sx={{ p: 3 }}>
            <Typography
              sx={{ fontSize: 24, fontWeight: 600, letterSpacing: 0.6 }}
              gutterBottom
            >
              Leave a comment to order
            </Typography>
            <Divider sx={{ mb: 1 }} />
            <TextField
              variant="standard"
              color="forest"
              fullWidth
              multiline
              rows={3}
              inputProps={{ maxLength: commentMaxLength }}
              onChange={(event) => {
                setCommentLength(event.target.value.length);
              }}
            />
            <Typography
              sx={{ fontSize: 14, mt: 2 }}
            >{`${commentLength}/${commentMaxLength}`}</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card sx={{ borderRadius: 0, mb: 2 }} elevation={3}>
          <CardContent sx={{ p: 3 }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <AccountCircle sx={{ color: "#cccccc" }} />
              <Typography sx={{ mx: 1, color: "black" }}>
                <b>User</b>, +44 1223 24 3224
              </Typography>
              <IconButton>
                <EditIcon />
              </IconButton>
            </Box>
          </CardContent>
        </Card>
        <Card sx={{ borderRadius: 0, mb: 2 }} elevation={3}>
          <CardContent sx={{ p: 3 }}>
            <RadioGroup defaultValue="collection">
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <FormControlLabel
                    value="collection"
                    control={<Radio size="small" color="forest" />}
                    label="Collection"
                  />
                  <Typography sx={{ fontSize: 13, ml: 3.2, fontWeight: 600 }}>
                    15 minutes *
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <FormControlLabel
                    value="delivery"
                    control={<Radio size="small" color="forest" />}
                    label="Delivery (Free)"
                  />
                  <Typography sx={{ fontSize: 13, ml: 3.2, fontWeight: 600 }}>
                    25 minutes *
                  </Typography>
                </Grid>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    width: "100%",
                    mt: 1,
                  }}
                >
                  <Box sx={{ flexGrow: 1 }} />
                  <Typography sx={{ fontSize: 13, fontWeight: 600 }}>
                    * Average time
                  </Typography>
                </Box>
              </Grid>
            </RadioGroup>
          </CardContent>
        </Card>
        <Card sx={{ borderRadius: 0, mb: 2 }} elevation={3}>
          <CardContent sx={{ p: 3 }}>
            <Box sx={{ display: "flex", alignItems: "end", mb: 1 }}>
              <Typography
                sx={{ fontSize: 24, fontWeight: 600, letterSpacing: 0.6 }}
              >
                When
              </Typography>
              <Box sx={{ flexGrow: 1 }} />
              <Typography
                sx={{ fontSize: 13, color: "danger.main", fontWeight: 600 }}
              >
                * Approximate time
              </Typography>
            </Box>
            <Divider sx={{ mb: 2 }} />
          </CardContent>
        </Card>
        <Card sx={{ borderRadius: 0, mb: 2 }} elevation={3}>
          <CardContent sx={{ p: 3 }}>
            <Typography
              sx={{ fontSize: 24, fontWeight: 600, letterSpacing: 0.6 }}
              gutterBottom
            >
              Order Summary
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <Typography sx={{ fontSize: 14 }}>Subtotal:</Typography>
              <Box sx={{ flexGrow: 1 }} />
              <Typography sx={{ fontSize: 14 }}>£38.85</Typography>
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
            <Button
              variant="contained"
              color="forest"
              sx={{ color: "white", px: 4, letterSpacing: 0.6, width: "100%" }}
            >
              PAY BY CARD
            </Button>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default CheckoutEdit;
