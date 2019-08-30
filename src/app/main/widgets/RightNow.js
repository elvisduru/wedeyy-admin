import React from 'react';
import { Card, Typography } from '@material-ui/core';

function RightNow(props) {
  return (
    <Card className="w-400 h-312 mt-16 shadow-none border-1">
      <div className="h-full w-full flex p-16 flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center mt-auto">
          <Typography variant="h6">Top campaigns</Typography>
          <Typography variant="h1" className="font-700 m-10">300k</Typography>
          <Typography variant="h6">Active users on site</Typography>
        </div>
        <div className="flex w-full flex-col self-start mt-auto items-center mt-84">
          <div className="flex self-start">
            <Typography variant="body1" className="flex">
              <span style={{
                width: '20px',
                height: '20px',
                backgroundColor: '#f44336',
                borderRadius: '50%',
                display: 'inline-block',
                marginRight: '10px'
              }}></span> Desktop</Typography>
            <Typography variant="body1" className="flex ml-24">
              <span style={{
                width: '20px',
                height: '20px',
                backgroundColor: '#124c79',
                borderRadius: '50%',
                display: 'inline-block',
                marginRight: '10px',
              }}></span> Mobile</Typography>
          </div>
          <div className="flex w-full h-24 mt-24">
            <div className="h-100" style={{ width: '60%', backgroundColor: '#f44336', justifyContent: 'center', display: 'flex', alignItems: 'center', color: 'white' }}>60%</div>
            <div className="h-100" style={{ width: '40%', backgroundColor: '#124c79', justifyContent: 'center', display: 'flex', alignItems: 'center', color: 'white' }}>40%</div>
          </div>
        </div>
      </div>
    </Card >
  )
}

export default RightNow;