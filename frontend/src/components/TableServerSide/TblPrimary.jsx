import { NoRecordsFound } from "./NoRecordsFound";
import React from "react";
import { TblBody } from "./Components/TblBody";
import { TblContainer } from "./Components/TblContainer";
import { TblHead } from "./Components/TblHead";
import { TblPagination } from "./Components/TblPagination";

export function TblPrimary({ children, hasPagination, loading, table, sx }) {
  const hasRecords = table?.records && table.records.length > 0;
  const hasHeadCells = table?.headCells && table.headCells.length > 0;

  return (
    <>
      <TblContainer loading={loading} sx={sx}>
        {hasHeadCells ? <TblHead table={table} /> : ""}

        <TblBody>
          {hasRecords ? (
            children
          ) : (
            <NoRecordsFound
              colSpan={hasHeadCells ? table.headCells.length : 1}
            />
          )}
        </TblBody>
      </TblContainer>

      {hasPagination ? <TblPagination table={table} /> : ""}
    </>
  );
}
