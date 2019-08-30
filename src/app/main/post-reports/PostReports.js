import React, { Component } from 'react';
import { Typography, Chip } from '@material-ui/core';
import { FuseAnimateGroup } from '@fuse';
import Widget5 from '../widgets/Widget6';

export default class PostReports extends Component {
  render() {
    const reports = {
      title: 'All Reports',
      columns: ['Reporter Name', 'Reason for Reporting', 'Reporting Date', 'Status', 'Reporting', 'Impressions', 'Reach', 'CPC', 'Link Clicks'],
      rows: [
        { fullname: 'Johnny Drake', ref: '@wedeyyman', budget: 5000, spent: 4800, status: 'Pending', clicks: 1200, impressions: 800, reach: 19000, CPC: 10, linkClicks: 800 },
        { fullname: 'Kehinde Omotoso', ref: '@wedeyyman', budget: 5000, spent: 4800, status: 'Suspended', clicks: 1200, impressions: 800, reach: 19000, CPC: 10, linkClicks: 800 },
        { fullname: 'Elvis Duru', ref: '@wedeyyman', budget: 5000, spent: 4800, status: 'Completed', clicks: 1200, impressions: 800, reach: 19000, CPC: 10, linkClicks: 800 },
        { fullname: 'Danny Cray', ref: '@wedeyyman', budget: 5000, spent: 4800, status: 'Running', clicks: 1200, impressions: 800, reach: 19000, CPC: 10, linkClicks: 800 },
        { fullname: 'Mike Luis', ref: '@wedeyyman', budget: 5000, spent: 4800, status: 'Running', clicks: 1200, impressions: 800, reach: 19000, CPC: 10, linkClicks: 800 },
        { fullname: 'John Reece', ref: '@wedeyyman', budget: 5000, spent: 4800, status: 'Running', clicks: 1200, impressions: 800, reach: 19000, CPC: 10, linkClicks: 800 },
        { fullname: 'Ryan Knowles', ref: '@wedeyyman', budget: 5000, spent: 4800, status: 'Running', clicks: 1200, impressions: 800, reach: 19000, CPC: 10, linkClicks: 800 },
        { fullname: 'Jack Bridges', ref: '@wedeyyman', budget: 5000, spent: 4800, status: 'Running', clicks: 1200, impressions: 800, reach: 19000, CPC: 10, linkClicks: 800 },
        { fullname: 'Jack Bridges', ref: '@wedeyyman', budget: 5000, spent: 4800, status: 'Running', clicks: 1200, impressions: 800, reach: 19000, CPC: 10, linkClicks: 800 },
      ]
    }
    return (
      <div className="w-full px-32">
        <Typography className="pb-16 mt-16 text-18 font-300">
          Reports
        </Typography>
        <div className="flex items-center">
          <div className="flex items-center mr-32">
            <Typography className="mr-16">All Reports</Typography>
            <Chip label="200" color="primary" />
          </div>
          <div className="flex items-center mr-32">
            <Typography className="mr-16">Resolved Reports</Typography>
            <Chip label="200" color="secondary" />
          </div>
          <div className="flex items-center">
            <Typography className="mr-16">Pending Reports</Typography>
            <Chip label="200" className="bg-orange text-white" />
          </div>
        </div>
        <FuseAnimateGroup
          className="flex flex-wrap"
          enter={{
            animation: "transition.slideUpBigIn"
          }}
        >
          <Widget5 data={reports} />
        </FuseAnimateGroup>
      </div>
    )
  }
}
