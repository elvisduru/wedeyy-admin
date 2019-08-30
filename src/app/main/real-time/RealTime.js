import React, { Component } from 'react';
import { Typography } from '@material-ui/core';
import { FuseAnimate } from '@fuse';
import RightNow from '../widgets/RightNow';
import Acquisition from '../widgets/Acquisition';
import Location from '../widgets/Location';
import TopTable from '../widgets/TopTable';



export default class RealTime extends Component {
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
      location: {
        markers: [
          {
            lat: 52,
            lng: -73,
            label: '120'
          },
          {
            lat: 37,
            lng: -104,
            label: '498'
          },
          {
            lat: 21,
            lng: -7,
            label: '443'
          },
          {
            lat: 55,
            lng: 75,
            label: '332'
          },
          {
            lat: 51,
            lng: 7,
            label: '50'
          },
          {
            lat: 31,
            lng: 12,
            label: '221'
          },
          {
            lat: 45,
            lng: 44,
            label: '455'
          },
          {
            lat: -26,
            lng: 134,
            label: '231'
          },
          {
            lat: -9,
            lng: -60,
            label: '67'
          },
          {
            lat: 33,
            lng: 104,
            label: '665'
          }
        ],
        styles: [
          {
            'featureType': 'administrative',
            'elementType': 'labels.text.fill',
            'stylers': [
              {
                'color': '#444444'
              }
            ]
          },
          {
            'featureType': 'landscape',
            'elementType': 'all',
            'stylers': [
              {
                'color': '#f2f2f2'
              }
            ]
          },
          {
            'featureType': 'poi',
            'elementType': 'all',
            'stylers': [
              {
                'visibility': 'off'
              }
            ]
          },
          {
            'featureType': 'road',
            'elementType': 'all',
            'stylers': [
              {
                'saturation': -100
              },
              {
                'lightness': 45
              }
            ]
          },
          {
            'featureType': 'road.highway',
            'elementType': 'all',
            'stylers': [
              {
                'visibility': 'simplified'
              }
            ]
          },
          {
            'featureType': 'road.arterial',
            'elementType': 'labels.icon',
            'stylers': [
              {
                'visibility': 'off'
              }
            ]
          },
          {
            'featureType': 'transit',
            'elementType': 'all',
            'stylers': [
              {
                'visibility': 'off'
              }
            ]
          },
          {
            'featureType': 'water',
            'elementType': 'all',
            'stylers': [
              {
                'color': '#039be5'
              },
              {
                'visibility': 'on'
              }
            ]
          }
        ]
      },
      pagesVisited: {
        datasets: {
          'Today': [
            { page: "/", views: "120k", value: "0" },
            { page: "Feeds", views: "900k", value: "0" },
            { page: "Advertisement Center", views: "8k", value: "20,000" }
          ],
          'Yesterday': [
            { page: "/", views: "100k", value: "1,000" },
            { page: "Feeds", views: "180k", value: "30" },
            { page: "Advertisement Center", views: "9k", value: "20,000" }
          ],
          'Last 7 days': [
            { page: "/", views: "90k", value: "3,000" },
            { page: "Feeds", views: "400k", value: "0" },
            { page: "Advertisement Center", views: "2k", value: "20,000" }
          ]
        }
      },
      topPages: [
        { item: 'Feeds', amount: '1.9k' },
        { item: 'Gallery', amount: '200' },
        { item: 'Explore', amount: '1k' },
      ],
      referrals: [
        { item: 'Bella Naija', amount: '1.9k' },
        { item: 'Google', amount: '8k' },
      ],
      traffic: [
        { item: 'Instagram', amount: '1.9k' },
        { item: 'Facebook', amount: '8k' },
      ]
    }
    return (
      <div className="w-full">
        <Typography className="px-16 pb-8 mt-16 text-18 font-300">
          Real Time Data Overview
          </Typography>

        <div className="flex flex-col md:flex-row sm:p-8 container">
          <RightNow />
          <div className="flex px-16 flex-1 flex-col min-w-0  pt-16">
            <div className="widget w-full">
              <Acquisition data={widgets.acquisition} />
            </div>
          </div>
        </div>
        <FuseAnimate animation="transition.slideUpIn" delay={200}>
          <div className="flex flex-col md:flex-row sm:p-8 container">
            <div className="flex flex-wrap w-full md:w-320 pt-16">
              <div className="mb-32 w-full sm:w-1/2 md:w-full">
                <FuseAnimate delay={600}>
                  <Typography className="px-16 pb-8 text-18 font-300">
                    Top active pages?
                  </Typography>
                </FuseAnimate>

                <div className="widget w-full p-16">
                  <TopTable activePages data={widgets.topPages} />
                </div>
              </div>
              <div className="mb-32 w-full sm:w-1/2 md:w-full">
                <FuseAnimate delay={600}>
                  <Typography className="px-16 pb-8 text-18 font-300 lg:pt-0">
                    Top referrals?
                  </Typography>
                </FuseAnimate>
                <div className="widget w-full p-16">
                  <TopTable data={widgets.referrals} />
                </div>
              </div>
              <div className="mb-32 w-full sm:w-1/2 md:w-full">

                <FuseAnimate delay={600}>
                  <div className="px-16 pb-8 text-18 font-300">
                    Top social traffic?
                                </div>
                </FuseAnimate>

                <div className="widget w-full p-16">
                  <TopTable data={widgets.referrals} />
                </div>
              </div>
            </div>

            <div className="flex flex-1 flex-col min-w-0  pt-16">
              <FuseAnimate delay={600}>
                <Typography className="px-16 pb-8 text-18 font-300">
                  Where are your users?
                </Typography>
              </FuseAnimate>

              <div className="widget w-full p-16 pb-32">
                <Location data={widgets.location} />
              </div>
            </div>
          </div>
        </FuseAnimate>

      </div>
    )
  }
}
