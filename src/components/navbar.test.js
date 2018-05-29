import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import {
    Navbar,
    NavbarBrand,
} from 'reactstrap';
import NavBar from './navbar';

const setup = () => {
    const brand = (
        <div>Home</div>
    );
    const children = (
        <div>Links</div>
    );
    const navbar = (
        <NavBar
            brand={ brand }
        >
            { children }
        </NavBar>
    );
    const shallowRender = shallow(navbar);

    return {
        brand,
        children,
        navbar,
        shallowRender,
    };
};

describe('<NavBar />', () => {
    it('renders without crashing', () => {
        const { navbar } = setup();
        const div = document.createElement('div');

        ReactDOM.render(
            navbar,
            div
        );
    });

    it('renders a <Navbar /> component', () => {
        const { shallowRender } = setup();

        expect(shallowRender.find(Navbar)).to.have.length(1);
    });

    it('renders a <NavbarBrand /> component', () => {
        const { shallowRender } = setup();

        expect(shallowRender.find(NavbarBrand)).to.have.length(1);
    });

    it('renders brand props', () => {
        const { shallowRender, brand } = setup();
        const navbarBrand = shallowRender.find(NavbarBrand);

        expect(navbarBrand.contains(brand)).to.equal(true);
    });

    it('renders children props', () => {
        const { shallowRender, children } = setup();

        expect(shallowRender.contains(children)).to.equal(true);
    });
});
