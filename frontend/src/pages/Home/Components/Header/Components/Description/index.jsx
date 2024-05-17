import { Box, Grid } from "@mui/material";
import React from "react";
import styles from "../../../../index.module.scss";

export function Description() {
  return (
    <Grid
      display="flex"
      flexDirection="column"
      item
      justifyContent="space-between"
      md={5}
      mt={4}
      xs={12}
    >
      <Box sx={{ textAlign: "left" }}>
        <Box className={styles.title}>Olá, usuário!</Box>

        <Box className={styles.subTitle}>O que você quer fazer hoje?</Box>
      </Box>

      <Box sx={{ color: "#000" }}>
        Arcu est bibendum curabitur nulla. Magnis tincidunt quam felis orci
        felis molestie fusce.
      </Box>
    </Grid>
  );
}
