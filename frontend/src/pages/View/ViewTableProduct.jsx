import { TblPrimary, useTable } from "components/TableServerSide";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { ProductLine } from "./Components/TableLines/ProductLine";

const headCells = [
  {
    id: "id",
    label: "Identificador",
  },
  {
    id: "product_name",
    label: "Nome do produto",
  },
  {
    id: "product_type_id",
    label: "Tipo de produto",
  },
  {
    id: "product_value",
    label: "Valor do produto",
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

export function ViewTableProduct() {
  const [products, setProducts] = useState([]);

  const table = useTable(products ?? [], headCells, products.length ?? 0);

  const handleRemove = async (productId) => {
    await axios
      .delete(
        `http://localhost:8080/product/${productId}`,
        {
          id: productId,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        const updatedProducts = products.filter(
          (product) => product.id !== productId
        );
        setProducts(updatedProducts);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get("http://localhost:8080/products", {
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
        <ProductLine
          handleRemove={() => handleRemove(product.id)}
          item={product}
          key={product.id}
        />
      ))}
    </TblPrimary>
  );
}
