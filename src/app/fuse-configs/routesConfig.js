import React from 'react';
import { Redirect } from 'react-router-dom';
import { FuseUtils } from '@fuse';
import { AnalyticsConfig } from 'app/main/analytics/AnalyticsConfig';
import { RealTimeConfig } from 'app/main/real-time/RealTimeConfig';
import { AudienceConfig } from 'app/main/audience/AudienceConfig';
import { UserManagementConfig } from 'app/main/user-management/UserManagementConfig';
import { AdvertisementsConfig } from 'app/main/advertisements/AdvertisementsConfig';
import { RevenueConfig } from 'app/main/revenue-center/RevenueConfig';
import { PostReportsConfig } from 'app/main/post-reports/PostReportsConfig';

const routeConfigs = [
    AnalyticsConfig,
    RealTimeConfig,
    AudienceConfig,
    UserManagementConfig,
    AdvertisementsConfig,
    RevenueConfig,
    PostReportsConfig
];

const routes = [
    ...FuseUtils.generateRoutesFromConfigs(routeConfigs),
    {
        path: '/',
        component: () => <Redirect to="/analytics" />
    }
];

export default routes;
