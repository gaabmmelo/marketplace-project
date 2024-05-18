import { Box, Grid, Paper } from "@mui/material";
import { Header } from "./Components/Header";
import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import MenuAppBar from "../../components/MenuAppBar/MenuAppBar";
import { TblPrimary, useTable } from "components/TableServerSide";
import axios from "axios";
import { ProductLine } from "./Components/ViewProducts/ProductLine";

const headCells = [
  {
    id: "id",
    label: "Identificador",
  },
  {
    id: "product_name",
    label: "Nome do produto",
  },
  {
    id: "product_type_id",
    label: "Tipo de produto",
  },
  {
    disableSorting: true,
    id: "editar",
    label: "Editar",
  },
  {
    disableSorting: true,
    id: "excluir",
    label: "Excluir",
  },
];

export function Home() {
  const [products, setProducts] = useState([]);

  const table = useTable(products ?? [], headCells, products.length ?? 0);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get("http://localhost:8080/product", {
          headers: {
            "Content-Type": "application/json",
          },
        });
        setProducts(response.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    getProducts();
  }, []);

  return (
    <Box className={styles.home}>
      <MenuAppBar />

      <Header />

      <Grid container className={styles.homeTable}>
        <Grid item md={8} xs={8}>
          <Paper sx={{ borderRadius: "20px" }}>
            <TblPrimary hasPagination table={table}>
              {table?.recordsAfterPagingAndSorting()?.map((product) => (
                <ProductLine
                  // callbackExcluirPrototipoIdeia={deletarPrototipoIdeia}
                  // handleEdicao={() => handleEdicao(prototipo)}
                  item={product}
                  key={product.id}
                />
              ))}
            </TblPrimary>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
