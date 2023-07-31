import { TextField, InputAdornment, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchField = () => {
  return (
    <TextField
      color="golden"
      variant="standard"
      placeholder="Search..."
      sx={{
        minWidth: 400,
        input: {
          color: "white",
          fontSize: 16,
          "&::placeholder": {
            opacity: 1,
          },
        },
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
            <SearchIcon
              sx={{ color: "white", fontSize: 28, fontWeight: 600 }}
            />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchField;
