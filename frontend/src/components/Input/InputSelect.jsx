import { OutlinedInput, Select } from "@mui/material";
import React from "react";

export default function InputSelect({
  labelId,
  id,
  value,
  label,
  sx,
  onChange,
  children,
}) {
  return (
    <Select
      displayEmpty
      sx={sx}
      renderValue={
        value !== ""
          ? undefined
          : () => {
              return <span style={{ color: "#B4B4B4" }}>{label}</span>;
            }
      }
      fullWidth
      labelId={labelId}
      id={id}
      value={value}
      onChange={onChange}
    >
      {children}
    </Select>
  );
}
