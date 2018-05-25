import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import {
    Jumbotron,
    Form,
} from 'reactstrap';
import Message from './message';
import CustomForm from './form';

const setup = () => {
    const message = 'message';
    const children = 'FORM Content';
    const form = (
        <CustomForm
            message={ message }
        >
            { children }
        </CustomForm>
    );
    const shallowRender = shallow(form);

    return {
        message,
        children,
        form,
        shallowRender,
    };
};

describe('<CustomForm />', () => {
    it('renders without crashing', () => {
        const { form } = setup();
        const div = document.createElement('div');

        ReactDOM.render(
            form,
            div
        );
    });

    it('renders a <Jumbotron /> component', () => {
        const { shallowRender } = setup();

        expect(shallowRender.find(Jumbotron)).to.have.length(1);
    });

    it('renders a <Form /> component', () => {
        const { shallowRender } = setup();

        expect(shallowRender.find(Form)).to.have.length(1);
    });

    it('renders a <Message /> component', () => {
        const { shallowRender } = setup();

        expect(shallowRender.find(Message)).to.have.length(1);
    });

    it('passes message props to <Message />', () => {
        const { shallowRender, message } = setup();
        const messageComp = shallowRender.find(Message);

        expect(messageComp.props().text).to.equal(message);
    });

    it('renders children when passed in', () => {
        const { shallowRender, children } = setup();
        const form = shallowRender.find(Form);

        expect(form.children().contains(children)).to.equal(true);
    });
});
