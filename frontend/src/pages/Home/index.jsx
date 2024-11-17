import { Alert, Box, Grid, Paper, Typography } from "@mui/material";
import { Header } from "./Components/Header";
import React, { useState } from "react";
import styles from "./index.module.scss";
import MenuAppBar from "../../components/MenuAppBar/MenuAppBar";
import TabsRender from "components/Tabs/TabsRender";
import { ViewTableProduct } from "pages/View/ViewTableProduct";
import { ViewTableProductType } from "pages/View/ViewTableProductType";
import { ViewTableProductSale } from "pages/View/ViewTableProductSale";
import Footer from "components/Footer/Footer";

export function Home() {
  const [valueTab, setValueTab] = useState(0);

  const handleChange = (event, newValue) => {
    setValueTab(newValue);
  };

  const tabsItems = [
    {
      ariaControls: "types",
      id: 0,
      label: "Tipos de produto",
    },
    {
      ariaControls: "products",
      id: 1,
      label: "Produtos",
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
        return <ViewTableProductType />;
      case 1:
        return <ViewTableProduct />;
      case 2:
        return <ViewTableProductSale />;
      default:
        return "";
    }
  };

  return (
    <>
      <Box className={styles.home}>
        <MenuAppBar />

        <Header />

        <Grid container className={styles.homeTable}>
          <Grid item md={12} xs={12}>
            <Paper sx={{ borderRadius: "20px", pb: "50px" }}>
              <Typography
                variant="h5"
                gutterBottom
                pl={4}
                pt={4}
                pb={1}
                pr={4}
                sx={{ color: "#00A091", textAlign: "left", fontWeight: "600" }}
              >
                Visualização
              </Typography>

              <Alert
                sx={{
                  borderRadius: "20px",
                  fontSize: "16px",
                  marginLeft: 4,
                  marginRight: 4,
                  marginBottom: 3,
                  justifyContent: "left",
                  width: "30%",
                }}
                severity="info"
              >
                Navegue entre as tabelas de tipos de produto, produtos e vendas!
              </Alert>

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
      <Footer />
    </>
  );
}
