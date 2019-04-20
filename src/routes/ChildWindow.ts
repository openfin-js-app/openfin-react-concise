import AccessibilityIcon from '@material-ui/icons/Accessibility';
import ReportIcon from '@material-ui/icons/Report';

import { RouteItem, ReportView } from 'react-openfin-mat-impl';

import Accessibility from '../views/Accessibility/Accessibility';

const childRoutes:RouteItem[]=[
    {
        path:'/childWindow/accessibility',
        sidebarName:"accessibility.sidebar",
        navbarName:"accessibility.navbar",
        icon: AccessibilityIcon,
        component: Accessibility,
    },
    {
        path:'/childWindow/report',
        sidebarName:"report.sidebar",
        navbarName:"report.navbar",
        icon: ReportIcon,
        component: ReportView,
    },
];

export default childRoutes;