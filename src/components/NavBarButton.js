import { Button } from "@mui/material";

const NavBarButton = ({ children, icon }) => {
  return (
    <Button variant="standard" startIcon={icon} sx={{ color: "white" }}>
      {children}
    </Button>
  );
};

export default NavBarButton;
