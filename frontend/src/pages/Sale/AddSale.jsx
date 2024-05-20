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
import { ChipTotal } from "./Components/ChipTotal";
import { useNavigate } from "react-router-dom";

export function AddSale() {
  const { formatCurrency } = useFormatCurrency();
  const [products, setProducts] = useState([]);

  const [productTypeId, setProductTypeId] = useState("");
  const [productType, setProductType] = useState("");
  const [productValue, setProductValue] = useState("");
  const [productTax, setProductTax] = useState("");

  const [soldProducts, setSoldProducts] = useState([]);
  const [productSelected, setProductSelected] = useState("");

  const navigate = useNavigate();
  const redirectPage = (url) => navigate(url);

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
    setProductValue(selectedProduct?.product_value ?? "");
    setProductTypeId(selectedProduct?.product_type_id ?? "");
    setProductType(selectedProduct?.product_type ?? "");
    setProductTax(selectedProduct?.tax_percentage ?? "");
  };

  const handleAddProduct = () => {
    const selectedProduct = products.find(
      (product) => product.id === productSelected
    );

    const parsedProductQuantity = parseFloat(sale.product_quantity);
    const parsedProductValue = parseFloat(selectedProduct?.product_value);
    const parsedTaxPercentage = parseFloat(selectedProduct?.tax_percentage);

    const multiValueQuantity = (
      parsedProductQuantity * parsedProductValue
    ).toFixed(2);

    const multiValueQuantityTax = (
      parsedProductQuantity * parsedTaxPercentage
    ).toFixed(2);

    const totalPurchaseItem = (
      parseFloat(multiValueQuantity) + parseFloat(multiValueQuantityTax)
    ).toFixed(2);

    const newProduct = {
      id: Date.now(),
      product_id: productSelected,
      product_name: selectedProduct?.product_name ?? "",
      product_value: selectedProduct?.product_value,
      product_type_id: selectedProduct?.product_type_id,
      product_type: selectedProduct?.product_type,
      product_type_tax: selectedProduct?.tax_percentage,
      product_quantity: sale.product_quantity,
      total_purchase: sale.total_purchase,
      total_tax: sale.total_tax,
      multi_value_quantity: multiValueQuantity,
      multi_value_quantity_tax: multiValueQuantityTax,
      total_purchase_item: totalPurchaseItem,
    };

    setSoldProducts([...soldProducts, newProduct]);

    setProductSelected("");
    setProductType("");
    setProductTypeId("");
    setProductValue("");
    setProductTax("");
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

  const handleAddSale = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8080/sales",
        {
          total_purchase: soldProducts
            .reduce((total, product) => {
              return total + parseFloat(product.total_purchase_item);
            }, 0)
            .toFixed(2),
          total_tax: soldProducts.reduce((totalTax, product) => {
            return totalTax + parseFloat(product.multi_value_quantity_tax);
          }, 0),
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      await handleAddSaleProducts(response.data.id);
      redirectPage("/");
    } catch (error) {
      console.error("Error adding sale:", error);
    }
  };

  const handleAddSaleProducts = async (saleId) => {
    try {
      await Promise.all(
        soldProducts.map(async (product) => {
          await axios.post(
            "http://localhost:8080/sales_product",
            {
              product_id: product.product_id,
              id_sale: saleId,
              product_quantity: product.product_quantity,
              product_value: product.product_value,
              tax_percentage: product.product_type_tax,
            },
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
        })
      );
    } catch (error) {
      console.error("Error adding products to sales_product:", error);
    }
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
                  <Grid item xs={8}>
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
                  <Grid item xs={4}>
                    <Label label="Quantidade do produto desejada" />

                    <InputRender
                      id="product_quantity"
                      inputProps={{ "aria-label": "simple-tabpanel" }}
                      onChange={(evt) =>
                        handleChange("product_quantity", evt.target.value)
                      }
                      placeholder={"Informe a quantidade desejada"}
                      type={"number"}
                      value={
                        sale.product_quantity >= 0 ? sale.product_quantity : ""
                      }
                    />
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
                          value={`#TP ${productTypeId} - ${productType}`}
                        />
                      </Grid>
                      <Grid item xs={4}>
                        <Label label="Valor do imposto" />
                        <InputRender
                          disabled
                          value={`R$ ${formatCurrency(productTax)}`}
                        />
                      </Grid>
                    </>
                  ) : null}
                </Grid>

                <Grid
                  container
                  display={"flex"}
                  justifyContent={"flex-end"}
                  mt={2}
                >
                  <ButtonStyled
                    handler={handleAddProduct}
                    variant="contained"
                    disabled={
                      productSelected === "" || sale.product_quantity === ""
                    }
                    color="primary"
                    title={"Adicionar produto"}
                  />
                </Grid>

                <Grid
                  container
                  mb={8}
                  mt={5}
                  alignItems={"center"}
                  justifyContent={"center"}
                >
                  <Paper sx={{ border: "1px solid #d9d8d8", padding: 4 }}>
                    <ChipTotal soldProducts={soldProducts} />

                    <TableProductsSales
                      handleRemoveProduct={handleRemoveProduct}
                      soldProducts={soldProducts}
                    />
                  </Paper>
                </Grid>

                <Grid
                  container
                  display={"flex"}
                  justifyContent={"center"}
                  mt={1}
                >
                  <ButtonStyled
                    handler={handleAddSale}
                    variant="contained"
                    disabled={soldProducts.length <= 0}
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
