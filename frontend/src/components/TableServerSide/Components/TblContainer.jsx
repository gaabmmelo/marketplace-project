import Loading from "../../Loading";
import PropTypes from "prop-types";
import React from "react";
import { Table } from "@mui/material";

export function TblContainer({ children, loading }) {
  if (loading) {
    return <Loading />;
  }

  return <Table>{children}</Table>;
}
