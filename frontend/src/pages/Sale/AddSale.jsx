import { Box, Grid, Paper, Typography } from "@mui/material";
import axios from "axios";
import { ButtonStyled } from "components/Button/Button";
import { InputRender } from "components/Input/InputRender";
import { Label } from "components/Input/Label";
import MenuAppBar from "components/MenuAppBar/MenuAppBar";
import React, { useState } from "react";

export function AddSale() {
  const [sale, setSale] = useState({
    product_id: "",
    product_type_id: "",
    product_quantity: "",
    total_purchase: "",
    total_tax: "",
  });

  const handleChange = (attribute, value) => {
    setSale({
      ...sale,
      [attribute]: value,
    });
  };

  const handleAdd = () => {
    axios
      .post(
        "http://localhost:8080/sale",
        {
          ...sale,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        setSale({
          product_id: "",
          product_type_id: "",
          product_quantity: "",
          total_purchase: "",
          total_tax: "",
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <MenuAppBar />

      <Box display="flex" mt={8} justifyContent="center" minHeight="100vh">
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} sm={10} md={10}>
            <Paper elevation={3} sx={{ borderRadius: "20px" }}>
              <Box p={8}>
                <Typography
                  variant="h4"
                  gutterBottom
                  sx={{ textAlign: "left", fontWeight: "600", mb: "40px" }}
                >
                  Venda de produtos
                </Typography>

                <Grid container spacing={2} alignItems={"flex-end"}>
                  <Grid item xs={6}>
                    <Label label="Produto" />
                    <InputRender
                      id="product_name"
                      placeholder="Selecione o produto"
                      value={sale.product_id}
                      onChange={(evt) =>
                        handleChange("product_name", evt.target.value)
                      }
                    />
                  </Grid>
                </Grid>

                <Grid
                  container
                  mt={4}
                  alignItems={"flex-end"}
                  justifyContent={"center"}
                >
                  <ButtonStyled
                    handler={handleAdd}
                    variant="contained"
                    color="primary"
                    title={"Realizar venda"}
                  />
                </Grid>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
