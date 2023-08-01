import { Grid } from "@mui/material";

import SalesMenu from "components/SalesMenu";
import SalesContent from "components/SalesContent";

const Home = () => {
  return (
    <Grid container spacing={2.6} sx={{ px: 10, py: 3 }}>
      <Grid item lg={4}>
        <SalesMenu />
      </Grid>
      <Grid item lg={8}>
        <SalesContent />
      </Grid>
    </Grid>
  );
};

export default Home;
