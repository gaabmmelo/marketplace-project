import { Grid, Typography } from "@mui/material";
import React from "react";

export function ModalTitle({ title }) {
  const styleGridItem = {
    borderRadius: "10px",
    margin: "0",
    textTransform: "none",
  };

  return (
    <Grid item sx={styleGridItem} xs={12}>
      <Typography
        sx={{ fontWeight: "600", pt: "0px", pb: "10px" }}
        variant="h6"
      >
        {title}
      </Typography>
    </Grid>
  );
}
