import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const rows = JSON.parse(localStorage.getItem("txs")) || [];

const History = () => {
  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell>Destino</TableCell>
              <TableCell align="center">Monto</TableCell>
              <TableCell align="center">Comision</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.destino}>
                <TableCell>{row.destino}</TableCell>
                <TableCell align="center">
                  <strong>{row.currency}</strong> {row.monto}
                </TableCell>
                <TableCell align="center">{row.comision}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default History;
