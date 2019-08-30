const navigationConfig = [
    {
        'id': 'dashboard',
        'title': 'Dashboard',
        'type': 'group',
        'icon': 'apps',
        'children': [
            {
                'id': 'analytics',
                'title': 'Analytics',
                'type': 'item',
                'icon': 'whatshot',
                'url': '/analytics'
            },
            {
                'id': 'real-time',
                'title': 'Real Time Data',
                'type': 'item',
                'icon': 'access_time',
                'url': '/realtime'
            },
            {
                'id': 'audience',
                'title': 'Audience',
                'type': 'item',
                'icon': 'group',
                'url': '/audience'
            },
            {
                'id': 'user-management',
                'title': 'User Management',
                'type': 'item',
                'icon': 'person',
                'url': '/user-management'
            },
            {
                'id': 'advertisements',
                'title': 'Advertisements',
                'type': 'item',
                'icon': 'featured_video',
                'url': '/advertisements'
            },
            {
                'id': 'revenue',
                'title': 'Revenue',
                'type': 'item',
                'icon': 'money',
                'url': '/revenue'
            },
            {
                'id': 'post-reports',
                'title': 'Post Reports',
                'type': 'item',
                'icon': 'info',
                'url': '/post-reports'
            },
        ]
    }
];

export default navigationConfig;
