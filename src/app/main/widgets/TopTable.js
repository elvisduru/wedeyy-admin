import React from 'react';
import { Card, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';

function TopTable(props) {
  return (
    <Card className=" w-full rounded-8 shadow-none border-1">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>{props.activePages ? 'Active Page' : 'Source'}</TableCell>
            <TableCell className="text-right">Active Users</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.item}</TableCell>
              <TableCell className="text-right">{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  )
}

export default TopTable;
