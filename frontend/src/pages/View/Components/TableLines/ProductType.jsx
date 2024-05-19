import { TableCell, TableRow } from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import React from "react";
import Icon from "components/Icon";
import { useFormatCurrency } from "hooks/useFormatCurrency";

export function ProductType({
  item,
  edicao,
  exclusao,
  handleEdicao,
  callbackExcluir,
}) {
  const { formatCurrency } = useFormatCurrency();
  return (
    <TableRow>
      <TableCell>
        <b>#TP00{item.id}</b>
      </TableCell>

      <TableCell>{item.product_type}</TableCell>

      <TableCell>R$ {formatCurrency(item.tax_percentage)}</TableCell>

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
