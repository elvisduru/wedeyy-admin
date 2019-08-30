import React, { Component } from 'react';
import { Typography } from '@material-ui/core';
import { FuseAnimateGroup } from '@fuse';
import Widget4 from '../widgets/Widget4';
import Widget5 from '../widgets/Widget5';

export default class Advertisements extends Component {
  render() {
    const adverts = {
      title: 'All Ads',
      columns: ['Ad Name', 'Status', 'Budget', 'Amount Spent', 'Click', 'Impressions', 'Reach', 'CPC', 'Link Clicks'],
      rows: [
        { fullname: 'Johnny Drake', ref: '13451232232323', status: 'Pending', budget: 5000, spent: 4800, clicks: 1200, impressions: 800, reach: 19000, CPC: 10, linkClicks: 800 },
        { fullname: 'Kehinde Omotoso', ref: '13451232232323', status: 'Suspended', budget: 5000, spent: 4800, clicks: 1200, impressions: 800, reach: 19000, CPC: 10, linkClicks: 800 },
        { fullname: 'Elvis Duru', ref: '13451232232323', status: 'Completed', budget: 5000, spent: 4800, clicks: 1200, impressions: 800, reach: 19000, CPC: 10, linkClicks: 800 },
        { fullname: 'Danny Cray', ref: '13451232232323', status: 'Running', budget: 5000, spent: 4800, clicks: 1200, impressions: 800, reach: 19000, CPC: 10, linkClicks: 800 },
        { fullname: 'Mike Luis', ref: '13451232232323', status: 'Running', budget: 5000, spent: 4800, clicks: 1200, impressions: 800, reach: 19000, CPC: 10, linkClicks: 800 },
        { fullname: 'John Reece', ref: '13451232232323', status: 'Running', budget: 5000, spent: 4800, clicks: 1200, impressions: 800, reach: 19000, CPC: 10, linkClicks: 800 },
        { fullname: 'Ryan Knowles', ref: '13451232232323', status: 'Running', budget: 5000, spent: 4800, clicks: 1200, impressions: 800, reach: 19000, CPC: 10, linkClicks: 800 },
        { fullname: 'Jack Bridges', ref: '13451232232323', status: 'Running', budget: 5000, spent: 4800, clicks: 1200, impressions: 800, reach: 19000, CPC: 10, linkClicks: 800 },
        { fullname: 'Jack Bridges', ref: '13451232232323', status: 'Running', budget: 5000, spent: 4800, clicks: 1200, impressions: 800, reach: 19000, CPC: 10, linkClicks: 800 },
      ]
    }
    return (
      <div className="w-full px-32">
        <Typography className="pb-16 mt-16 text-18 font-300">
          Advertisement Center
        </Typography>
        <FuseAnimateGroup
          className="flex flex-wrap"
          enter={{
            animation: "transition.slideUpBigIn"
          }}>
          <div className="w-full flex flex-wrap">
            <div className="widget flex w-full sm:w-1/2 md:w-1/6 p-12">
              <Widget4 title="All Ads" count="3.8k" />
            </div>
            <div className="widget flex w-full sm:w-1/2 md:w-1/6 p-12">
              <Widget4 title="Pending Ads" count="500" />
            </div>
            <div className="widget flex w-full sm:w-1/2 md:w-1/6 p-12">
              <Widget4 title="Suspended Ads" count="300" />
            </div>
            <div className="widget flex w-full sm:w-1/2 md:w-1/6 p-12">
              <Widget4 title="Completed Ads" count="130" />
            </div>
            <div className="widget flex w-full sm:w-1/2 md:w-1/6 p-12">
              <Widget4 title="Declined Ads" count="1.8k" />
            </div>
            <div className="widget flex w-full sm:w-1/2 md:w-1/6 p-12">
              <Widget4 title="Running Ads" count="87" />
            </div>
          </div>
        </FuseAnimateGroup>
        <FuseAnimateGroup
          className="flex flex-wrap"
          enter={{
            animation: "transition.slideUpBigIn"
          }}
        >
          <Widget5 data={adverts} />
        </FuseAnimateGroup>
      </div>
    )
  }
}
