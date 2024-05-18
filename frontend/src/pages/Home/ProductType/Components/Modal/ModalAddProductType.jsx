import "./index.scss";
import { Grid, InputLabel, Modal, TextField } from "@mui/material";
import React, { useState } from "react";
import { ButtonStyled } from "components/Button/Button";
import { ModalTitle } from "./ModalTitle";
import InputCurrency from "components/Input/InputCurrency";
import axios from "axios";

export function ModalAddProductType({ handleClose, open }) {
  const [productType, setProductType] = useState({});

  const handleChange = (attribute, value) => {
    if (attribute === "tax_percentage") {
      const valor = value.replace(/\./g, "");
      const valorFormatado = parseFloat(valor.replace(",", ".")).toFixed(2);
      console.log(valorFormatado);

      setProductType({
        ...productType,
        tax_percentage: valorFormatado,
      });
    } else {
      setProductType({
        ...productType,
        [attribute]: value,
      });
    }
  };

  const handleAdd = async (type) => {
    try {
      if (type.id) {
        //await atualizarReferencia(referencia);
      } else {
        axios
          .post(
            "http://localhost:8080/product_type",
            {
              ...productType,
            },
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          )
          .then((response) => {
            console.log(response.data);
            setProductType({});
            handleClose();
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      }
    } catch (error) {
      console.log("tttt");
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
            value={productType.product_type || ""}
          />

          <InputCurrency
            fullWidth
            placeholder={"Valor do imposto"}
            value={productType.tax_percentage || ""}
            onChange={(value) => handleChange("tax_percentage", value)}
          />
        </Grid>

        <Grid item textAlign="right" xs={12}>
          <ButtonStyled
            color="secondary"
            size="large"
            onClick={handleClose}
            title={"Cancelar"}
            variant="outlined"
          />

          <ButtonStyled
            color="primary"
            handler={() => handleAdd(productType)}
            size="large"
            title={"Adicionar"}
            variant="contained"
          />
        </Grid>
      </Grid>
    </Modal>
  );
}
