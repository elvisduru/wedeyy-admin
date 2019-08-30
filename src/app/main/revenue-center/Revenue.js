import React, { Component } from 'react';
import { Typography } from '@material-ui/core';
import ProfitMargin from '../widgets/ProfitMargin';

export default class Revenue extends Component {
  render() {
    const widgets = {
      acquisition: {
        chartType: 'line',
        datasets: [
          {
            label: '2019',
            data: [190, 5000, 340, 220, 290, 390, 250, 380, 410, 380, 320, 290],
            fill: 'start'
          },
          {
            label: '2018',
            data: [2200, 2900, 3900, 2500, 3800, 3200, 2900, 1900, 3000, 3400, 4100, 3800],
            fill: 'start'
          },
          {
            label: '2017',
            data: [1200, 900, 300, 500, 300, 1300, 2200, 1100, 4000, 1400, 4200, 1800],
            fill: 'start'
          },
          {
            label: '2016',
            data: [200, 2300, 2500, 1100, 800, 200, 2100, 1200, 4000, 400, 1200, 3200],
            fill: 'start'
          }
        ],
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
    }
    return (
      <div className="w-full">
        <Typography className="px-16 pb-8 mt-16 text-18 font-300">
          Revenue Center
        </Typography>
        <div className="flex flex-col md:flex-row sm:p-8 container">
          {/* Revenue Widget Here */}
          <div className="flex px-16 flex-1 flex-col min-w-0  pt-16">
            <div className="widget w-full">
              <ProfitMargin data={widgets.acquisition} />
            </div>
          </div>
        </div>

      </div>
    )
  }
}
