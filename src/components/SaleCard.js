import {
  Button,
  Card,
  CardContent,
  CardActions,
  Typography,
  Box,
  Divider,
  useMediaQuery,
} from "@mui/material";

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const SaleCard = ({ data, onAdd }) => {
  const down_lg_matches = useMediaQuery((theme) =>
    theme.breakpoints.down("lg")
  );

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
        <Button
          variant="contained"
          color="forest"
          startIcon={<AddShoppingCartIcon />}
          sx={{
            color: "white",
            letterSpacing: 0.5,
            fontSize: 14,
            height: 36,
            minWidth: 54,
            "& .MuiButton-startIcon": {
              marginLeft: "0px",
              marginRight: down_lg_matches ? "0px" : "6px",
            },
            px: 1.6,
          }}
          onClick={onAdd}
        >
          {down_lg_matches ? "" : "ADD TO CART"}
        </Button>
      </CardActions>
    </Card>
  );
};

export default SaleCard;
