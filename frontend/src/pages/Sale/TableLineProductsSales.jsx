import { TableCell, TableRow } from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import React from "react";
import Icon from "components/Icon";
import { ButtonStyled } from "components/Button/Button";

export function TableLineProductsSales({
  item,
  handleEdicao,
  handleRemoveProduct,
}) {
  return (
    <TableRow>
      <TableCell>{item.product_name}</TableCell>

      <TableCell>
        {item.product_type_id} - {item.product_type}
      </TableCell>

      <TableCell>{item.product_quantity}</TableCell>

      <TableCell>{item.product_value}</TableCell>

      <TableCell>R$ {item.multi_value_quantity}</TableCell>

      <TableCell>{item.total_tax}</TableCell>

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
