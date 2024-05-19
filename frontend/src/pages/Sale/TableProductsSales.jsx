import { TblPrimary, useTable } from "components/TableServerSide";
import React from "react";
import { TableLineProductsSales } from "./TableLineProductsSales";

const headCells = [
  {
    id: "id",
    label: "Identificador",
  },
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
    label: "Quantidade de produtos",
  },
  {
    id: "total_purchase",
    label: "Total valor da soma dos produtos",
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
