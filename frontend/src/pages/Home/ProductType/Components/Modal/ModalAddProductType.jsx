import "./index.scss";
import {
  Grid,
  InputAdornment,
  InputLabel,
  Modal,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { ButtonStyled } from "components/Button/Button";
import { ModalTitle } from "./ModalTitle";
import axios from "axios";

export function ModalAddProductType({ handleClose, open }) {
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

  const formatarMoeda = (value) => {
    const valorFormatado = value.replace(/\D/gu, "");

    const valorFormatado1 = valorFormatado.replace(
      /(?<temp2>\d{1})(?<temp1>\d{1,2})$/u,
      "$1,$2"
    );

    const valorFormatado2 = valorFormatado1.replace(
      /(?<temp2>\d)(?=(?<temp1>\d{3})+(?!\d))/gu,
      "$1."
    );

    const valorFinal = `${valorFormatado2}`;

    return valorFinal;
  };

  const handleAdd = async () => {
    try {
      const formattedTaxPercentage = parseFloat(
        productType.tax_percentage.replace(",", ".")
      ).toFixed(2);

      axios
        .post(
          "http://localhost:8080/product_type",
          {
            ...productType,
            tax_percentage: formattedTaxPercentage,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          console.log(response.data);
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
          <InputLabel
            htmlFor="product_type"
            sx={{
              color: "#003641",
              fontWeight: "bolder",
              margin: "25px 0px 6px",
            }}
          >
            Nome do tipo
          </InputLabel>

          <TextField
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

          <TextField
            fullWidth
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
              handleChange("tax_percentage", formatarMoeda(evt.target.value))
            }
            type="text"
            value={formatarMoeda(productType.tax_percentage)}
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
