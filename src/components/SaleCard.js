import {
  Button,
  Card,
  CardContent,
  CardActions,
  Typography,
  Box,
  Divider,
} from "@mui/material";

const SaleCard = ({ data }) => {
  return (
    <Card
      elevation={2}
      sx={{
        mx: 0.4,
        height: "100%",
        borderRadius: 0,
        display: "flex",
        flexDirection: "column",
        ":hover": {
          boxShadow: 10,
        },
      }}
    >
      <CardContent sx={{ px: 2.5, py: 2.5, flexGrow: 1 }}>
        <Typography sx={{ fontSize: 20 }} gutterBottom>
          {data.name}
        </Typography>
        <Typography sx={{ fontSize: 14 }}>{data.description}</Typography>
      </CardContent>
      <Divider />
      <CardActions sx={{ px: 2.5, py: 1.5 }}>
        <Typography>{`£${data.price}`}</Typography>
        <Box sx={{ flexGrow: 1 }} />
        <Button variant="contained" color="green" sx={{ color: "white" }}>
          ADD TO CART
        </Button>
      </CardActions>
    </Card>
  );
};

export default SaleCard;
