import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Divider,
} from "@mui/material";

import Leaflet from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import { setPage } from "redux/slices/navigation";

import { useDispatch } from "react-redux";
import { useEffect } from "react";

import "leaflet/dist/leaflet.css";

Leaflet.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

const position = [55.96215, -3.97536];

const Location = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPage("location"));
  }, []);

  return (
    <Grid container spacing={2.6} sx={{ px: 10, py: 3, mb: 5 }}>
      <Grid item sm={4}>
        <Card elevation={3} sx={{ borderRadius: 0 }}>
          <CardContent sx={{ p: 3 }}>
            <Typography sx={{ fontSize: 24, fontWeight: 600, color: "black" }}>
              You can find us at :
            </Typography>
            <Divider sx={{ mt: 1, mb: 2 }} />
            <Typography>47 Main Street, G67 2RT</Typography>
            <Typography>Cumbernauld</Typography>
            <Typography>United Kingdom</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item sm={8}>
        <MapContainer center={position} zoom={19} style={{ height: 400 }}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>Zienix</Popup>
          </Marker>
        </MapContainer>
      </Grid>
    </Grid>
  );
};

export default Location;
