import { Grid } from "@mui/material";

import SalesMenu from "components/SalesMenu";
import SalesContent from "components/SalesContent";

import { setPage } from "redux/slices/navigation";

import { useDispatch } from "react-redux";
import { useEffect } from "react";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPage("home"));
  }, []);

  return (
    <Grid container spacing={2.6} sx={{ px: 10, py: 3, mb: 5 }}>
      <Grid item xs={4}>
        <SalesMenu />
      </Grid>
      <Grid item xs={8}>
        <SalesContent />
      </Grid>
    </Grid>
  );
};

export default Home;
