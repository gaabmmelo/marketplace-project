export const useFormatCurrency = () => {
  const formatCurrency = (value) => {
    const formattedValue = value.replace(/\D/gu, "");

    const formattedValue1 = formattedValue.replace(
      /(?<temp2>\d{1})(?<temp1>\d{1,2})$/u,
      "$1,$2"
    );

    const formattedValue2 = formattedValue1.replace(
      /(?<temp2>\d)(?=(?<temp1>\d{3})+(?!\d))/gu,
      "$1."
    );

    const finalValue = `${formattedValue2}`;
    return finalValue;
  };

  return {
    formatCurrency,
  };
};
