import React, { useEffect, useState } from "react";
import { Box, Grid, MenuItem, Paper, Typography } from "@mui/material";
import axios from "axios";
import { ButtonStyled } from "components/Button/Button";
import { InputRender } from "components/Input/InputRender";
import { Label } from "components/Input/Label";
import MenuAppBar from "components/MenuAppBar/MenuAppBar";
import { TableProductsSales } from "./TableProductsSales";
import InputSelect from "components/Input/InputSelect";
import { useFormatCurrency } from "hooks/useFormatCurrency";

export function AddSale() {
  const { formatCurrency } = useFormatCurrency();
  const [products, setProducts] = useState([]);

  const [sale, setSale] = useState({
    product_id: "",
    product_type_id: "",
    product_quantity: "",
    total_purchase: "",
    total_tax: "",
  });

  const [soldProducts, setSoldProducts] = useState([]);
  const [productSelected, setProductSelected] = useState("");

  const handleChange = (attribute, value) => {
    setSale({
      ...sale,
      [attribute]: value,
    });
  };

  const handleAddProduct = () => {
    const newProduct = {
      id: Date.now(),
      product_id: productSelected,
      product_name:
        products.find((product) => product.id === productSelected)
          ?.product_name ?? "",
      product_quantity: sale.product_quantity,
      total_purchase: sale.total_purchase,
      total_tax: sale.total_tax,
    };
    setSoldProducts([...soldProducts, newProduct]);
    setSale({
      product_id: "",
      product_name: "",
      product_type_id: "",
      product_quantity: "",
      total_purchase: "",
      total_tax: "",
    });
  };

  const handleRemoveProduct = (productId) => {
    const updatedProducts = soldProducts.filter(
      (product) => product.id !== productId
    );
    setSoldProducts(updatedProducts);
  };

  useEffect(() => {
    axios
      .get("http://localhost:8080/products")
      .then((response) => {
        setProducts(response.data);
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
                  Venda de produtos
                </Typography>

                <Grid container spacing={2} alignItems={"flex-end"}>
                  <Grid item xs={6}>
                    <Label label="Produto" />
                    <InputSelect
                      onChange={(e) => setProductSelected(e.target.value)}
                      value={productSelected}
                      sx={{ textAlign: "left" }}
                      label={"Selecione o tipo do produto"}
                    >
                      {products.map((option) => (
                        <MenuItem key={option.id} value={option.id}>
                          Identificador: #00{option.id} | Nome do produto:{" "}
                          {option.product_name}
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
                    handler={handleAddProduct}
                    variant="contained"
                    color="primary"
                    title={"Adicionar Produto"}
                  />
                </Grid>
              </Box>

              <Grid
                container
                mt={4}
                alignItems={"flex-end"}
                justifyContent={"center"}
              >
                {/* O sistema deve apresentar o valor de cada item multiplicado pela quantidade adquirida;
                - quantidade pago de imposto em cada item
                - um totalizador do valor da compra
                - um totalizador do valor dos impostos;*/}
                <Grid item xs={12} sm={10} md={10} mb={8}>
                  <Paper>
                    <TableProductsSales
                      handleRemoveProduct={handleRemoveProduct}
                      soldProducts={soldProducts}
                    />
                  </Paper>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
