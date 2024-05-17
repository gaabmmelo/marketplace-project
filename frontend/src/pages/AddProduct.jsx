import axios from "axios";
import { Box, Grid, IconButton, Typography } from "@mui/material";
import MenuAppBar from "../components/MenuAppBar/MenuAppBar";
import { InputRender } from "../components/Input/InputRender";
import AddIcon from "@mui/icons-material/Add";
import { ButtonStyled } from "../components/Button/Button";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

export function AddProduct() {
  const StyledPaper = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    borderRadius: "20px",
    padding: theme.spacing(2),
    marginTop: "10px",
    maxWidth: "100%",
    color: theme.palette.text.primary,
  }));

  const handleAdd = () => {
    console.log("aqui");
    axios
      .post("http://localhost:8080/product", {
        id: 3,
        name: "teste",
        type_id: 1,
      })
      .then((response) => {
        console.log(response.data);
      });
  };

  return (
    <>
      <MenuAppBar />

      <Grid container direction="column" padding={2}>
        <Box alignContent={"center"}></Box>
      </Grid>

      <Box justifyContent="center" sx={{ width: "100%" }}>
        <Grid
          alignItems="center"
          container
          direction="row"
          justifyContent="center"
          spacing={3}
          sx={{ marginTop: "30px" }}
        >
          <Grid item sx={{ padding: "0 0 40px!important" }} xs={5}>
            <Typography
              variant="h4"
              gutterBottom
              sx={{ textAlign: "left", fontWeight: "600" }}
            >
              Cadastro de produtos
            </Typography>

            <InputRender placeholder="Nome do produto" />

            <div styles="display:flex">
              <InputRender placeholder="Tipo" />

              <IconButton aria-label="Adicionar tipo de produto">
                <AddIcon />
              </IconButton>
            </div>

            <ButtonStyled handler={handleAdd} title={"Adicionar produto"} />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
