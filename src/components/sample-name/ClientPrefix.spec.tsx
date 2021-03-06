import * as React from 'react';
import { createShallow, createMount } from '@material-ui/core/test-utils';
import Button from '@material-ui/core/Button';
import { InitializeReactOpenfin, ReactOpenfin } from 'react-openfin';

import i18n from "../../i18n";
import hist from "../../utils/history";

import ClientPrefix from './ClientPrefix';

describe('ClientPrefix comp',()=>{

    let shallow;
    let mount;

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
    });

    beforeEach(() => {
        shallow = createShallow();
        mount = createMount();
    });

    afterEach(()=>{
        mount.cleanUp();
    })

    it('dashboard accessibility',()=>{

        const pathname = '/dashboard/accessibility';

        const wrapper = mount(
            <ReactOpenfin>
                <ClientPrefix
                    location={{
                        pathname,
                    }}
                />
            </ReactOpenfin>
        )

        const btn = wrapper.find(Button);

        expect(btn).toHaveLength(1);

        btn.childAt(0).props().onClick();

    })

    it('dashboard view-one',()=>{

        const pathname = '/dashboard/view-one';

        const wrapper = mount(
            <ReactOpenfin>
                <ClientPrefix
                    location={{
                        pathname,
                    }}
                />
            </ReactOpenfin>
        )

        const btn = wrapper.find(Button);

        expect(btn).toHaveLength(1);

        btn.childAt(0).props().onClick();

    })

    it('dashboard view-two',()=>{

        const pathname = '/dashboard/view-two';

        const wrapper = mount(
            <ReactOpenfin>
                <ClientPrefix
                    location={{
                        pathname,
                    }}
                />
            </ReactOpenfin>
        )

        const btn = wrapper.find(Button);

        expect(btn).toHaveLength(1);

        btn.childAt(0).props().onClick();

    })

    it('childWindow view-one',()=>{

        const pathname = '/childWindow/view-one';

        const wrapper = mount(
            <ReactOpenfin>
                <ClientPrefix
                    location={{
                        pathname,
                    }}
                />
            </ReactOpenfin>
        )

        const btn = wrapper.find(Button);

        expect(btn).toHaveLength(1);

        btn.childAt(0).props().onClick();

    })

    it('childWindow view-two',()=>{

        const pathname = '/childWindow/view-two';

        const wrapper = mount(
            <ReactOpenfin>
                <ClientPrefix
                    location={{
                        pathname,
                    }}
                />
            </ReactOpenfin>
        )

        const btn = wrapper.find(Button);

        expect(btn).toHaveLength(1);

        btn.childAt(0).props().onClick();

    })

})
