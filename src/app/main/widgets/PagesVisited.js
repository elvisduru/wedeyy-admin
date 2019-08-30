import React, { useState } from 'react';
import { Card, Table, TableBody, TableCell, TableHead, TableRow, FormControl, MenuItem, Select } from '@material-ui/core';
import _ from '@lodash';

function PagesVisited(props) {
  const [dataset, setDataset] = useState('Today');
  const data = _.merge({}, props.data);

  return (
    <Card className=" w-full h-256 rounded-8 shadow-none border-1">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell className="w-640">Page</TableCell>
            <TableCell>Page Views</TableCell>
            <TableCell>Page Values</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>

          {data.datasets[dataset].map((row, index) => (
            <TableRow key={index}>
              <TableCell> {row.page}</TableCell>
              <TableCell className="text-right">{row.views}</TableCell>
              <TableCell className="text-right"> {row.value}</TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell>
              <FormControl className="">
                <Select value={dataset} onChange={(ev) => setDataset(ev.target.value)}>
                  {Object.keys(data.datasets).map(key => (
                    <MenuItem key={key} value={key}>{key}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Card>
  )
}

export default PagesVisited;