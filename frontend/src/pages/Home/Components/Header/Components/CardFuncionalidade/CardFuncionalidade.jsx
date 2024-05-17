/* eslint-disable react/jsx-max-depth */
import { Box, Paper } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Icon from "../../../../../../components/Icon";
import PropTypes from "prop-types";
import React from "react";
import styled from "@emotion/styled";
import styles from "../../../../index.module.scss";

export function CardFuncionalidade({ description, icon, title, redirectPage }) {
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
                  color="secondary"
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

CardFuncionalidade.propTypes = {
  description: PropTypes.string,
  redirectPage: PropTypes.func.isRequired,
  srcImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

CardFuncionalidade.defaultProps = {
  description: "",
};
