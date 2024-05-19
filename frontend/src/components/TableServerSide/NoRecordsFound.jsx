import { TableCell, TableRow } from "@mui/material";
import React from "react";

export default function NoRecordsFound({ colSpan, message }) {
  let countColunas = colSpan;

  if (countColunas === 0) {
    const table = document.querySelector("table");

    if (table) {
      countColunas = document.querySelectorAll("table tr th").length;
    }
  }

  return (
    <TableRow>
      <TableCell colSpan={countColunas} sx={{ textAlign: "center" }}>
        Nenhum registro encontrado.
      </TableCell>
    </TableRow>
  );
}
