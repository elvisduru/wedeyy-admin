import React, { useState } from 'react';
import { Select, Card, FormControl, MenuItem, Typography } from '@material-ui/core';
import { Line } from 'react-chartjs-2';
import _ from '@lodash';
import { useTheme } from '@material-ui/styles';

function Acquisition(props) {
  const theme = useTheme();
  const [dataset1, setDataset1] = useState('2019');
  const [dataset2, setDataset2] = useState('2018');
  const data = _.merge({}, props.data);

  return (
    <Card className="w-full rounded-8 shadow-none border-1">

      <div className="relative p-24 flex flex-row items-center justify-between">

        <div className="flex flex-col">
          <Typography className="h3 sm:h2">Wedeyy Profit Margin</Typography>
        </div>

        <div className="flex flex-row items-center">
          {/* {Object.keys(data.datasets).map((key) => (
            <Button
              key={key}
              className="py-8 px-12"
              size="small"
              onClick={() => setDataset(key)}
              disabled={key === dataset}
            >
              {key}
            </Button>
          ))} */}
          <div className="flex items-center">
            <FormControl className="">
              <Select value={dataset1} onChange={(ev) => setDataset1(ev.target.value)}>
                {data.datasets.map(key => (
                  <MenuItem key={key.label} value={key.label}>{key.label}</MenuItem>
                ))}
              </Select>
            </FormControl>
            &nbsp;&nbsp;
            VS
            &nbsp;&nbsp;
            <FormControl className="">
              <Select value={dataset2} onChange={(ev) => setDataset2(ev.target.value)}>
                {data.datasets.map(key => (
                  <MenuItem key={key.label} value={key.label}>{key.label}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>

        </div>
      </div>

      <Typography className="relative h-200 sm:h-320 sm:pb-16">
        <Line
          data={{
            labels: data.labels,
            datasets: data.datasets.filter((data) => {
              if (data.label === dataset1 || data.label === dataset2) {
                return data;
              }
              return null
            }).map((obj, index) => {
              const palette = theme.palette[index === 0 ? 'primary' : 'secondary'];
              return {
                ...obj,
                borderColor: palette.main,
                pointBackgroundColor: palette.dark,
                pointHoverBackgroundColor: palette.main,
                pointBorderColor: palette.contrastText,
                pointHoverBorderColor: palette.contrastText
              }
            })
          }}
          options={data.options}
        />
      </Typography>
      <Typography className="pl-16 my-12">This calculation is made based on ads created on wedeyy</Typography>
    </Card>
  );
}

export default React.memo(Acquisition);
