import { Select } from "@mui/material";
import React from "react";

export default function InputSelect({
  labelId,
  id,
  value,
  label,
  onChange,
  children,
}) {
  return (
    <Select
      fullWidth
      labelId={labelId}
      id={id}
      value={value}
      label={label}
      onChange={onChange}
    >
      {children}
    </Select>
  );
}
