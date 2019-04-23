import * as React from 'react';
import Typography from '@material-ui/core/Typography';

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { createShallow, createMount } from '@material-ui/core/test-utils';

import SampleNotification from './SampleNotification';

const muiTheme = createMuiTheme({});

describe('SampleNotificationView',()=>{

    let shallow;
    let mount;

    beforeEach(() => {
        mount = createMount();
        shallow = createShallow();
    });

    afterEach(()=>{
        mount.cleanUp();
    });

    it('render correctly by default',()=>{
        const wrapper = shallow(
            <ThemeProvider theme={muiTheme}>
                <SampleNotification/>
            </ThemeProvider>
        );
        expect(wrapper).toMatchSnapshot();
    })

    it('check the content of typography',()=>{
        const wrapper = mount(
            <ThemeProvider theme={muiTheme}>
                <SampleNotification/>
            </ThemeProvider>
        );
        expect(wrapper.find(Typography)).toMatchSnapshot();
    })

});
