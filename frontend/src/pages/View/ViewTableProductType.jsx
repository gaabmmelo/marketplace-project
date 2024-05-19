import { TblPrimary, useTable } from "components/TableServerSide";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { ProductType } from "./Components/TableLines/ProductType";

const headCells = [
  {
    id: "id",
    label: "Identificador",
  },
  {
    id: "product_type",
    label: "Tipo do produto",
  },
  {
    id: "tax_percentage",
    label: "Imposto",
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

export function ViewTableProductType() {
  const [products, setProducts] = useState([]);

  const table = useTable(products ?? [], headCells, products.length ?? 0);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get("http://localhost:8080/product_type", {
          headers: {
            "Content-Type": "application/json",
          },
        });
        setProducts(response.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    getProducts();
  }, []);

  return (
    <TblPrimary hasPagination table={table}>
      {table?.recordsAfterPagingAndSorting()?.map((product) => (
        <ProductType
          //callbackExcluir={deletar}
          //handleEdicao={() => handleEdicao(product)}
          item={product}
          key={product.id}
        />
      ))}
    </TblPrimary>
  );
}
