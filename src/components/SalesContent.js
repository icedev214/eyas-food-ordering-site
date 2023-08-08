import {
  Grid,
  Pagination,
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  IconButton,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

import SaleCard from "./SaleCard";

import { useState } from "react";
import { MailOutline } from "@mui/icons-material";

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
  const [addOpen, setAddOpen] = useState(true);
  const [addAmount, setAddAmount] = useState(1);

  const openAddDialog = () => {
    setAddOpen(true);
  };

  const closeAddDialog = () => {
    setAddOpen(false);
  };

  return (
    <>
      <Dialog fullWidth open={addOpen} onClose={closeAddDialog}>
        <DialogTitle>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography sx={{ fontSize: 32, fontWeight: 600 }}>
              Family Feast 2
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            <IconButton disableRipple sx={{ p: 0 }} onClick={closeAddDialog}>
              <CloseIcon />
            </IconButton>
          </Box>
        </DialogTitle>
        <DialogContent dividers>
          <Typography>Hello</Typography>
        </DialogContent>
        <DialogActions sx={{ display: "flex", alignItems: "center", p: 2 }}>
          <Button
            variant="contained"
            color="darkgold"
            sx={{
              minWidth: 40,
              width: 40,
              height: 40,
              borderRadius: 100,
              "& .MuiButton-startIcon": {
                mx: 0,
              },
            }}
            startIcon={
              <MailOutlineIcon sx={{ color: "white", width: 22, height: 22 }} />
            }
          />
          <Box sx={{ flexGrow: 1 }} />
          <Button
            variant="contained"
            color="lightdanger"
            sx={{
              minWidth: 40,
              width: 40,
              height: 40,
              borderRadius: 100,
              "& .MuiButton-startIcon": {
                mx: 0,
              },
              mx: 1,
            }}
            startIcon={
              <RemoveIcon sx={{ color: "white", width: 22, height: 22 }} />
            }
            disabled={addAmount === 1}
            onClick={() => {
              setAddAmount((value) => value - 1);
            }}
          />
          <Typography sx={{ mx: 1, fontSize: 14 }}>{addAmount}</Typography>
          <Button
            variant="contained"
            color="forest"
            sx={{
              minWidth: 40,
              width: 40,
              height: 40,
              borderRadius: 100,
              "& .MuiButton-startIcon": {
                mx: 0,
              },
              mx: 1,
            }}
            startIcon={
              <AddIcon sx={{ color: "white", width: 22, height: 22 }} />
            }
            onClick={() => {
              setAddAmount((value) => value + 1);
            }}
          />
          <Button
            variant="contained"
            color="forest"
            sx={{ color: "white", px: 4, letterSpacing: 0.6 }}
          >
            {`ADD TO CART (£12.95)`}
          </Button>
        </DialogActions>
      </Dialog>
      <Grid container spacing={2}>
        {salesData.map((data, index) => {
          return (
            <Grid item lg={6} xs={12} key={index}>
              <SaleCard
                data={data}
                onAdd={() => {
                  openAddDialog();
                }}
              />
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
