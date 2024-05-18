import React, { useState, useEffect } from "react";
import { InputAdornment, TextField } from "@mui/material";

export default function InputCurrency({ placeholder, value, onChange }) {
  const [taxValue, setTaxValue] = useState(value || "");

  useEffect(() => {
    setTaxValue(value || "");
  }, [value]);

  const formatarMoeda = (value) => {
    const valorFormatado = value.replace(/\D/gu, "");

    const valorFormatado1 = valorFormatado.replace(
      /(?<temp2>\d{1})(?<temp1>\d{1,2})$/u,
      "$1,$2"
    );

    const valorFormatado2 = valorFormatado1.replace(
      /(?<temp2>\d)(?=(?<temp1>\d{3})+(?!\d))/gu,
      "$1."
    );

    const valorFinal = `${valorFormatado2}`;

    return valorFinal;
  };

  const handleChangeValue = (event) => {
    const inputValue = event.target.value;

    if (inputValue === "R$") {
      setTaxValue("");
      onChange("");
    } else {
      const formattedValue = formatarMoeda(inputValue);
      setTaxValue(formattedValue);
      onChange(formattedValue);
    }
  };

  return (
    <TextField
      InputProps={{
        startAdornment: <InputAdornment position="start">R$</InputAdornment>,
        sx: {
          "& input": {
            textAlign: "right",
          },
          "&::placeholder": {
            color: "#667085",
            fontWeight: "500",
            opacity: 1,
          },
        },
      }}
      onChange={handleChangeValue}
      placeholder={placeholder}
      type="text"
      value={taxValue}
    />
  );
}
