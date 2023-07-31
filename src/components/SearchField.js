import { TextField, InputAdornment, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchField = () => {
  return (
    <TextField
      color="golden"
      variant="standard"
      placeholder="Search..."
      sx={{
        input: { color: "white", fontSize: 16 },
        "& .MuiInput-underline:before": {
          borderBottomColor: "white",
          borderWidth: 1,
        },
        "&& .MuiInput-underline:hover:before": {
          borderBottomColor: "white",
          borderWidth: 1,
        },
      }}
      InputLabelProps={{ style: { color: "white" } }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <SearchIcon sx={{ color: "white" }} />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchField;
