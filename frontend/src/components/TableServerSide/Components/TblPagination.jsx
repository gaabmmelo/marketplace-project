import React from "react";
import { TablePagination } from "@mui/material";

export function TblPagination({ table }) {
  const {
    handleChangePage,
    handleChangeRowsPerPage,
    page,
    pages,
    rowsPerPage,
    totalRows,
  } = table;

  return (
    <TablePagination
      component="div"
      count={totalRows}
      onPageChange={handleChangePage}
      onRowsPerPageChange={handleChangeRowsPerPage}
      page={page}
      rowsPerPage={rowsPerPage}
      rowsPerPageOptions={pages}
    />
  );
}
