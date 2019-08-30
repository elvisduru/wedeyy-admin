import React, { Component } from 'react';
import { Typography } from '@material-ui/core';
import ManagementTable from '../widgets/ManagementTable';

export default class UserManagement extends Component {
  render() {
    return (
      <div className="w-full px-32">
        <Typography className="pb-16 mt-16 text-18 font-300">
          User Management
        </Typography>
        <ManagementTable />
      </div>
    )
  }
}
