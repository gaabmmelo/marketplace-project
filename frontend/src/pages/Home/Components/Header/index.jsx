import { Box, Grid } from "@mui/material";
import { GroupedCards } from "./Components/Cards/GroupedCards";
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

      <Grid container padding="25px 40px 40px 40px">
        <Description />

        <GroupedCards />
      </Grid>
    </Box>
  );
}
