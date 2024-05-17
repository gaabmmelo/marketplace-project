import { Box, Grid } from "@mui/material";
import { CardsAgrupados } from "./Components/CardFuncionalidade/CardsAgrupados";
import { Description } from "./Components/Description";
import React from "react";
import styles from "../../index.module.scss";

export function Header() {
  return (
    <Box
      sx={{
        color: "#000",
        position: "relative",
        zIndex: 1,
      }}
    >
      <Box className={styles.backgroundContainerHeader} />

      <Grid
        className="animationFadeInMedium"
        container
        padding="25px 40px 40px 40px"
      >
        <Description />

        <CardsAgrupados />
      </Grid>
    </Box>
  );
}
