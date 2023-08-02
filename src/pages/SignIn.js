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
import { useEffect, useState } from "react";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPage("signin"));
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 10,
        py: 3,
        mb: 2,
      }}
    >
      <Card sx={{ flexGrow: 1, maxWidth: 600, borderRadius: 0 }} elevation={3}>
        <CardContent sx={{ p: 3 }}>
          <Typography sx={{ fontSize: 14 }}>E-mail</Typography>
          <TextField variant="standard" color="green" fullWidth></TextField>
          <Typography sx={{ fontSize: 14, mt: 2 }}>Password</Typography>
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
                    disableRipple
                  >
                    {showPassword ? (
                      <VisibilityOff sx={{ color: "#333333", fontSize: 20 }} />
                    ) : (
                      <Visibility sx={{ color: "#333333", fontSize: 20 }} />
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
            <Button
              variant="contained"
              color="green"
              sx={{ color: "white", px: 4, letterSpacing: 0.6 }}
            >
              SIGN IN
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
