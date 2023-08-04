import { Grid, Pagination, Box } from "@mui/material";
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
    name: "Buy One Get Second for 50% Off",
    description: "",
    price: 12.95,
  },
  {
    name: "Family Feast 2",
    description:
      '16" Box filler with any 3 single burgers, large donner, Chicken Shawarma, mixed pakora, 4 slices of garlic bread, chips, salad & 3 cans of soft drink',
    price: 12.95,
  },
  {
    name: "Chicken Pakora",
    description: "",
    price: 12.95,
  },
  {
    name: "Tea Time Special for Two",
    description:
      "Chicken pakora, any 2 curries from the menu fried rice & nan bread",
    price: 12.95,
  },
  {
    name: "Buy One Get Second for 50% Off",
    description: "",
    price: 12.95,
  },
  {
    name: "Family Feast 2",
    description:
      '16" Box filler with any 3 single burgers, large donner, Chicken Shawarma, mixed pakora, 4 slices of garlic bread, chips, salad & 3 cans of soft drink',
    price: 12.95,
  },
  {
    name: "Chicken Pakora",
    description: "",
    price: 12.95,
  },
  {
    name: "Tea Time Special for Two",
    description:
      "Chicken pakora, any 2 curries from the menu fried rice & nan bread",
    price: 12.95,
  },
  {
    name: "Buy One Get Second for 50% Off",
    description: "",
    price: 12.95,
  },
  {
    name: "Family Feast 2",
    description:
      '16" Box filler with any 3 single burgers, large donner, Chicken Shawarma, mixed pakora, 4 slices of garlic bread, chips, salad & 3 cans of soft drink',
    price: 12.95,
  },
  {
    name: "Chicken Pakora",
    description: "",
    price: 12.95,
  },
  {
    name: "Tea Time Special for Two",
    description:
      "Chicken pakora, any 2 curries from the menu fried rice & nan bread",
    price: 12.95,
  },
  {
    name: "Buy One Get Second for 50% Off",
    description: "",
    price: 12.95,
  },
  {
    name: "Family Feast 2",
    description:
      '16" Box filler with any 3 single burgers, large donner, Chicken Shawarma, mixed pakora, 4 slices of garlic bread, chips, salad & 3 cans of soft drink',
    price: 12.95,
  },
  {
    name: "Chicken Pakora",
    description: "",
    price: 12.95,
  },
];

const SalesContent = () => {
  const [salesData, setSalesData] = useState(sales_data);

  return (
    <>
      <Grid container spacing={2}>
        {salesData.map((data, index) => {
          return (
            <Grid item lg={6} xs={12} key={index}>
              <SaleCard data={data} />
            </Grid>
          );
        })}
      </Grid>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mt: 4,
        }}
      >
        <Pagination
          count={10}
          showFirstButton
          showLastButton
          sx={{
            ".MuiPaginationItem-root": {
              borderRadius: "2px",
              backgroundColor: "white",
              border: "1px solid rgba(0,0,0,0.1)",
              color: "black",
              fontSize: 16,
            },
            ".MuiPaginationItem-root.Mui-selected": {
              backgroundColor: "danger.dark",
              color: "white",
              border: "none",
            },
            ".MuiPaginationItem-ellipsis": {
              borderRadius: "2px",
              backgroundColor: "transparent",
              border: "none",
              color: "black",
              fontSize: 16,
            },
          }}
        />
      </Box>
    </>
  );
};

export default SalesContent;
