import { Button } from "@mui/material";

const NavBarButton = ({ children, icon }) => {
  return (
    <Button
      variant="standard"
      startIcon={icon}
      sx={{ color: "white", fontSize: 14, borderRadius: 0, height: "100%" }}
    >
      {children}
    </Button>
  );
};

export default NavBarButton;
