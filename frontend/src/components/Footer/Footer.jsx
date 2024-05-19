import React, { FC, ReactElement } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        backgroundColor: "#003641",
        paddingTop: ".6rem",
        paddingBottom: ".6rem",
      }}
    >
      <Container maxWidth="lg">
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12}>
            <Typography
              variant="h6"
              sx={{
                alignItems: "center",
                color: "#fff",
                fontFamily: "'Lilita One', sans-serif;",
              }}
            >
              MARKETPLACE
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography color="#fff" variant="subtitle1">
              {`${new Date().getFullYear()} - Copyright © | desenvolvido por: @gaabmmelo`}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
