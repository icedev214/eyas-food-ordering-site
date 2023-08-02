import {
  Box,
  Card,
  CardContent,
  TextField,
  Typography,
  Button,
  InputAdornment,
  IconButton,
} from "@mui/material";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import { Link } from "react-router-dom";

import { setPage } from "redux/slices/navigation";

import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPage("signin"));
  }, []);

  return (
    <Box
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <Card sx={{ minWidth: 400, borderRadius: 0, m: 3 }} elevation={3}>
        <CardContent sx={{ p: 3 }}>
          <Typography sx={{ fontSize: 16 }}>E-mail</Typography>
          <TextField variant="standard" color="green" fullWidth></TextField>
          <Typography sx={{ fontSize: 16, mt: 2 }}>Password</Typography>
          <TextField
            variant="standard"
            color="green"
            fullWidth
            type={showPassword ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onMouseDown={(event) => {
                      event.preventDefault();
                    }}
                    onClick={() => {
                      setShowPassword((show) => !show);
                    }}
                    edge="end"
                    size="small"
                  >
                    {showPassword ? (
                      <VisibilityOff sx={{ fontSize: 20 }} />
                    ) : (
                      <Visibility sx={{ fontSize: 20 }} />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          ></TextField>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              mt: 3,
            }}
          >
            <Button variant="contained" color="green" sx={{ color: "white" }}>
              Sign In
            </Button>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
            <Link to="/" style={{ color: "#4fbe62", fontSize: 14 }}>
              I have no account registered
            </Link>
            <Box sx={{ flexGrow: 1 }} />
            <Link to="/" style={{ color: "#4fbe62", fontSize: 14 }}>
              I forgot password
            </Link>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default SignIn;
