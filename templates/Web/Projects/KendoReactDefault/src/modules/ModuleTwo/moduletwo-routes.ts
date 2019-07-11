import { lazy } from 'react';

const moduleTwoRoutes = [
    { exact: true, path: '/moduletwo', component: lazy(() => (import('./ModuleTwo')))},
    { exact: true, path: '/moduletwo/viewone', component: lazy(() => (import('./ViewOne/ViewOne')))},
    { exact: true, path: '/moduletwo/viewtwo', component: lazy(() => (import('./ViewTwo/ViewTwo')))}
];

export default moduleTwoRoutes;
