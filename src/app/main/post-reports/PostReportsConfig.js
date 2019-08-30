import PostReports from './PostReports';

export const PostReportsConfig = {
  settings: {
    layout: {
      config: {}
    }
  },
  routes: [
    {
      path: '/post-reports',
      component: PostReports
    }
  ]
};