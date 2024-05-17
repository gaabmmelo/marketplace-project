import React from 'react'
import { TableBody } from '@mui/material'

export function TblBody ({ children, ...other }) {
    return (
        <TableBody {...other}>
            {children}
        </TableBody>
    )
}
