import React, { useState } from 'react';

import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

export default function ExpansionPanelOrders({ details }) {
  const renderRows = (array) => {
    return array.map((detail) => (
      <TableRow key={detail.product_id}>
        <TableCell component='th' scope='row'>
          {detail.product_name}
        </TableCell>
        <TableCell>{detail.product_qty}</TableCell>
      </TableRow>
    ));
  };

  return (
    <TableContainer component={Paper}>
      <Table size='small' aria-label='a dense table'>
        <TableHead>
          <TableRow>
            <TableCell>Bière</TableCell>
            <TableCell>Quantité</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{renderRows(details)}</TableBody>
      </Table>
    </TableContainer>
  );
}
