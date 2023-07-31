import { Box, Grid } from "@mui/material";

import SalesMenu from "components/SalesMenu";
import SalesContent from "components/SalesContent";

const HomeContent = () => {
  return (
    <Grid container spacing={2}>
      <Grid item lg={4}>
        <SalesMenu />
      </Grid>
      <Grid item lg={8}>
        <SalesContent />
      </Grid>
    </Grid>
  );
};

export default HomeContent;
