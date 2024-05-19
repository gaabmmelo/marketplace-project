import React from "react";
import { InputLabel } from "@mui/material";

export function Label({ params, htmlFor, label }) {
  return (
    <InputLabel
      htmlFor={htmlFor}
      sx={{
        color: "#003641",
        fontWeight: "bolder",
        textAlign: "left",
      }}
    >
      {label}
    </InputLabel>
  );
}
