import MenuAppBar from "../components/MenuAppBar/MenuAppBar";
import CardStyled from "../components/Card/CardStyled";
import { Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

export function Home() {
  const navigate = useNavigate();

  const redirectPage = (url) => navigate(url);

  return (
    <>
      <MenuAppBar />

      <Grid container padding={2} spacing={2}>
        <Grid item xs={4}>
          <CardStyled
            //description="Arcu est bibendum curabitur nulla."
            redirectPage={() => redirectPage("/produto")}
            //srcImage="/images/homologation-icon.svg"
            title="Novo produto"
          />
        </Grid>
        <Grid item xs={4}>
          aaa
        </Grid>
        <Grid item xs={4}>
          a
        </Grid>
      </Grid>
    </>
  );
}
