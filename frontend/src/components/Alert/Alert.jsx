import React, { useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import { Alert } from "@mui/material";

export default function AlertStyled() {
  const [open, setOpen] = React.useState(true);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
      <Alert
        onClose={handleClose}
        severity="success"
        variant="filled"
        sx={{ width: "100%" }}
      >
        Tipo de produto adicionado com sucesso!
      </Alert>
    </Snackbar>
  );
}
