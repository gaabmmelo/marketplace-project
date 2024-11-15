import React, { useState, useEffect } from "react";
import Snackbar from "@mui/material/Snackbar";
import { Alert } from "@mui/material";

export default function AlertStyled() {
  const [open, setOpen] = useState(true);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => setOpen(false), 3000);
    return () => clearTimeout(timer);
  }, [open]);

  return (
    <Snackbar open={open} onClose={handleClose}>
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
