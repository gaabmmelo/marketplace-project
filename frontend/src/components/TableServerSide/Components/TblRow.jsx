import React from 'react'
import { TableRow } from '@mui/material'

export function TblRow ({ children, ...other }) {
    return (
        <TableRow {...other}>
            {children}
        </TableRow>
    )
}
