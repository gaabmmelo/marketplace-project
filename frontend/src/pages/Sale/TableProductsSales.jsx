import { TblPrimary, useTable } from "components/TableServerSide";
import React from "react";
import { TableLineProductsSales } from "./TableLineProductsSales";

const headCells = [
  {
    id: "product_name",
    label: "Produto",
  },
  {
    id: "product_type_id",
    label: "Tipo de produto",
  },
  {
    id: "product_quantity",
    label: "Quantidade",
  },
  {
    id: "product_value",
    label: "Valor do produto",
  },
  {
    id: "total_purchase",
    label: "Valor item multiplicado por quantidade",
  },
  {
    id: "total_tax",
    label: "Total do valor dos impostos",
  },
  {
    disableSorting: true,
    id: "editar",
    label: "Editar",
  },
  {
    disableSorting: true,
    id: "excluir",
    label: "Excluir",
  },
];

export function TableProductsSales({ soldProducts, handleRemoveProduct }) {
  const table = useTable(
    soldProducts ?? [],
    headCells,
    soldProducts.length ?? 0
  );

  return (
    <TblPrimary hasPagination table={table}>
      {table?.recordsAfterPagingAndSorting()?.map((product) => (
        <TableLineProductsSales
          handleRemoveProduct={handleRemoveProduct}
          //handleEdicao={() => handleEdicao(product)}
          item={product}
          key={product.id}
        />
      ))}
    </TblPrimary>
  );
}
