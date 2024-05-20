import { Button } from "@mui/material";
import React from "react";

export function ButtonStyled({
  children,
  color,
  handler,
  size,
  sx,
  styles,
  title,
  variant,
  ...other
}) {
  return (
    <Button
      color={color}
      onClick={handler}
      size={size}
      sx={{
        fontSize: "18px",
        textTransform: "initial",
        marginTop: "20px",
        marginLeft: "20px",
        ...styles,
      }}
      variant={variant}
      {...other}
    >
      {title}
    </Button>
  );
}
