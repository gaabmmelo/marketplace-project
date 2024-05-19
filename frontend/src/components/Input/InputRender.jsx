import React from "react";
import { TextField } from "@mui/material";

export function InputRender({ params, placeholder, onChange, value }) {
  return (
    <TextField
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      sx={{
        svg: { color: (theme) => theme.palette.secondary.main },
        marginTop: "10px",
        marginBottom: "20px",
        width: "100%",
      }}
      {...params}
    />
  );
}
