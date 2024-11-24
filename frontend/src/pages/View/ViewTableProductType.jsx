import { TblPrimary, useTable } from "components/TableServerSide";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { ProductType } from "./Components/TableLines/ProductType";
import { ModalAddProductType } from "pages/Home/ProductType/Components/Modal/ModalAddProductType";

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
];

export function ViewTableProductType() {
  const [products, setProducts] = useState([]);
  const [modalOpen, setModalOpen] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [currentProduct, setCurrentProduct] = useState(null);

  const table = useTable(products ?? [], headCells, products.length ?? 0);

  const handleOpenModal = (modalName) => {
    setModalOpen(modalName);
    handleClose();
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCloseModal = () => {
    setModalOpen(null);
    setCurrentProduct(null);
  };

  const handleEdit = (product) => {
    setCurrentProduct(product);
    handleOpenModal("addTypeProduct");
  };

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/products_type",
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    getProducts();
  }, []);

  return (
    <>
      <TblPrimary hasPagination table={table}>
        {table?.recordsAfterPagingAndSorting()?.map((product) => (
          <ProductType
            handleEdit={() => handleEdit(product)}
            item={product}
            key={product.id}
          />
        ))}
      </TblPrimary>

      {modalOpen === "addTypeProduct" && (
        <ModalAddProductType
          product={currentProduct}
          handleClose={handleCloseModal}
          open={modalOpen === "addTypeProduct"}
        />
      )}
    </>
  );
}
