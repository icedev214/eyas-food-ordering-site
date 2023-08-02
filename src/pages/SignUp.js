import {
  Box,
  Card,
  CardContent,
  TextField,
  Typography,
  Button,
  InputAdornment,
  IconButton,
  FormControlLabel,
  Checkbox,
} from "@mui/material";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import { Link } from "react-router-dom";

import { setPage } from "redux/slices/navigation";

import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";

const SignUp = () => {
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    dispatch(setPage("signup"));
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
          <Typography sx={{ fontSize: 14, mt: 2 }}>Your Phone</Typography>
          <TextField variant="standard" color="green" fullWidth></TextField>
          <FormControlLabel
            control={<Checkbox size="small" />}
            label={
              <Box sx={{ display: "flex", gap: 0.5 }}>
                <Typography sx={{ fontSize: 14 }}>I agree with</Typography>
                <Link
                  style={{
                    fontSize: 14,
                    textDecoration: "none",
                    color: "#039be5",
                  }}
                >
                  Terms and Conditions
                </Link>
                <Typography sx={{ fontSize: 14 }}>and</Typography>
                <Link
                  style={{
                    fontSize: 14,
                    textDecoration: "none",
                    color: "#039be5",
                  }}
                >
                  Privacy Policy
                </Link>
              </Box>
            }
            sx={{ mt: 1 }}
          />
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
              CREATE NEW ACCOUNT
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default SignUp;
