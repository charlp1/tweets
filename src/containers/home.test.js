import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import {
    Row,
} from 'reactstrap';
import NavBar from './../components/navbar';
import Tabs from './../components/tabs';
import { HomeScreen } from './home';

const setup = () => {
    const users = {
        user: {
            username: 'user',
            firstname: 'User',
            password: 'user'
        }
    };
    const addUser = sinon.spy();
    const loginUser = sinon.spy();
    const push = sinon.spy();
    const screen = (
        <HomeScreen
            users={ users }
            addUser={ addUser }
            loginUser={ loginUser }
            history={{ push }}
        />
    );
    const shallowRender = shallow(screen);

    return {
        users,
        addUser,
        loginUser,
        push,
        screen,
        shallowRender,
    };
};

describe('<HomeScreen />', () => {
    it('renders without crashing', () => {
        const { screen } = setup();
        const div = document.createElement('div');

        ReactDOM.render(
            screen,
            div
        );
    });

    it('renders a <Row /> component', () => {
        const { shallowRender } = setup();

        expect(shallowRender.find(Row)).to.have.length(1);
    });

    it('renders a <NavBar /> component', () => {
        const { shallowRender } = setup();

        expect(shallowRender.find(NavBar)).to.have.length(1);
    });

    it('renders a <Tabs /> component', () => {
        const { shallowRender } = setup();

        expect(shallowRender.find(Tabs)).to.have.length(1);
    });

    it('has LOGIN tab', () => {
        const { shallowRender, screen } = setup();
        const tabs = shallowRender.find(Tabs);
        const tabsProps = tabs.props().tabs;

        expect(tabsProps[0].label).to.equal('LOGIN');
    });

    it('has REGISTER tab', () => {
        const { shallowRender, screen } = setup();
        const tabs = shallowRender.find(Tabs);
        const tabsProps = tabs.props().tabs;

        expect(tabsProps[1].label).to.equal('REGISTER');
    });
});
