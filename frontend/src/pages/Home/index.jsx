import { Box, Grid, Paper, Typography } from "@mui/material";
import { Header } from "./Components/Header";
import React, { useState } from "react";
import styles from "./index.module.scss";
import MenuAppBar from "../../components/MenuAppBar/MenuAppBar";
import TabsRender from "components/Tabs/TabsRender";
import { ViewTableProduct } from "pages/View/ViewTableProduct";
import { ViewTableProductType } from "pages/View/ViewTableProductType";

export function Home() {
  const [valueTab, setValueTab] = useState(0);

  const handleChange = (event, newValue) => {
    setValueTab(newValue);
  };

  const tabsItems = [
    {
      ariaControls: "products",
      id: 0,
      label: "Produtos",
    },
    {
      ariaControls: "types",
      id: 1,
      label: "Tipos de produto",
    },
    {
      ariaControls: "sales",
      id: 2,
      label: "Vendas",
    },
  ];

  const returnTab = (indexTab) => {
    switch (indexTab) {
      case 0:
        return <ViewTableProduct />;
      case 1:
        return <ViewTableProductType />;
      case 2:
        return "teste 3";
      default:
        return "";
    }
  };

  return (
    <Box className={styles.home}>
      <MenuAppBar />

      <Header />

      <Grid container className={styles.homeTable}>
        <Grid item md={12} xs={12}>
          <Paper sx={{ borderRadius: "20px", pb: "50px" }}>
            <Typography
              variant="h5"
              gutterBottom
              p={4}
              sx={{ color: "#00A091", textAlign: "left", fontWeight: "600" }}
            >
              Visualização
            </Typography>
            <Paper
              sx={{
                border: "1px solid #e0e0e0",
                borderRadius: "20px",
                p: 1,
                m: "0px 30px 0px 30px",
              }}
            >
              <TabsRender
                handleChange={handleChange}
                orientation="horizontal"
                sx={{ mt: 1 }}
                tabsItems={tabsItems}
                value={valueTab}
              >
                <Box sx={{ margin: "15px 10px 0 10px" }}>
                  {returnTab(valueTab)}
                </Box>
              </TabsRender>
            </Paper>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
