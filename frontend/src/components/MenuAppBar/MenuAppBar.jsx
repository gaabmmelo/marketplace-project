import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import StorefrontIcon from "@mui/icons-material/Storefront";

const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#003641",
    },
  },
});

export default function MenuAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <ThemeProvider theme={darkTheme}>
        <AppBar position="static">
          <Toolbar>
            <StorefrontIcon sx={{ fontSize: "45px", marginLeft: "15px" }} />
            <Typography
              variant="h6"
              component="div"
              sx={{
                alignItems: "center",
                display: "flex",
                fontFamily: "'Lilita One', sans-serif;",
                flexGrow: 1,
                textAlign: "left",
                marginLeft: "20px",
              }}
            >
              MARKETPLACE
            </Typography>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </Box>
  );
}
