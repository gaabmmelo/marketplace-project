import { Box, CircularProgress } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";

export default function Loading({ color }) {
  return (
    <Box
      sx={{
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        padding: "40px 0",
      }}
    >
      <CircularProgress color={color} />
    </Box>
  );
}
