import { Box, Grid } from "@mui/material";
import { Header } from "./Components/Header";
import React from "react";
import styles from "./index.module.scss";
import MenuAppBar from "../../components/MenuAppBar/MenuAppBar";

export function Home() {
  return (
    <Box className={styles.home}>
      <MenuAppBar />

      <Header />

      <Grid container spacing={2}>
        <Grid item md={8} xs={12}>
          {/*<Projetos />*/}
        </Grid>

        <Grid item md={4} xs={12}>
          {/*<Solicitacoes />*/}
        </Grid>
      </Grid>
    </Box>
  );
}