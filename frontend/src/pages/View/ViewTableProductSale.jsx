import { TblPrimary, useTable } from "components/TableServerSide";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { ProductSaleLine } from "./Components/TableLines/ProductSaleLine";

const headCells = [
  {
    id: "id",
    label: "Identificador",
  },
  {
    id: "product_id",
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

export function ViewTableProductSale() {
  const [sales, setSales] = useState([]);

  const table = useTable(sales ?? [], headCells, sales.length ?? 0);

  useEffect(() => {
    const getSales = async () => {
      try {
        const response = await axios.get("http://localhost:8080/sales", {
          headers: {
            "Content-Type": "application/json",
          },
        });
        setSales(response.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    getSales();
  }, []);

  return (
    <TblPrimary hasPagination table={table}>
      {table?.recordsAfterPagingAndSorting()?.map((product) => (
        <ProductSaleLine
          //callbackExcluir={deletar}
          //handleEdicao={() => handleEdicao(product)}
          item={product}
          key={product.id}
        />
      ))}
    </TblPrimary>
  );
}
