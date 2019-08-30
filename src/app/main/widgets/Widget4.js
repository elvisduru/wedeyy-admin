import React from 'react';
import { Typography, Paper } from '@material-ui/core';

function Widget4(props) {
  const { count, title } = props;
  return (
    <Paper className="w-full rounded-8 shadow-none border-1">
      <div className="flex items-center justify-between pr-4 pl-16 pt-16">
        <Typography className="text-18">{title}</Typography>
      </div>
      <div className="text-center pt-12 pb-28">
        <Typography
          className="text-72 leading-none">{count}</Typography>
      </div>
    </Paper>
  );
}

export default React.memo(Widget4);