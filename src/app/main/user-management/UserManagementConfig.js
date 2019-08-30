import UserManagement from './UserManagement.js';

export const UserManagementConfig = {
  settings: {
    layout: {
      config: {}
    }
  },
  routes: [
    {
      path: '/user-management',
      component: UserManagement
    }
  ]
};