import { TableCell, TableRow } from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import React from "react";
import Icon from "components/Icon";

export function ProductSaleLine({
  item,
  edicao,
  exclusao,
  handleEdicao,
  callbackExcluir,
}) {
  return (
    <TableRow>
      <TableCell>#V000{item.id}</TableCell>

      <TableCell>{item.product_id}</TableCell>

      <TableCell>{item.product_type_id}</TableCell>

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
        {/*<Excluir
          callback={() => callbackExcluir(item.id)}
          />*/}
      </TableCell>
    </TableRow>
  );
}
