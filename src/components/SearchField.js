import { Input, InputAdornment, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchField = () => {
  return (
    <Input
      sx={{ color: "white" }}
      endAdornment={
        <InputAdornment position="end">
          <IconButton sx={{ color: "white" }}>
            <SearchIcon />
          </IconButton>
        </InputAdornment>
      }
    />
  );
};

export default SearchField;
