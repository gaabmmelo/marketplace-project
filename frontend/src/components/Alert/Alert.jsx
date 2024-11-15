import React, { useState, useEffect } from "react";
import Snackbar from "@mui/material/Snackbar";
import { Alert, LinearProgress } from "@mui/material";

export default function AlertStyled() {
  const [open, setOpen] = useState(true);
  const [progress, setProgress] = useState(100);
  const [snackbarVisibility, setSnackbarVisibility] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleAction = () => {
    setSnackbarVisibility(true);

    const interval = setInterval(() => {
      setProgress((prevProgress) => Math.max(prevProgress - 0.15, 0));
    }, 10);

    const duration = setTimeout(() => {
      clearInterval(interval);
      setSnackbarVisibility(false);
      setProgress(0);
    }, 4000);

    return () => {
      clearTimeout(duration);
      clearInterval(interval);
    };
  };

  useEffect(() => {
    const timer = setTimeout(() => setOpen(false), 800000);
    handleAction();
    return () => clearTimeout(timer);
  }, []);

  return (
    <Snackbar open={open} onClose={handleClose}>
      <div>
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{
            width: "100%",
            borderBottomLeftRadius: "0px 0px",
            borderBottomRightRadius: "0px 0px",
          }}
        >
          Tipo de produto adicionado com sucesso!
        </Alert>
        <LinearProgress
          sx={{
            width: "100%",
            padding: "0px 16px",
            borderBottomLeftRadius: "5px 5px",
            borderBottomRightRadius: "5px 5px",
          }}
          variant="determinate"
          value={progress}
        />
      </div>
    </Snackbar>
  );
}
