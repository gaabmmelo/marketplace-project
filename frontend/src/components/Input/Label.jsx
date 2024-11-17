import React from "react";
import { createTheme, InputLabel, ThemeProvider } from "@mui/material";

const theme = createTheme({
  components: {
    MuiInputLabel: {
      styleOverrides: {
        asterisk: {
          color: "red",
        },
      },
    },
  },
});

export function Label({ htmlFor, label }) {
  return (
    <ThemeProvider theme={theme}>
      <InputLabel
        htmlFor={htmlFor}
        required
        sx={{
          color: "#003641",
          fontWeight: "bolder",
          textAlign: "left",
        }}
      >
        {label}
      </InputLabel>
    </ThemeProvider>
  );
}
