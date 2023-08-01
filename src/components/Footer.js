import { Box, Typography } from "@mui/material";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";

const items = [
  "Cookie Policy",
  "Our Location",
  "Privacy Policy",
  "Terms of Use",
];

const Footer = () => {
  return (
    <>
      <Box
        sx={{
          bgcolor: "#eeeeee",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      >
        {items.map((item, index) => {
          return (
            <Box
              key={index}
              sx={{
                width: "25%",
                height: 100,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography>{item}</Typography>
            </Box>
          );
        })}
      </Box>
      <Box
        sx={{
          bgcolor: "#dddddd",
          display: "flex",
          alignItems: "center",
          py: 2,
          pl: 5,
          pr: 3,
        }}
      >
        <Typography>
          © 2018 All Rights Reserved. Powered by <b>Zienix</b>
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <PhoneAndroidIcon />
        <Typography>See it on Mobile</Typography>
      </Box>
    </>
  );
};

export default Footer;
