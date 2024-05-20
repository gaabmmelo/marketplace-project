import { Chip } from "@mui/material";
import { useFormatCurrency } from "hooks/useFormatCurrency";

export function ChipTotal({ soldProducts }) {
  const { formatCurrency } = useFormatCurrency();

  const getTotalPurchase = () => {
    return soldProducts
      .reduce((total, product) => {
        return total + parseFloat(product.total_purchase_item);
      }, 0)
      .toFixed(2); // Formate para duas casas decimais aqui
  };

  const getTotalTax = () => {
    return soldProducts
      .reduce((totalTax, product) => {
        return totalTax + parseFloat(product.multi_value_quantity_tax);
      }, 0)
      .toFixed(2); // Formate para duas casas decimais aqui
  };
  return (
    <>
      <Chip
        sx={{
          backgroundColor: "#005768eb",
          color: "#fff",
          mt: 5,
          mb: 5,
        }}
        label={`Total valor da compra: R$ ${formatCurrency(
          getTotalPurchase()
        )}`}
      />
      <Chip
        sx={{
          backgroundColor: "#005768eb",
          color: "#fff",
          mt: 5,
          ml: 2,
          mb: 5,
        }}
        label={`Total valor da compra: R$ ${formatCurrency(getTotalTax())}`}
      />
    </>
  );
}
