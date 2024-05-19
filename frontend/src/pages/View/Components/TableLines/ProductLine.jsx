import { TableCell, TableRow } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import React from "react";
import Icon from "components/Icon";

export function ProductLine({
  item,
  edicao,
  exclusao,
  handleEdicao,
  callbackExcluirPrototipoIdeia,
}) {
  return (
    <TableRow>
      <TableCell>#000{item.id}</TableCell>

      <TableCell>{item.product_name}</TableCell>

      <TableCell>{item.product_type_id}</TableCell>

      <TableCell>
        <Icon
          //callback={() => handleEdicao(item)}
          icon={<EditOutlinedIcon />}
          tooltip="Editar"
        />
      </TableCell>

      <TableCell>
        {/*<ExcluirPrototipo
          callback={() => callbackExcluirPrototipoIdeia(item.id)}
          />*/}
      </TableCell>
    </TableRow>
  );
}
