/* eslint-disable react/jsx-max-depth */
import { Box, Paper } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Icon from "../../../../../../components/Icon";
import React from "react";
import styled from "@emotion/styled";
import styles from "../../../../index.module.scss";

export function CardFunctionality({ description, icon, title, redirectPage }) {
  const Card = styled(Paper)(({ theme }) => ({
    borderRadius: "16px",
    boxShadow: "0 3px 20px 0 #0000001F",
    padding: "16px 16px 8px 16px",
    width: "290px",
  }));

  return (
    <Card>
      <Box textAlign="center">{icon}</Box>

      <Box display="flex" flexDirection="column" gap={3}>
        <Box className={styles.boxTituloCardFuncionalidade}>
          <Box>{title}</Box>

          <Box>
            <Icon
              icon={
                <AddCircleIcon
                  color="#000"
                  sx={{ height: "50px", width: "50px" }}
                />
              }
              onClick={redirectPage}
              tooltip="Solicitar"
            />
          </Box>
        </Box>

        <Box sx={{ textAlign: "left", mb: 4 }}>{description}</Box>
      </Box>
    </Card>
  );
}
