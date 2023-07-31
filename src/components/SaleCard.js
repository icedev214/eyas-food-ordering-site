import {
  Button,
  Card,
  CardContent,
  CardActions,
  Typography,
  Box,
} from "@mui/material";

const SaleCard = ({ data }) => {
  return (
    <Card sx={{ m: 2 }}>
      <CardContent>
        <Typography>{data.name}</Typography>
      </CardContent>
      <CardActions>
        <Typography>12.95$</Typography>
        <Box sx={{ flexGrow: 1 }} />
        <Button variant="contained" color="green" sx={{ color: "white" }}>
          ADD TO CART
        </Button>
      </CardActions>
    </Card>
  );
};

export default SaleCard;
