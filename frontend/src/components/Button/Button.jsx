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
  const useStyle = {
    "&:hover": {
      boxShadow: "none !important",
    },
    "&:active": {
      boxShadow: "none !important",
      backgroundColor: "#3c52b2 !important",
    },
  };

  return (
    <Button
      color={color}
      onClick={handler}
      size={size}
      sx={{
        ...useStyle,
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
