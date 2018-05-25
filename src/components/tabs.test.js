import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import {
    Nav,
    NavItem,
    NavLink,
    TabContent,
    TabPane,
} from 'reactstrap';
import Tabs from './tabs';

const setup = () => {
    const tabsData = [
        {
            id: '1',
            label: 'Tab 1',
            content: 'This is tab 1'
        },
        {
            id: '2',
            label: 'Tab 2',
            content: 'This is tab 2'
        }
    ];
    const tabs = (
        <Tabs
            tabs={ tabsData }
        />
    );
    const shallowRender = shallow(tabs);

    return {
        tabsData,
        tabs,
        shallowRender,
    };
};

describe('<Tabs />', () => {
    it('renders without crashing', () => {
        const { tabs } = setup();
        const div = document.createElement('div');

        ReactDOM.render(
            tabs,
            div
        );
    });

    it('renders a <Nav /> component', () => {
        const { shallowRender } = setup();

        expect(shallowRender.find(Nav)).to.have.length(1);
    });

    it('renders 2 <NavItem /> components', () => {
        const { shallowRender } = setup();

        expect(shallowRender.find(NavItem)).to.have.length(2);
    });

    it('renders a <NavLink /> inside a <NavItem />', () => {
        const { shallowRender } = setup();
        const navitem = shallowRender.find(NavItem).first();

        expect(navitem.find(NavLink)).to.have.length(1);
    });

    it('displays tab label in <NavLink />', () => {
        const { shallowRender, tabsData } = setup();
        const navLink = shallowRender.find(NavLink).first();

        expect(navLink.children().text()).to.equal(tabsData[0].label);
    });

    it('renders a <TabContent /> component', () => {
        const { shallowRender } = setup();

        expect(shallowRender.find(TabContent)).to.have.length(1);
    });

    it('renders 2 <TabPane /> components', () => {
        const { shallowRender } = setup();

        expect(shallowRender.find(TabPane)).to.have.length(2);
    });

    it('displays tab content in <TabPane />', () => {
        const { shallowRender, tabsData } = setup();
        const tabPane = shallowRender.find(TabPane).first();

        expect(tabPane.children().text()).to.equal(tabsData[0].content);
    });

    it('clicking a tab link sets the active tab', () => {
        const { shallowRender } = setup();
        const navLink = shallowRender.find(NavLink).last();

        navLink.simulate('click');
        expect(shallowRender.state().activeTab).to.equal('2');
    });
});
