import { TableCell, TableRow } from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import React from "react";
import Icon from "components/Icon";
import { ButtonStyled } from "components/Button/Button";
import { useFormatCurrency } from "hooks/useFormatCurrency";

export function TableLineProductsSales({
  item,
  handleEdicao,
  handleRemoveProduct,
}) {
  const { formatCurrency } = useFormatCurrency();
  return (
    <TableRow>
      <TableCell>{item.product_name}</TableCell>

      <TableCell>
        {item.product_type_id} - {item.product_type}
      </TableCell>

      <TableCell>R$ {formatCurrency(item.product_type_tax)}</TableCell>

      <TableCell>{item.product_quantity}</TableCell>

      <TableCell>R$ {formatCurrency(item.product_value)}</TableCell>

      <TableCell>R$ {formatCurrency(item.multi_value_quantity)}</TableCell>

      <TableCell>R$ {formatCurrency(item.multi_value_quantity_tax)}</TableCell>

      <TableCell>R$ {formatCurrency(item.total_purchase_item)}</TableCell>

      <TableCell>
        <Icon
          //callback={() => handleEdicao(item)}
          icon={<EditOutlinedIcon />}
          tooltip="Editar"
        />
      </TableCell>

      <TableCell>
        <Icon
          callback={() => handleRemoveProduct(item.id)}
          icon={<DeleteOutlineIcon />}
          tooltip="Editar"
        />
      </TableCell>
    </TableRow>
  );
}
