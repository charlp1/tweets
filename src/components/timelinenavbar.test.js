import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import {
    Collapse,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Nav,
    NavbarToggler,
    UncontrolledDropdown,
} from 'reactstrap';
import NavBar from './navbar';
import TimelineNavBar from './timelinenavbar';

const setup = () => {
    const username = 'User';
    const onLogout = sinon.spy();
    const navbar = (
        <TimelineNavBar
            username={ username }
            onLogout={ onLogout }
        />
    );
    const shallowRender = shallow(navbar);

    return {
        username,
        onLogout,
        navbar,
        shallowRender,
    };
};

describe('<TimelineNavBar />', () => {
    it('renders without crashing', () => {
        const { navbar } = setup();
        const div = document.createElement('div');

        ReactDOM.render(
            navbar,
            div
        );
    });

    it('renders a <NavBar /> component', () => {
        const { shallowRender } = setup();

        expect(shallowRender.find(NavBar)).to.have.length(1);
    });

    it('renders a <NavbarToggler /> component', () => {
        const { shallowRender } = setup();

        expect(shallowRender.find(NavbarToggler)).to.have.length(1);
    });

    it('renders a <Collapse /> component', () => {
        const { shallowRender } = setup();

        expect(shallowRender.find(Collapse)).to.have.length(1);
    });

    it('renders a <Nav /> component', () => {
        const { shallowRender } = setup();

        expect(shallowRender.find(Nav)).to.have.length(1);
    });

    it('renders a <UncontrollableDropdown /> component', () => {
        const { shallowRender } = setup();

        expect(shallowRender.find(UncontrolledDropdown)).to.have.length(1);
    });

    it('renders a <DropdownToggle /> component', () => {
        const { shallowRender } = setup();

        expect(shallowRender.find(DropdownToggle)).to.have.length(1);
    });

    it('displays username in dropdown toggle', () => {
        const { shallowRender, username } = setup();
        const toggle = shallowRender.find(DropdownToggle);

        expect(toggle.children().text()).to.equal(username);
    });

    it('renders a <DropdownMenu /> component', () => {
        const { shallowRender } = setup();

        expect(shallowRender.find(DropdownMenu)).to.have.length(1);
    });

    it('renders a <DropdownItem /> component', () => {
        const { shallowRender } = setup();

        expect(shallowRender.find(DropdownItem)).to.have.length(1);
    });

    it('clicking logout calls onLogout', () => {
        const { shallowRender, onLogout } = setup();
        const logout = shallowRender.find(DropdownItem);

        logout.simulate('click');
        expect(onLogout).to.have.property('callCount', 1);
    });
});
