import Advertisements from './Advertisements';
import Advertisement from './Advertisement';

export const AdvertisementsConfig = {
  settings: {
    layout: {
      config: {}
    }
  },
  routes: [
    {
      path: '/advertisements',
      component: Advertisements
    },
    {
      path: '/advertisements/:id',
      component: Advertisement
    }
  ]
};