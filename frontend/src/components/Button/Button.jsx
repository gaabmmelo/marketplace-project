import { Button } from "@mui/material";
import React from "react";

export function ButtonStyled({ title, handler }) {
  return (
    <Button
      onClick={handler}
      variant="contained"
      sx={{
        backgroundColor: "#3e3e3e",
        fontSize: "18px",
        textTransform: "initial",
        marginTop: "20px",
      }}
    >
      {title}
    </Button>
  );
}
