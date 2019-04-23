import * as React from 'react';
import { InitializeReactOpenfin, ReactOpenfin } from 'react-openfin';
import { createShallow, createMount, createRender } from '@material-ui/core/test-utils';
import { MemoryRouter } from 'react-router-dom';

import i18n from "./i18n";
import hist from "./utils/history";

import App from './App';

describe('App entry', ()=>{

    let shallow;
    let mount;
    let render;

    beforeAll(() => {
        InitializeReactOpenfin({
            finUuid: process.env.REACT_APP_FIN_UUID,
            finMockupForceSilentMode:true,
            i18n,
            hist,
            configTabs:[],
            launchBarItems:[],
        });
        mount = createMount();
        render = createRender();
    });

    afterAll(() => {
        mount.cleanUp();
    });


    beforeEach(() => {
        shallow = createShallow();
    });

    it('it renders correctly by default',()=>{
        const wrapper = mount(
            <ReactOpenfin>
                <MemoryRouter initialEntries={['/']}>
                    <App/>
                </MemoryRouter>
            </ReactOpenfin>
        )
        expect(wrapper).toBeTruthy();
    })


})