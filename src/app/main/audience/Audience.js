import React, { Component } from 'react';
import { Typography } from '@material-ui/core';
import { FuseAnimate } from '@fuse';
import Acquisition from '../widgets/Acquisition';
import Widget2 from '../widgets/Widget2';
import Widget3 from '../widgets/Widget3';

export default class Audience extends Component {
  render() {
    const widgets = {
      acquisition: {
        chartType: 'line',
        datasets: {
          'Today': [
            {
              label: 'Visitors',
              data: [190, 300, 340, 220, 290, 390, 250, 380, 410, 380, 320, 290],
              fill: 'start'
            },
            {
              label: 'Page views',
              data: [2200, 2900, 3900, 2500, 3800, 3200, 2900, 1900, 3000, 3400, 4100, 3800],
              fill: 'start'
            }
          ],
          'Yesterday': [
            {
              label: 'Visitors',
              data: [410, 380, 320, 290, 190, 390, 250, 380, 300, 340, 220, 290],
              fill: 'start'
            },
            {
              label: 'Page Views',
              data: [3000, 3400, 4100, 3800, 2200, 3200, 2900, 1900, 2900, 3900, 2500, 3800],
              fill: 'start'
            }
          ],
          'Last 7 days': [
            {
              label: 'Visitors',
              data: [390, 300, 340, 620, 290, 390, 50, 380, 410, 380, 320, 290],
              fill: 'start'
            },
            {
              label: 'Page views',
              data: [2200, 1900, 3900, 2500, 3800, 3200, 2900, 2900, 1000, 3400, 4100, 3800],
              fill: 'start'
            }
          ],
          'Last 28 days': [
            {
              label: 'Visitors',
              data: [190, 300, 340, 620, 290, 390, 50, 380, 510, 380, 320, 290],
              fill: 'start'
            },
            {
              label: 'Page views',
              data: [1200, 1900, 3900, 2500, 3800, 3200, 2900, 900, 1000, 3400, 4100, 3800],
              fill: 'start'
            }
          ],
        },
        labels: ['12am', '2am', '4am', '6am', '8am', '10am', '12pm', '2pm', '4pm', '6pm', '8pm', '10pm'],
        options: {
          spanGaps: false,
          legend: {
            display: false
          },
          maintainAspectRatio: false,
          tooltips: {
            position: 'nearest',
            mode: 'index',
            intersect: false
          },
          layout: {
            padding: {
              left: 24,
              right: 32
            }
          },
          elements: {
            point: {
              radius: 4,
              borderWidth: 2,
              hoverRadius: 4,
              hoverBorderWidth: 2
            }
          },
          scales: {
            xAxes: [
              {
                gridLines: {
                  display: false
                },
                ticks: {
                  fontColor: 'rgba(0,0,0,0.54)'
                }
              }
            ],
            yAxes: [
              {
                gridLines: {
                  tickMarkLength: 16
                },
                ticks: {
                  stepSize: 1000
                }
              }
            ]
          },
          plugins: {
            filler: {
              propagate: false
            }
          }
        }
      },
      widget2: {
        conversion: {
          value: 492,
          ofTarget: 13
        },
        chartType: 'bar',
        datasets: [
          {
            label: 'Users',
            data: [221, 428, 492, 471, 413, 344, 294]
          }
        ],
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        options: {
          spanGaps: false,
          legend: {
            display: false
          },
          maintainAspectRatio: false,
          layout: {
            padding: {
              top: 24,
              left: 16,
              right: 16,
              bottom: 16
            }
          },
          scales: {
            xAxes: [
              {
                display: false
              }
            ],
            yAxes: [
              {
                display: false,
                ticks: {
                  min: 100,
                  max: 500
                }
              }
            ]
          }
        }
      },
      widget3: {
        labels: [
          'New Visitors',
          'Returning Visitors',
        ],
        datasets: [
          {
            data: [300, 50],
            backgroundColor: [
              '#FF6384',
              '#36A2EB',
            ],
            hoverBackgroundColor: [
              '#FF6384',
              '#36A2EB',
            ]
          }
        ],
        options: {
          cutoutPercentage: 75,
          spanGaps: false,
          legend: {
            display: false
          },
          maintainAspectRatio: false
        }
      }
    }
    return (
      <div className="w-full px-32">
        <Typography className="pb-16 mt-16 text-18 font-300">
          Audience Overview
        </Typography>
        <Acquisition data={widgets.acquisition} />

        <FuseAnimate animation="transition.slideUpIn" delay={200}>
          <div className="flex flex-col md:flex-row container">
            <div className="flex flex-1 flex-col min-w-0">
              <div className="flex flex-col flex-wrap sm:flex sm:flex-row pb-32">

                <div className="widget flex w-full sm:w-1/3 p-16">
                  <Widget2 data={widgets.widget2} title="Users" />
                </div>

                <div className="widget flex w-full sm:w-1/3 p-16">
                  <Widget2 data={widgets.widget2} title="New Users" />
                </div>

                <div className="widget w-full sm:w-1/3 p-16">
                  <Widget2 data={widgets.widget2} title="Sessions" />
                </div>

                <div className="widget w-full sm:w-1/3 p-16">
                  <Widget2 data={widgets.widget2} title="Sessions Per User" />
                </div>

                <div className="widget w-full sm:w-1/3 p-16">
                  <Widget2 data={widgets.widget2} title="Page Views" />
                </div>

                <div className="widget w-full sm:w-1/3 p-16">
                  <Widget2 data={widgets.widget2} title="Pages / Session" />
                </div>

                <div className="widget w-full sm:w-1/3 p-16">
                  <Widget2 data={widgets.widget2} title="Avg. Session Duration" />
                </div>

                <div className="widget w-full sm:w-1/3 p-16">
                  <Widget2 data={widgets.widget2} title="Bounce Rate" />
                </div>
              </div>
            </div>
            <div className="flex flex-wrap w-full md:w-320 pt-16">
              <Widget3 data={widgets.widget3} />
            </div>
          </div>
        </FuseAnimate>
      </div>
    )
  }
}
