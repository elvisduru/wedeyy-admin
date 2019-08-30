import React from 'react';
import { Card } from '@material-ui/core';
import { Pie } from 'react-chartjs-2';

function Widget3(props) {
  const { data } = props;
  return (
    <Card className="w-full h-320 rounded-8 mx-16 shadow-none border-1 flex flex-col justify-center items-center">

      <Pie
        data={{
          labels: data.labels,
          datasets: data.datasets,
          options: data.options
        }} redraw width={150} />
    </Card>
  )
}

export default Widget3;