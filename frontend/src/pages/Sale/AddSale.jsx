import React, { useEffect, useState } from "react";
import { Box, Grid, Input, MenuItem, Paper, Typography } from "@mui/material";
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

  const [productTypeId, setProductTypeId] = useState("");
  const [productType, setProductType] = useState("");
  const [productValue, setProductValue] = useState("");

  const [soldProducts, setSoldProducts] = useState([]);
  const [productSelected, setProductSelected] = useState("");

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

  const handleProductSelect = (productId) => {
    const selectedProduct = products.find(
      (product) => product.id === productId
    );
    setProductSelected(productId);
    setProductType(selectedProduct?.product_type ?? "");
    setProductTypeId(selectedProduct?.product_type_id ?? "");
    setProductValue(selectedProduct?.product_value ?? "");
  };

  const handleAddProduct = () => {
    console.log(sale);

    const selectedProduct = products.find(
      (product) => product.id === productSelected
    );

    const multiValueQuantity = (
      sale.product_quantity * selectedProduct?.product_value
    ).toFixed(2);
    const multiValueQuantityFormatted = formatCurrency(multiValueQuantity);

    const newProduct = {
      id: Date.now(),
      product_id: productSelected,
      product_name: selectedProduct?.product_name ?? "",
      product_value: formatCurrency(selectedProduct?.product_value),
      product_type_id: productTypeId,
      product_type: productType?.product_type,
      //product_type_tax: productType?.tax_percentage,
      product_quantity: sale.product_quantity,
      total_purchase: sale.total_purchase,
      total_tax: sale.total_tax,
      multi_value_quantity: multiValueQuantityFormatted,
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
                  <Grid item xs={12}>
                    <Label label="Produto" />
                    <InputSelect
                      onChange={(e) => handleProductSelect(e.target.value)}
                      value={productSelected}
                      sx={{ textAlign: "left", mt: "10px", mb: "20px" }}
                      label={"Selecione o tipo do produto"}
                    >
                      {products.map((option) => (
                        <MenuItem key={option.id} value={option.id}>
                          <b>Id: #00{option.id}</b>&nbsp;| Nome do produto:{" "}
                          {option.product_name}
                        </MenuItem>
                      ))}
                    </InputSelect>
                  </Grid>
                </Grid>

                <Grid container spacing={2} alignItems={"flex-end"}>
                  {productSelected ? (
                    <>
                      <Grid item xs={4}>
                        <Label label="Valor do produto" />
                        <InputRender
                          disabled
                          value={`R$ ${formatCurrency(productValue)}`}
                        />
                      </Grid>
                      <Grid item xs={4}>
                        <Label label="Tipo do produto" />
                        <InputRender
                          disabled
                          value={`#TP ${productTypeId} - ${productType?.product_type}`}
                        />
                      </Grid>
                      <Grid item xs={4}>
                        <Label label="Valor do imposto" />
                        <InputRender
                          disabled
                          value={`R$ ${formatCurrency(
                            productType?.tax_percentage
                          )}`}
                        />
                      </Grid>
                      <Grid item xs={3}>
                        <Label label="Quantidade do produto desejada" />

                        <InputRender
                          id="product_quantity"
                          inputProps={{ "aria-label": "simple-tabpanel" }}
                          onChange={(evt) =>
                            handleChange("product_quantity", evt.target.value)
                          }
                          type={"number"}
                          value={
                            sale.product_quantity >= 0
                              ? sale.product_quantity
                              : ""
                          }
                        />
                      </Grid>
                    </>
                  ) : null}
                </Grid>

                <Grid container mt={4}>
                  <ButtonStyled
                    handler={handleAddProduct}
                    variant="contained"
                    color="primary"
                    title={"Adicionar Produto"}
                  />
                </Grid>

                <Grid
                  item
                  mb={8}
                  mt={5}
                  alignItems={"flex-end"}
                  justifyContent={"center"}
                >
                  <Paper>
                    <TableProductsSales
                      handleRemoveProduct={handleRemoveProduct}
                      soldProducts={soldProducts}
                    />
                  </Paper>
                </Grid>
              </Box>

              {/* o valor de cada item multiplicado pela quantidade adquirida;
                - quantidade pago de imposto em cada item

                - um totalizador do valor da compra
                - um totalizador do valor dos impostos;*/}
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
