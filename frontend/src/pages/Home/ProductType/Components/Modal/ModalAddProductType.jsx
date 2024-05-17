import "./index.scss";
import { Grid, InputLabel, Modal, TextField } from "@mui/material";
import React, { useState } from "react";
import { TituloModal } from "./TituloModal";
import { ButtonStyled } from "components/Button/Button";

export function ModalAddProductType({ handleClose, open }) {
  const [referenciaAlterar, setReferenciaAlterar] = useState({});

  const handleChangeAlteracao = (atributo, valor) => {
    setReferenciaAlterar({
      ...referenciaAlterar,
      [atributo]: valor,
    });
  };

  const handleAdicionar = async (referencia) => {
    try {
      if (referencia.id) {
        //await atualizarReferencia(referencia);
      } else {
        //await adicionarReferencia(referencia);
      }
      setReferenciaAlterar({});
      handleClose();
    } catch (error) {
      //handleErroSnackbar(error);
    }
  };

  return (
    <Modal onClose={handleClose} open={open}>
      <Grid className="modal" container padding={3}>
        <TituloModal titulo="Adicionar novo tipo de produto" />

        <Grid item xs={12}>
          <InputLabel
            htmlFor="area"
            sx={{
              color: "#003641",
              fontWeight: "bolder",
              margin: "10px 0px 12px",
            }}
          >
            Nome do tipo
          </InputLabel>

          <TextField
            fullWidth
            id="link"
            inputProps={{ "aria-label": "simple-tabpanel" }}
            onChange={(evt) => handleChangeAlteracao("link", evt.target.value)}
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
            value={referenciaAlterar.link || ""}
          />
        </Grid>

        <Grid item textAlign="right" xs={12}>
          <ButtonStyled
            color="secondary"
            size="large"
            onClick={handleClose}
            title={"Cancelar"}
            styles={{ borderColor: "#f3f3f3", color: "#000" }}
            variant="outlined"
          />

          <ButtonStyled
            color="secondary"
            handler={() => handleAdicionar(referenciaAlterar)}
            size="large"
            styles={{
              backgroundColor: "#003641",
              fontWeight: "500",
              textTransform: "initial",
            }}
            title={"Adicionar"}
            variant="contained"
          />
        </Grid>
      </Grid>
    </Modal>
  );
}
