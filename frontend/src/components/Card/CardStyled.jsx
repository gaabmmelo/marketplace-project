import { Box, Icon, Paper } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import React from "react";
import styled from "@emotion/styled";
import styles from "./index.css";

export default function CardStyled({
  description,
  srcImage,
  title,
  redirectPage,
}) {
  const Card = styled(Paper)(({ theme }) => ({
    borderRadius: "16px",
    boxShadow: "0 3px 20px 0 #0000001F",
    padding: "16px 16px 8px 16px",
    width: "290px",
  }));

  return (
    <Card>
      <Box textAlign="center">
        <img alt="Icon" src={srcImage} width={186} />
      </Box>

      <Box display="flex" flexDirection="column" gap={3}>
        <Box className={styles.boxTituloCardFuncionalidade}>
          <Box onClick={redirectPage}>{title}</Box>

          <Box>
            <Icon
              icon={
                <AddCircleIcon
                  color="secondary"
                  sx={{ height: "50px", width: "50px" }}
                />
              }
              tooltip="Solicitar"
            />
          </Box>
        </Box>

        <Box>{description}</Box>
      </Box>
    </Card>
  );
}
