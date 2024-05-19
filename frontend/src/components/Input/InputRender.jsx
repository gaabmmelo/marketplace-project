import React from "react";
import { TextField } from "@mui/material";

export function InputRender({
  params,
  placeholder,
  onChange,
  value,
  id,
  inputProps,
}) {
  return (
    <TextField
      id={id}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      inputProps={inputProps}
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
