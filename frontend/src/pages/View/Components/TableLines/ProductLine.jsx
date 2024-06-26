import { TableCell, TableRow } from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import React from "react";
import Icon from "components/Icon";
import { useFormatCurrency } from "hooks/useFormatCurrency";

export function ProductLine({ item, handleEdit }) {
  const { formatCurrency } = useFormatCurrency();
  return (
    <TableRow>
      <TableCell>
        <b>#P00{item.id}</b>
      </TableCell>

      <TableCell>{item.product_name}</TableCell>

      <TableCell>
        #TP{item.product_type_id} - {item.product_type}
      </TableCell>

      <TableCell>R$ {formatCurrency(item.product_value)} </TableCell>

      <TableCell>
        <Icon
          //callback={() => handleEdit(item)}
          icon={<EditOutlinedIcon />}
          tooltip="Editar"
        />
      </TableCell>
    </TableRow>
  );
}
