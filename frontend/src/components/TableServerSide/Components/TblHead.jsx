import { Checkbox, TableCell, TableHead, TableSortLabel } from "@mui/material";
import React from "react";
import { TblRow } from "./TblRow";

export function TblHead({ backgroundColor, table }) {
  const { headCells, order, orderBy, setOrder, setOrderBy } = table;

  const handleSortRequest = (cellId) => {
    const isAsc = orderBy === cellId && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(cellId);
  };

  return (
    <TableHead style={{ backgroundColor }}>
      <TblRow>
        {headCells.map((headCell) =>
          headCell.hidden ? (
            ""
          ) : (
            <TableCell
              align={headCell?.align ? headCell?.align : "left"}
              key={headCell.id}
              sortDirection={orderBy === headCell.id ? order : false}
              sx={{
                color: (theme) => theme.palette.info.light,
                padding: "10px",
                ...headCell?.sx,
              }}
            >
              {headCell.hasCheckbox && headCell.checkboxVisivel ? (
                <Checkbox
                  checked={table.selectAll}
                  edge="end"
                  onChange={table.handleSelectAll}
                  sx={{ marginLeft: "6px", marginRight: 1, padding: 0 }}
                />
              ) : (
                ""
              )}

              {headCell.disableSorting ? (
                headCell.label
              ) : (
                <TableSortLabel
                  active={orderBy === headCell.id}
                  direction={orderBy === headCell.id ? order : "asc"}
                  onClick={() => {
                    handleSortRequest(headCell.id);
                  }}
                >
                  {headCell.label}
                </TableSortLabel>
              )}
            </TableCell>
          )
        )}
      </TblRow>
    </TableHead>
  );
}
