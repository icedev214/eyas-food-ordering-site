import { Box, Typography } from "@mui/material";

import { setPage } from "redux/slices/navigation";

import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";

const CheckoutComplete = () => {
  const [name, setName] = useState("Alex");
  const [orderNumber, setOrderNumber] = useState(25);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPage("checkout-complete"));
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
      <Typography>{`Thank you ${name} for your order`}</Typography>
      <Typography>{`Order number: ${orderNumber}`}</Typography>
    </Box>
  );
};

export default CheckoutComplete;
