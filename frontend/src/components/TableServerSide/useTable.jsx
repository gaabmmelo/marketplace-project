import { useMemo, useState } from "react";

export default function useTable(
  records,
  headCells,
  totalRows,
  atributo = "id"
) {
  const pages = [
    { label: "5", value: 5 },
    { label: "10", value: 10 },
    { label: "25", value: 25 },
    { label: "50", value: 50 },
    { label: "75", value: 75 },
    { label: "100", value: 100 },
    { label: "250", value: 250 },
  ];
  const [page, setPage] = useState(0);
  const [order, setOrder] = useState();
  const [orderBy, setOrderBy] = useState();

  const [selectedRecords, setSelectedRecords] = useState([]);

  const verificarSelectAll = (selectedRows, rows) => {
    const selectedItems = selectedRows.filter((sel) =>
      rows.some((rec) => sel[atributo] === rec[atributo])
    );

    return selectedItems.length === rows.length;
  };

  const selectAll = useMemo(
    () => verificarSelectAll(selectedRecords, records),
    [selectedRecords, records]
  );

  const [rowsPage] = pages.map((item) => item.value);

  const [rowsPerPage, setRowsPerPage] = useState(rowsPage);

  const handleSelectAll = () => {
    // eslint-disable-next-line max-len
    const recordsOtherPages = selectedRecords.filter(
      (sel) => !records.some((rec) => sel[atributo] === rec[atributo])
    );

    if (selectAll) {
      setSelectedRecords(recordsOtherPages);
    } else {
      setSelectedRecords([...records, ...recordsOtherPages]);
    }
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    const rowsPerPageSelected = parseInt(event.target.value, 10);

    setRowsPerPage(rowsPerPageSelected);
    setPage(0);
  };

  function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((item1, item2) => {
      const ordem = comparator(item1[0], item2[0]);
      if (ordem !== 0) return ordem;
      return item1[1] - item2[1];
    });
    return stabilizedThis.map((el) => el[0]);
  }

  function getComparator(tipoOrdenacao, ordenacao) {
    return tipoOrdenacao === "desc"
      ? (item1, item2) => descendingComparator(item1, item2, ordenacao)
      : (item1, item2) => -descendingComparator(item1, item2, ordenacao);
  }

  function descendingComparator(item1, item2, ordenacao) {
    if (item2[ordenacao] < item1[ordenacao]) {
      return -1;
    }
    if (item2[ordenacao] > item1[ordenacao]) {
      return 1;
    }
    return 0;
  }

  const recordsAfterPagingAndSorting = () => {
    if (records && records.length > 0) {
      const currentPage = rowsPerPage >= records?.length ? 0 : page;

      return stableSort(records, getComparator(order, orderBy)).slice(
        currentPage * rowsPerPage,
        (currentPage + 1) * rowsPerPage
      );
    }

    return null;
  };

  return {
    handleChangePage,
    handleChangeRowsPerPage,
    handleSelectAll,
    headCells,
    order,
    orderBy,
    page,
    pages,
    records,
    recordsAfterPagingAndSorting,
    rowsPerPage,
    selectAll,
    selectedRecords,
    setOrder,
    setOrderBy,
    setPage,
    setSelectedRecords,
    totalRows,
  };
}
