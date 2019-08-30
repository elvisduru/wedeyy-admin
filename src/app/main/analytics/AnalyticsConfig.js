import Analytics from './Analytics';

export const AnalyticsConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes: [
        {
            path: '/analytics',
            component: Analytics
        }
    ]
};

/**
 * Lazy load Example
 */
/*
import React from 'react';

export const ExampleConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/example',
            component: React.lazy(() => import('./Example'))
        }
    ]
};
*/
