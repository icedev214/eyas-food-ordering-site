import { Grid } from "@mui/material";
import { useState } from "react";
import SaleCard from "./SaleCard";

const sales_data = [
  {
    name: "Tea Time Special for Two",
    description:
      "Chicken pakora, any 2 curries from the menu fried rice & nan bread",
    price: 12.95,
  },
  {
    name: "Tea Time Special for Two",
    description:
      "Chicken pakora, any 2 curries from the menu fried rice & nan bread",
    price: 12.95,
  },
  {
    name: "Tea Time Special for Two",
    description:
      "Chicken pakora, any 2 curries from the menu fried rice & nan bread",
    price: 12.95,
  },
  {
    name: "Tea Time Special for Two",
    description:
      "Chicken pakora, any 2 curries from the menu fried rice & nan bread",
    price: 12.95,
  },
];

const SalesContent = () => {
  const [salesData, setSalesData] = useState(sales_data);

  return (
    <Grid>
      {salesData.map((data, index) => {
        return (
          <Grid item lg={6} md={12} key={index}>
            <SaleCard data={data} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default SalesContent;
