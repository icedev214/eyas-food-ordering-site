import {
  Card,
  Box,
  List,
  ListItem,
  ListItemButton,
  Divider,
  CardContent,
  Typography,
} from "@mui/material";

import { useState } from "react";

const menu_data = [
  "American Burgers",
  "Appetisers",
  "Baked Potatoes",
  "Biryani Dishes",
  "Bread",
  "Buffet",
  "Calzone",
  "Calzones",
  "Chef's Special",
  "Chips",
  "Dessert",
  "Dips",
  "Drinks",
  "European Dishes",
  "Favourite Dishes",
  "Fish Bar",
  "Hoggie Wraps",
  "Hoggies",
  "House Specials",
  "Ice Cream",
  "Indian Bread",
  "Italian Pizzas",
  "Kebabs",
  "Kids Meals",
  "Korma Dishes",
  "Munchy Boxes",
  "Naan Kebabs",
  "Pizzas",
  "Poori Dishes",
  "Popular Dishes",
  "Rice",
  "Salads",
  "Set Meals",
  "Snacks",
  "Special Offers",
  "Special Pizzas",
  "Specials",
  "Starters",
  "Sundries",
  "Tandoori Dishes",
  "Tandoori Starters",
  "Turkish Kebabs",
  "Vegetable Dishes",
  "Wraps",
  "Full Menu",
];

const SalesMenu = () => {
  const [menuData, setMenuData] = useState(menu_data);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <Card sx={{ padding: 0, borderRadius: 0 }} elevation={3}>
      <CardContent sx={{ px: 0, pt: 1 }} style={{ paddingBottom: 16 }}>
        <List
          sx={{
            ".MuiListItemButton-root.Mui-selected": {
              backgroundColor: "danger.dark",
              color: "white",
            },
            ".MuiListItemButton-root.Mui-selected:hover": {
              backgroundColor: "danger.dark",
            },
          }}
        >
          <ListItem>
            <Typography sx={{ fontSize: 20, fontWeight: 600 }}>Menu</Typography>
          </ListItem>
          <Divider sx={{ mb: 1.6, mx: 2 }} />
          {menuData.map((data, index) => {
            return (
              <Box key={index}>
                <ListItemButton
                  selected={index == selectedIndex}
                  onClick={() => {
                    setSelectedIndex(index);
                  }}
                >
                  {data}
                </ListItemButton>
                {index == menuData.length - 1 ? null : (
                  <Divider sx={{ mx: 2 }} />
                )}
              </Box>
            );
          })}
        </List>
      </CardContent>
    </Card>
  );
};

export default SalesMenu;
