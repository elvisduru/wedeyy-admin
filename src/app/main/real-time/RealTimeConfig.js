import RealTime from './RealTime.js';

export const RealTimeConfig = {
  settings: {
    layout: {
      config: {}
    }
  },
  routes: [
    {
      path: '/realtime',
      component: RealTime
    }
  ]
};