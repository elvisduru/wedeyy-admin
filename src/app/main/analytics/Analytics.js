import React, { Component } from 'react';
import { Typography } from '@material-ui/core';
import Visitors from '../widgets/Visitors';
import { FuseAnimate } from '@fuse';
import Acquisition from '../widgets/Acquisition';
import Location from '../widgets/Location';
import Devices from '../widgets/Devices';
import Campaigns from '../widgets/Campaigns';
import Sales from '../widgets/Sales';
import PagesVisited from '../widgets/PagesVisited';

class Analytics extends Component {

	render() {
		const widgets = {
			visitors: {
				chartType: 'line',
				datasets: {
					'2017': [
						{
							label: 'Sales',
							data: [1.9, 3, 3.4, 2.2, 2.9, 3.9, 2.5, 3.8, 4.1, 3.8, 3.2, 2.9],
							fill: 'start'
						}
					],
					'2018': [
						{
							label: 'Sales',
							data: [2.2, 2.9, 3.9, 2.5, 3.8, 3.2, 2.9, 1.9, 3, 3.4, 4.1, 3.8],
							fill: 'start'
						}
					],
					'2019': [
						{
							label: 'Sales',
							data: [3.9, 2.5, 3.8, 4.1, 1.9, 3, 3.8, 3.2, 2.9, 3.4, 2.2, 2.9],
							fill: 'start'
						}
					]
				},
				labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
				options: {
					spanGaps: false,
					legend: {
						display: false
					},
					maintainAspectRatio: false,
					layout: {
						padding: {
							top: 32,
							left: 32,
							right: 32
						}
					},
					elements: {
						point: {
							radius: 4,
							borderWidth: 2,
							hoverRadius: 4,
							hoverBorderWidth: 2
						},
						line: {
							tension: 0
						}
					},
					scales: {
						xAxes: [
							{
								gridLines: {
									display: false,
									drawBorder: false,
									tickMarkLength: 18
								},
								ticks: {
									fontColor: '#ffffff'
								}
							}
						],
						yAxes: [
							{
								display: false,
								ticks: {
									min: 1.5,
									max: 5,
									stepSize: 0.5
								}
							}
						]
					},
					plugins: {
						filler: {
							propagate: false
						},
						xLabelsOnTop: {
							active: true
						}
					}
				}
			},
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
			devices: {
				labels: [
					'Desktop',
					'Mobile',
					'Tablet'
				],
				datasets: {
					'Today': [
						{
							data: [92.8, 6.1, 1.1],
							change: [-0.6, 0.7, 0.1]
						}
					],
					'Yesterday': [
						{
							data: [77.2, 8.4, 14.4],
							change: [-2.3, 0.3, -0.2]
						}
					],
					'Last 7 days': [
						{
							data: [88.2, 9.2, 2.6],
							change: [1.9, -0.4, 0.3]
						}
					],
					'Last 28 days': [
						{
							data: [65.2, 2.6, 32.2],
							change: [-12.6, -0.7, 4.2]
						}
					],
					'Last 90 days': [
						{
							data: [93.5, 4.2, 2.3],
							change: [2.6, -0.7, 2.1]
						}
					]
				},
				options: {
					cutoutPercentage: 75,
					spanGaps: false,
					legend: {
						display: false
					},
					maintainAspectRatio: false
				}
			},
			sales: {
				datasets: [
					[
						{
							label: '1Day',
							data: [72, 65, 70, 78, 85, 82, 88],
							fill: false,
							borderColor: '#5c84f1'
						}
					],
					[
						{
							label: '1Week',
							data: [540, 539, 527, 548, 540, 552, 566],
							fill: false,
							borderColor: '#5c84f1'
						}
					],
					[
						{
							label: '1Month',
							data: [1520, 1529, 1567, 1588, 1590, 1652, 1622],
							fill: false,
							borderColor: '#5c84f1'
						}
					]
				],
				labels: ['1', '2', '3', '4', '5', '6', '7'],
				options: {
					spanGaps: true,
					legend: {
						display: false
					},
					maintainAspectRatio: true,
					elements: {
						point: {
							radius: 2,
							borderWidth: 1,
							hoverRadius: 2,
							hoverBorderWidth: 1
						},
						line: {
							tension: 0
						}
					},
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
								display: true,
								ticks: {
									// min: 100,
									// max: 500
								}
							}
						]
					}
				},
				today: '12,540',
				change: {
					value: 321,
					percentage: 2.05
				}
			},
			campaigns: {
				rows: [
					{
						title: 'Holiday Travel',
						clicks: 3621,
						conversion: 90
					},
					{
						title: 'Get Away Deals',
						clicks: 703,
						conversion: 7
					},
					{
						title: 'Airfare',
						clicks: 532,
						conversion: 0
					},
					{
						title: 'Vacation',
						clicks: 201,
						conversion: 8
					},
					{
						title: 'Hotels',
						clicks: 94,
						conversion: 4
					}
				]
			}
		};

		return (
			<div className="w-full">
				<Visitors data={widgets.visitors} />
				<FuseAnimate animation="transition.slideUpIn" delay={200}>
					<div className="flex flex-col md:flex-row sm:p-8 container">
						<div className="flex flex-1 flex-col min-w-0  pt-16">
							<FuseAnimate delay={600}>
								<Typography className="px-16 pb-8 text-18 font-300">
									How many pages your users visit?
                            </Typography>
							</FuseAnimate>

							<div className="widget w-full p-16 pb-32">
								<Acquisition data={widgets.acquisition} />
							</div>
							<FuseAnimate delay={600}>
								<Typography className="px-16 pb-8 text-18 font-300">
									Where are your users?
                            </Typography>
							</FuseAnimate>

							<div className="widget w-full p-16 pb-32">
								<Location data={widgets.location} />
							</div>

							<FuseAnimate delay={600}>
								<Typography className="px-16 pb-8 text-18 font-300">
									Where do your users visit?
                            </Typography>
							</FuseAnimate>

							<div className="widget w-full p-16 pb-32">
								<PagesVisited data={widgets.pagesVisited} />
							</div>
						</div>
						<div className="flex flex-wrap w-full md:w-320 pt-16">
							<div className="mb-32 w-full sm:w-1/2 md:w-full">
								<FuseAnimate delay={600}>
									<Typography className="px-16 pb-8 text-18 font-300">
										What are your top devices?
                                </Typography>
								</FuseAnimate>

								<div className="widget w-full p-16">
									<Devices data={widgets.devices} />
								</div>
							</div>
							<div className="mb-32 w-full sm:w-1/2 md:w-full">
								<FuseAnimate delay={600}>
									<Typography className="px-16 pb-8 text-18 font-300 lg:pt-0">
										What are your top campaigns?
                                </Typography>
								</FuseAnimate>
								<div className="widget w-full p-16">
									<Campaigns data={widgets.campaigns} />
								</div>
							</div>
							<div className="mb-32 w-full sm:w-1/2 md:w-full">

								<FuseAnimate delay={600}>
									<div className="px-16 pb-8 text-18 font-300">
										How are your sales?
                                </div>
								</FuseAnimate>

								<div className="widget w-full p-16">
									<Sales data={widgets.sales} />
								</div>
							</div>
						</div>
					</div>
				</FuseAnimate>
			</div>
		)
	}
}

export default Analytics;