import { TableCell, TableRow } from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import React from "react";
import Icon from "components/Icon";
import { useFormatCurrency } from "hooks/useFormatCurrency";
import DeleteIcon from "@mui/icons-material/Delete";

export function ProductLine({ item, handleEdit, handleRemove }) {
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
          callback={() => handleEdit(item)}
          icon={<EditOutlinedIcon />}
          tooltip="Editar"
        />
      </TableCell>

      <TableCell>
        <Icon
          callback={() => handleRemove(item)}
          icon={<DeleteIcon />}
          tooltip="Excluir"
        />
      </TableCell>
    </TableRow>
  );
}
