import { Box, Typography, Button, TextField } from "@mui/material";

import WestIcon from "@mui/icons-material/West";

import { setPage } from "redux/slices/navigation";

import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";

const CardNumberInput = () => {
  const [value, setValue] = useState("");

  const format = (value) => {
    const v = value
      .replace(/\s+/g, "")
      .replace(/[^0-9]/gi, "")
      .substr(0, 16);
    const parts = [];

    for (let i = 0; i < v.length; i += 4) {
      parts.push(v.substr(i, 4));
    }

    return parts.join(" ");
  };

  return (
    <TextField
      inputProps={{ pattern: "[0-9 ]*", maxLength: 19 }}
      InputProps={{ disableUnderline: true }}
      variant="standard"
      value={format(value)}
      placeholder="1234 1234 1234 1234"
      onChange={(event) => {
        setValue((value) =>
          event.target.validity.valid ? event.target.value : value
        );
      }}
      sx={{
        backgroundColor: "white",
        px: 1,
        width: 214,
        mb: 2,
        input: {
          color: "black",
          fontSize: 20,
          "&::placeholder": {
            opacity: 0.36,
          },
        },
      }}
    />
  );
};

const ExpiryDateInput = () => {
  const [value, setValue] = useState("");

  const format = (value) => {
    return value
      .replace(/^([1-9]\/|[2-9])$/g, "0$1/")
      .replace(/^(0[1-9]|1[0-2])$/g, "$1/")
      .replace(/^([0-1])([3-9])$/g, "0$1/$2")
      .replace(/^(0?[1-9]|1[0-2])([0-9]{2})$/g, "$1/$2")
      .replace(/^([0]+)\/|[0]+$/g, "0")
      .replace(/[^\d\/]|^[\/]*$/g, "")
      .replace(/\/\//g, "/")
      .replace(/\//g, " / ");
  };

  return (
    <TextField
      inputProps={{ maxLength: 7 }}
      InputProps={{ disableUnderline: true }}
      variant="standard"
      value={format(value)}
      placeholder="MM / YY"
      onChange={(event) => {
        setValue(event.target.value);
      }}
      sx={{
        backgroundColor: "white",
        px: 1,
        width: 92,
        mb: 2,
        input: {
          color: "black",
          fontSize: 20,
          "&::placeholder": {
            opacity: 0.36,
          },
        },
      }}
    />
  );
};

const CDCInput = () => {
  const [value, setValue] = useState("");

  return (
    <TextField
      inputProps={{ pattern: "[0-9]*", maxLength: 3 }}
      InputProps={{ disableUnderline: true }}
      variant="standard"
      value={value}
      placeholder="CVC"
      onChange={(event) => {
        setValue((value) =>
          event.target.validity.valid ? event.target.value : value
        );
      }}
      sx={{
        backgroundColor: "white",
        px: 1,
        width: 54,
        mt: 2,
        input: {
          color: "black",
          fontSize: 20,
          "&::placeholder": {
            opacity: 0.36,
          },
        },
      }}
    />
  );
};

const Payment = () => {
  const [cardNumber, setCardNumber] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPage("payment"));
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
        BACK TO CHECKOUT
      </Button>
      <Typography
        sx={{ fontSize: 24, fontWeight: 600, letterSpacing: 0.6, mt: 1 }}
        gutterBottom
      >
        Credit or debit card
      </Typography>
      <Box sx={{ position: "relative", height: 240, width: 560 }}>
        <Box
          sx={{
            height: 240,
            width: 342,
            borderRadius: "10px",
            backgroundColor: "#f5f5f5",
            border: "1px solid #cccccc",
            position: "absolute",
            left: 218,
          }}
        >
          <Box
            sx={{
              backgroundColor: "#666666",
              height: 50,
              position: "absolute",
              top: 20,
              left: 0,
              width: "100%",
            }}
          />
          <Box sx={{ display: "flex", height: "100%" }}>
            <Box sx={{ width: 124 }} />
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Box sx={{ height: 70 }} />
              <CDCInput />
              <Box sx={{ flexGrow: 1 }} />
              <Button
                variant="contained"
                color="forest"
                sx={{ color: "white", px: 4, letterSpacing: 0.6, mb: 2 }}
              >
                PAY £38.85
              </Button>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            height: 240,
            width: 342,
            borderRadius: "10px",
            backgroundColor: "#f5f5f5",
            border: "1px solid #cccccc",
            position: "absolute",
            left: 0,
            boxShadow: "4px 0 4px rgba(0,0,0,0.1)",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Box sx={{ flexGrow: 1 }} />
          <CardNumberInput />
          <ExpiryDateInput />
        </Box>
      </Box>
    </Box>
  );
};

export default Payment;
