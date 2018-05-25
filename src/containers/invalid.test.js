import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import {
    Row,
    Button,
} from 'reactstrap';
import NavBar from './../components/navbar';
import InvalidScreen from './invalid';

const setup = () => {
    const push = sinon.spy();
    const screen = (
        <InvalidScreen
            history={{ push }}
        />
    );
    const shallowRender = shallow(screen);

    return {
        push,
        screen,
        shallowRender,
    };
};

describe('<InvalidScreen />', () => {
    it('renders without crashing', () => {
        const { screen } = setup();
        const div = document.createElement('div');

        ReactDOM.render(
            screen,
            div
        );
    });

    it('renders 2 <Row /> components', () => {
        const { shallowRender } = setup();

        expect(shallowRender.find(Row)).to.have.length(2);
    });

    it('renders a <NavBar /> component', () => {
        const { shallowRender } = setup();

        expect(shallowRender.find(NavBar)).to.have.length(1);
    });

    it('renders a <Button /> component', () => {
        const { shallowRender } = setup();

        expect(shallowRender.find(Button)).to.have.length(1);
    });

    it('calls push when clicking button', () => {
        const { shallowRender, push } = setup();
        const button = shallowRender.find(Button);

        button.simulate('click');
        expect(push).to.have.property('callCount', 1);
    });
});
