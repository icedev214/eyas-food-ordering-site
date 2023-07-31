import {
  Card,
  List,
  ListItem,
  ListItemButton,
  Divider,
  CardContent,
} from "@mui/material";

const SalesMenu = () => {
  return (
    <Card sx={{ padding: 0 }}>
      <CardContent sx={{ padding: 0 }}>
        <List>
          <ListItemButton>One</ListItemButton>
          <Divider />
          <ListItemButton>Two</ListItemButton>
          <Divider />
          <ListItemButton>Three</ListItemButton>
        </List>
      </CardContent>
    </Card>
  );
};

export default SalesMenu;
