import {
  Button,
  Card,
  CardContent,
  CardActions,
  Typography,
} from "@mui/material";

const SaleCard = ({ data }) => {
  return (
    <Card sx={{ m: 1 }}>
      <CardContent>
        <Typography>{data.name}</Typography>
      </CardContent>
      <CardActions>
        <Button>Add to Cart</Button>
      </CardActions>
    </Card>
  );
};

export default SaleCard;
