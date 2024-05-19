import { TableCell, TableRow } from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import React, { useEffect } from "react";
import Icon from "components/Icon";
import { ButtonStyled } from "components/Button/Button";

export function TableLineProductsSales({
  item,
  handleEdicao,
  handleRemoveProduct,
}) {
  return (
    <TableRow>
      <TableCell>{item.product_id}</TableCell>

      <TableCell>{item.product_name}</TableCell>

      <TableCell>{item.product_quantity}</TableCell>

      <TableCell>{item.total_purchase}</TableCell>

      <TableCell>{item.total_tax}</TableCell>

      <TableCell>
        <Icon
          //callback={() => handleEdicao(item)}
          icon={<EditOutlinedIcon />}
          tooltip="Editar"
        />
      </TableCell>

      <TableCell>
        <ButtonStyled
          handler={() => handleRemoveProduct(item.id)}
          variant="contained"
          color="secondary"
          title={"Remover"}
        />
      </TableCell>
    </TableRow>
  );
}
