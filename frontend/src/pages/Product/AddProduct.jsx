import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Typography,
} from "@mui/material";
import MenuAppBar from "../../components/MenuAppBar/MenuAppBar";
import { InputRender } from "../../components/Input/InputRender";
import { ButtonStyled } from "../../components/Button/Button";
import InputSelect from "components/Input/InputSelect";
import { Label } from "components/Input/Label";

export function AddProduct() {
  const [product, setProduct] = useState({
    product_name: "",
    product_value: "",
  });

  const [productTypeId, setProductTypeId] = useState("");
  const [productTypes, setProductTypes] = useState([]);

  const handleChange = (attribute, value) => {
    setProduct({
      ...product,
      [attribute]: value,
    });
  };

  const handleAdd = () => {
    axios
      .post(
        "http://localhost:8080/product",
        {
          ...product,
          product_type_id: productTypeId,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        setProduct({
          product_name: "",
          product_value: "",
        });
        setProductTypeId("");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    axios
      .get("http://localhost:8080/product_type")
      .then((response) => {
        setProductTypes(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

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
                  Cadastro de produtos
                </Typography>

                <Grid container spacing={2} alignItems={"flex-end"}>
                  <Grid item xs={6}>
                    <Label label="Nome do produto" />
                    <InputRender
                      id="product_name"
                      placeholder="Informe o nome do produto"
                      value={product.product_name}
                      onChange={(evt) =>
                        handleChange("product_name", evt.target.value)
                      }
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Label label="Valor do produto" />
                    <InputRender
                      id="product_value"
                      placeholder="Informe o nome do produto"
                      value={product.product_value}
                      onChange={(evt) =>
                        handleChange("product_value", evt.target.value)
                      }
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Label label="Tipo do produto" />
                    <InputSelect
                      onChange={(e) => setProductTypeId(e.target.value)}
                      value={productTypeId}
                      sx={{ textAlign: "left" }}
                      label={"Selecione o tipo do produto"}
                    >
                      {productTypes.map((option) => (
                        <MenuItem key={option.id} value={option.id}>
                          {" "}
                          Identificador: #00{option.id} | Tipo do produto:{" "}
                          {option.product_type} - Valor do imposto:{" "}
                          {option.tax_percentage}
                        </MenuItem>
                      ))}
                    </InputSelect>
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
                    title={"Adicionar produto"}
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
