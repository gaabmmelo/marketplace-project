import React from "react";
import { TextField } from "@mui/material";

export function InputRender({ params, placeholder }) {
  return (
    <TextField
      //error={hasError}
      placeholder={placeholder}
      sx={{
        svg: { color: (theme) => theme.palette.secondary.main },
        marginTop: "15px",
        width: "100%",
      }}
      {...params}
    />
  );
}
