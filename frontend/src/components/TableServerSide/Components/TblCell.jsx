import React from "react";
import { TableCell } from "@mui/material";

export function TblCell({ align, children, colSpan, hidden }) {
  return hidden ? (
    ""
  ) : (
    <TableCell
      align={align}
      colSpan={colSpan}
      sx={{
        fontSize: 16,
        fontWeight: 600,
        padding: "8px",
      }}
    >
      {children}
    </TableCell>
  );
}
