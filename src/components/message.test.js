import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { Alert } from 'reactstrap';
import Message from './message';

const setup = () => {
    const type = 'info';
    const text = 'message';
    const message = (
        <Message
            type={ type }
            text={ text }
        />
    );
    const shallowRender = shallow(message);

    return {
        text,
        message,
        shallowRender,
    };
};

describe('<Message />', () => {
    it('renders without crashing', () => {
        const { message } = setup();
        const div = document.createElement('div');

        ReactDOM.render(
            message,
            div
        );
    });

    it('renders an <Alert /> component', () => {
        const { shallowRender } = setup();

        expect(shallowRender.find(Alert)).to.have.length(1);
    });

    it('passes type props to <Alert />', () => {
        const { shallowRender, type } = setup();

        expect(shallowRender.props().type).to.equal(type);
    });

    it('visible when text props is passed', () => {
        const { shallowRender } = setup();

        expect(shallowRender.props().isOpen).to.equal(true);
    });

    it('displays text props', () => {
        const { shallowRender, text } = setup();
        const alert = shallowRender.find(Alert);

        expect(alert.children().text()).to.equal(text);
    });
});
