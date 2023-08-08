import { Box, Typography } from "@mui/material";

import { setPage } from "redux/slices/navigation";

import { useDispatch } from "react-redux";
import { useEffect } from "react";

const Page404 = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPage("404"));
  }, [dispatch]);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 10,
        py: 10,
        mb: 2,
        flexDirection: "column",
        width: "100%",
      }}
    >
      <Typography sx={{ fontSize: 96, color: "danger.dark" }}>404</Typography>
      <Typography sx={{ fontSize: 24, color: "black" }} gutterBottom>
        PAGE NOT FOUND
      </Typography>
      <Typography sx={{ fontSize: 14, color: "black", letterSpacing: 0.2 }}>
        Unfortunately, the page you were looking for was not found or does not
        exist.
      </Typography>
    </Box>
  );
};

export default Page404;
