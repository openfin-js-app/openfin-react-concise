import AccessibilityIcon from '@material-ui/icons/Accessibility';
import ReportIcon from '@material-ui/icons/Report';
import SettingsIcon from '@material-ui/icons/Settings';

import { RouteItem, ReportView } from 'react-openfin-mat-impl';

import { MyConfigView } from '../constants/configTabs';

import Accessibility from '../views/Accessibility/Accessibility';

const dashboardRoutes:RouteItem[]=[
    {
        path:'/dashboard/accessibility',
        sidebarName:"accessibility.sidebar",
        navbarName:"accessibility.navbar",
        icon: AccessibilityIcon,
        component: Accessibility,
    },
    {
        path:'/dashboard/config',
        sidebarName:"configuration.sidebar",
        navbarName:"configuration.navbar",
        icon: SettingsIcon,
        component: MyConfigView,
    },
    {
        path:'/dashboard/report',
        sidebarName:"report.sidebar",
        navbarName:"report.navbar",
        icon: ReportIcon,
        component: ReportView,
    },
];

export default dashboardRoutes;