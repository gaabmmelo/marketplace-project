import { TblCell, TblRow } from "./index";
import React from "react";

export function NoRecordsFound({ colspan, message }) {
  return (
    <TblRow>
      <TblCell align="center" colSpan={colspan}>
        {message}
      </TblCell>
    </TblRow>
  );
}
