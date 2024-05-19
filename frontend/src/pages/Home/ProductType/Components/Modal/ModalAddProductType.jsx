import "./index.scss";
import { Grid, InputAdornment, Modal, TextField } from "@mui/material";
import React, { useState } from "react";
import { ButtonStyled } from "components/Button/Button";
import { ModalTitle } from "./ModalTitle";
import axios from "axios";
import { Label } from "components/Input/Label";
import { InputRender } from "components/Input/InputRender";
import { useFormatCurrency } from "hooks/useFormatCurrency";

export function ModalAddProductType({ handleClose, open }) {
  const { formatCurrency } = useFormatCurrency();
  const [productType, setProductType] = useState({
    product_type: "",
    tax_percentage: "",
  });

  const handleChange = (attribute, value) => {
    setProductType({
      ...productType,
      [attribute]: value,
    });
  };

  const handleAdd = async () => {
    try {
      const valueWithoutPoints = productType.tax_percentage.replace(/\./g, "");
      const formattedValue = valueWithoutPoints.replace(",", ".");

      axios
        .post(
          "http://localhost:8080/product_type",
          {
            ...productType,
            tax_percentage: formattedValue,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          setProductType({
            product_type: "",
            tax_percentage: "",
          });
          handleClose();
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <Modal onClose={handleClose} open={open}>
      <Grid className="modal" container padding={3}>
        <ModalTitle title="Novo tipo de produto" />

        <Grid item xs={12}>
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
            onChange={(evt) => handleChange("tax_percentage", evt.target.value)}
            type="text"
            value={formatCurrency(productType.tax_percentage)}
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
            handler={handleAdd}
            size="large"
            title="Adicionar"
            variant="contained"
          />
        </Grid>
      </Grid>
    </Modal>
  );
}
