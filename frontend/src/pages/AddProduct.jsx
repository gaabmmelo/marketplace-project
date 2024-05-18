import React, { useState } from "react";
import axios from "axios";
import { Box, Grid, IconButton, Paper, Typography } from "@mui/material";
import MenuAppBar from "../components/MenuAppBar/MenuAppBar";
import { InputRender } from "../components/Input/InputRender";
import AddIcon from "@mui/icons-material/Add";
import { ButtonStyled } from "../components/Button/Button";

export function AddProduct() {
  const [productName, setProductName] = useState("");
  const [productTypeId, setProductTypeId] = useState("");

  const handleAdd = () => {
    axios
      .post(
        "http://localhost:8080/product",
        {
          name: productName,
          type_id: productTypeId,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <MenuAppBar />

      <Box display="flex" mt={10} justifyContent="center" minHeight="100vh">
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} sm={8} md={8}>
            <Paper elevation={3}>
              <Box p={8}>
                <Typography
                  variant="h4"
                  gutterBottom
                  sx={{ textAlign: "left", fontWeight: "600" }}
                >
                  Cadastro de produtos
                </Typography>

                <InputRender
                  placeholder="Nome do produto"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                />

                <div style={{ display: "flex", alignItems: "center" }}>
                  <InputRender
                    placeholder="Tipo"
                    value={productTypeId}
                    onChange={(e) => setProductTypeId(e.target.value)}
                  />

                  <IconButton aria-label="Adicionar tipo de produto">
                    <AddIcon />
                  </IconButton>
                </div>

                <ButtonStyled
                  handler={handleAdd}
                  variant="contained"
                  color="primary"
                  title={"Adicionar produto"}
                />
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
