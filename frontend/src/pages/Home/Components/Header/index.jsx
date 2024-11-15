import { Box, Grid } from "@mui/material";
import { GroupedCards } from "./Components/Cards/GroupedCards";
import { Description } from "./Components/Description";
import React, { useState } from "react";
import styles from "../../index.module.scss";
import { ModalAddProductType } from "pages/Home/ProductType/Components/Modal/ModalAddProductType";
import AlertStyled from "components/Alert/Alert";

export function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [modalOpen, setModalOpen] = useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOpenModal = (modalName) => {
    setModalOpen(modalName);
    handleClose();
  };

  const handleCloseModal = () => {
    setModalOpen(null);
  };

  const [showMessage, setShowMessage] = useState(false);

  return (
    <>
      <Box
        sx={{
          color: "#000",
          position: "relative",
          zIndex: 1,
        }}
      >
        <Box className={styles.backgroundContainerHeader} />

        <Grid container flexWrap={"nowrap"} padding="25px 40px 40px 40px">
          <Description />

          <GroupedCards handleOpenModal={handleOpenModal} />
        </Grid>
      </Box>
      <ModalAddProductType
        setShowMessage={setShowMessage}
        handleClose={handleCloseModal}
        open={modalOpen === "addTypeProduct"}
      />
      {showMessage && (
        <AlertStyled
          text="teste"
          snackbarVisibility={showMessage}
          setSnackbarVisibility={setShowMessage}
        />
      )}
    </>
  );
}
