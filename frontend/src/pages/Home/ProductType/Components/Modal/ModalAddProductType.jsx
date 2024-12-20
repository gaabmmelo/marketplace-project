import "./index.scss";
import { Grid, InputAdornment, Modal } from "@mui/material";
import React, { useState } from "react";
import { ButtonStyled } from "components/Button/Button";
import { ModalTitle } from "./ModalTitle";
import axios from "axios";
import { Label } from "components/Input/Label";
import { InputRender } from "components/Input/InputRender";
import { useFormatCurrency } from "hooks/useFormatCurrency";
import { AlertStyled } from "components/Alert/Alert";

export function ModalAddProductType({
  handleClose,
  open,
  setShowMessage,
  product,
}) {
  const { formatCurrency } = useFormatCurrency();

  const [productType, setProductType] = useState({
    product_type: "",
    tax_percentage: "",
  });

  React.useEffect(() => {
    if (product) {
      setProductType({
        product_type: product.product_type || "",
        tax_percentage: product.tax_percentage || "",
      });
    } else {
      setProductType({
        product_type: "",
        tax_percentage: "",
      });
    }
  }, [product]);

  const handleChange = (attribute, value) => {
    setProductType({
      ...productType,
      [attribute]: value,
    });
  };

  const handleSave = async () => {
    try {
      const valueWithoutPoints = productType.tax_percentage.replace(/\./g, "");
      const formattedValue = valueWithoutPoints.replace(",", ".");

      const url = product
        ? `http://localhost:8080/products_type/${product.id}`
        : "http://localhost:8080/products_type";

      const method = product ? "put" : "post";

      console.log(productType);

      await axios[method](
        url,
        {
          ...productType,
          tax_percentage: formattedValue,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setProductType({
        product_type: "",
        tax_percentage: "",
      });
      handleClose();
      //setShowMessage(true);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Modal onClose={handleClose} open={open}>
      <Grid className="modal" container padding={3}>
        <ModalTitle
          title={product ? "Editar tipo de produto" : "Novo tipo de produto"}
        />

        <Grid item xs={12} mt={2}>
          <Label htmlFor="product_type" label="Nome do tipo" />

          <InputRender
            fullWidth
            id="product_type"
            inputProps={{ "aria-label": "simple-tabpanel" }}
            onChange={(evt) => handleChange("product_type", evt.target.value)}
            placeholder="Informe o nome do tipo do produto"
            sx={{
              input: {
                "&::placeholder": {
                  color: "#667085",
                  fontWeight: "500",
                  opacity: 1,
                },
                padding: "10px",
              },
              marginBottom: "1em",
            }}
            value={productType.product_type}
          />

          <Label htmlFor="product_type" label="Valor do imposto" />

          <InputRender
            placeholder="Valor do imposto"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">R$</InputAdornment>
              ),
              sx: {
                "& input": {
                  textAlign: "right",
                },
                "&::placeholder": {
                  color: "#667085",
                  fontWeight: "500",
                  opacity: 1,
                },
              },
            }}
            onChange={(evt) =>
              handleChange("tax_percentage", formatCurrency(evt.target.value))
            }
            type="text"
            value={productType.tax_percentage}
          />
        </Grid>

        <Grid item textAlign="right" xs={12}>
          <ButtonStyled
            color="secondary"
            size="large"
            onClick={handleClose}
            title="Cancelar"
            variant="outlined"
          />

          <ButtonStyled
            color="primary"
            handler={handleSave}
            size="large"
            title={product ? "Salvar" : "Adicionar"}
            variant="contained"
          />
        </Grid>
      </Grid>
    </Modal>
  );
}
