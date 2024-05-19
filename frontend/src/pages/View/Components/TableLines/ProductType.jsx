import { TableCell, TableRow } from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import React from "react";
import Icon from "components/Icon";

export function ProductType({
  item,
  edicao,
  exclusao,
  handleEdicao,
  callbackExcluir,
}) {
  return (
    <TableRow>
      <TableCell>#T00{item.id}</TableCell>

      <TableCell>{item.product_type}</TableCell>

      <TableCell>{item.tax_percentage}</TableCell>

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
