import { TableCell, TableRow } from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import React from "react";
import Icon from "components/Icon";
import { useFormatCurrency } from "hooks/useFormatCurrency";

export function ProductSaleLine({ item }) {
  const { formatCurrency } = useFormatCurrency();
  return (
    <TableRow>
      <TableCell>
        <b>#V00{item.id}</b>
      </TableCell>

      <TableCell>R$ {formatCurrency(item.total_purchase)}</TableCell>

      <TableCell>R$ {formatCurrency(item.total_tax)}</TableCell>
    </TableRow>
  );
}
