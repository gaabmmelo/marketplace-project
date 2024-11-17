import React, { useState } from "react";
import { TextField } from "@mui/material";

export function InputRender({
  params,
  placeholder,
  onChange,
  value,
  InputProps,
  type,
  disabled,
  id,
  required,
}) {
  const [error, setError] = useState(false);
  const [helperText, setHelperText] = useState("");

  const handleBlur = () => {
    if (required && !value) {
      setError(true);
      setHelperText("Campo de preenchimento obrigatório.");
    } else {
      setError(false);
      setHelperText("");
    }
  };

  return (
    <TextField
      id={id}
      type={type}
      disabled={disabled}
      InputProps={InputProps}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      onBlur={handleBlur}
      error={error}
      helperText={helperText}
      sx={{
        svg: { color: (theme) => theme.palette.secondary.main },
        marginTop: "10px",
        marginLeft: "0px!important",
        marginBottom: "15px",
        width: "100%",
        "& .MuiFormHelperText-root": {
          minHeight: "20px",
        },
      }}
      {...params}
    />
  );
}
