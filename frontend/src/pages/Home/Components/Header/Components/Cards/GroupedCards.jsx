import { CardFunctionality } from "./CardFunctionality";
import { Grid } from "@mui/material";
import React from "react";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import { useNavigate } from "react-router-dom";

export function GroupedCards() {
  const navigate = useNavigate();

  const redirectPage = (url) => navigate(url);

  return (
    <Grid container gap={3} item justifyContent="end" md={7} xs={12}>
      <CardFunctionality
        description="Adicione um novo produto!"
        redirectPage={() => redirectPage("/ideias/criar")}
        icon={<NoteAddIcon sx={{ fontSize: "100px" }} />}
        title="Novo produto"
      />

      <CardFunctionality
        description="Adicione um novo tipo de produto!"
        redirectPage={() => redirectPage("/rfis/criar")}
        icon={<NoteAddIcon sx={{ fontSize: "100px" }} />}
        title="Tipo de produto"
      />
    </Grid>
  );
}
