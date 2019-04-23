import * as React from 'react';
import {Suspense} from 'react';
import * as ReactDOM from 'react-dom';
import { InitializeReactOpenfin, ReactOpenfin } from 'react-openfin';
// !!!README!!!
// alternative sample color settings uncomment to set the result 1#
// import { InitalizaeReactOpenfinMatImpl } from 'react-openfin-mat-impl';
import { I18nextProvider } from 'react-i18next';

import CircularProgress from '@material-ui/core/CircularProgress';

import i18n from './i18n';
import hist from './utils/history';

import './assets/css/main.css';

import setPlatformClass from './utils/setPlatformClass';
import App from './App';
import * as serviceWorker from './serviceWorker';

import configTabs from './constants/configTabs';
import launchBarItems from './constants/launchBarItems';

declare const window:any;

InitializeReactOpenfin({
    fin:window.fin,
    // !!!README!!!
    // uncomment to shut the browser adaptor up
    // finMockupForceSilentMode: true,
    finUuid: process.env.REACT_APP_FIN_UUID,
    i18n,
    hist,
    configTabs,
    launchBarItems,
    config:{
        // !!!README!!!
        //
        // // uncomment to hide drawer on start
        // defaultDashboardDrawerShown: false,
        // // default url to switch to
        defaultViewUrl:process.env.REACT_APP_DEFAULT_VIEW_URL,
        //
        // !!!README!!!
        // // protection fuse timeout specified over here
        // // onAppAwaitDelayTime is the fuse timout time to switch from loading view
        // onAppAwaitDelayTime: 4000,
        //
        // // onAppChildAwaitDelayTime is the fuse timout time to switch to target child url
        // onAppChildAwaitDelayTime: 200,
        //
        // // onAppNotificationAwaitDelayTime is the fuse timout time to switch to target notification url
        // onAppNotificationAwaitDelayTime: 200,
        //
        // // onAppClosingAwaitDelayTime is the fuse timout time to shutdown the whole application
        // onAppClosingAwaitDelayTime: 200,

    }
});

// !!!README!!!
// alternative sample color settings uncomment to set the result 2#
// InitalizaeReactOpenfinMatImpl({
//     primaryColor: '#d50000',
//     successColor:'#ab47bc',
//     infoColor:'#ff5722',
//     warningColor:'#cddc39',
//     dangerColor:'#ec407a',
// })

setPlatformClass(document.body,window.navigator.platform);

ReactDOM.render(
    <ReactOpenfin>
        <Suspense fallback={<CircularProgress/>}>
            <I18nextProvider i18n={i18n}>
                <App/>
            </I18nextProvider>
        </Suspense>
    </ReactOpenfin>
    ,
    document.getElementById('root')
);

serviceWorker.unregister();