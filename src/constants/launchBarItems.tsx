import {ILaunchBarItem} from 'react-openfin';

import AccessibilityIcon from '@material-ui/icons/Accessibility';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import BackupIcon from '@material-ui/icons/Backup';
import BugReportIcon from '@material-ui/icons/BugReport';
import LanguageIcon from '@material-ui/icons/Language';
import ReportIcon from '@material-ui/icons/Report';

import googleSearch from '../assets/svg/other/google-search.svg';

export const sampleItems:ILaunchBarItem[]=[
    {
        icon:AccessibilityIcon,
        disabled:false,
        svg:null,
        appJson:{
            name:`${process.env.REACT_APP_FIN_UUID}-child-accessibility`,
            url:`${process.env.PUBLIC_URL}/childWindow/accessibility`,
            frame:false,
            resizable:true,
            state:'normal',
            autoShow:true,
            minWidth:520,
            minHeight:170,
        },
    },
    {
        icon:ReportIcon,
        disabled:false,
        svg:null,
        appJson:{
            name:`${process.env.REACT_APP_FIN_UUID}-child-report`,
            url:`${process.env.PUBLIC_URL}/childWindow/report`,
            frame:false,
            resizable:true,
            state:'normal',
            autoShow:true,
            minWidth:430,
            minHeight:100,
        },
    },
    {
        icon:null,
        disabled:false,
        svg:googleSearch,
        appJson:{
            name:`${process.env.REACT_APP_FIN_UUID}-child-google`,
            url:'https://www.google.com/',
            frame:true,
            resizable:true,
            state:'normal',
            autoShow:true,
        },
    },
];

export const disabledItems:ILaunchBarItem[]=[
    {
        icon:AccountBoxIcon,
        disabled:true,
        svg:null,
        appJson:{},
    },
    {
        icon:BookmarkIcon,
        disabled:true,
        svg:null,
        appJson:{},
    },
    {
        icon:BackupIcon,
        disabled:true,
        svg:null,
        appJson:{},
    },
    {
        icon:BugReportIcon,
        disabled:true,
        svg:null,
        appJson:{},
    },
    {
        icon:LanguageIcon,
        disabled:true,
        svg:null,
        appJson:{},
    },
];

export const launchBarItems = [
    ...sampleItems,
    ...disabledItems,
];

export default launchBarItems;