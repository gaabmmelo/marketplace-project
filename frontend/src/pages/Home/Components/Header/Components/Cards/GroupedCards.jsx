import { CardFunctionality } from "./CardFunctionality";
import { Grid } from "@mui/material";
import React from "react";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import CategoryIcon from "@mui/icons-material/Category";
import SellIcon from "@mui/icons-material/Sell";
import { useNavigate } from "react-router-dom";

export function GroupedCards({ handleOpenModal }) {
  const navigate = useNavigate();

  const redirectPage = (url) => navigate(url);

  return (
    <Grid container gap={3} item justifyContent="end" md={7} xs={12}>
      <CardFunctionality
        description="Adicione um novo produto!"
        redirectPage={() => redirectPage("/add_produto")}
        icon={<NoteAddIcon sx={{ fontSize: "100px" }} />}
        title="Novo produto"
      />

      <CardFunctionality
        description="Adicione um novo tipo de produto!"
        redirectPage={() => handleOpenModal("addTypeProduct")}
        icon={<CategoryIcon sx={{ fontSize: "100px" }} />}
        title="Tipo de produto"
      />

      <CardFunctionality
        description="Realizar uma venda"
        redirectPage={() => redirectPage("/rfis/criar")}
        icon={<SellIcon sx={{ fontSize: "100px" }} />}
        title="Nova venda"
      />
    </Grid>
  );
}
