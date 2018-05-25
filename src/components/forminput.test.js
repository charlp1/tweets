import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import {
    FormGroup,
    FormFeedback,
    Input,
} from 'reactstrap';
import FormInput from './forminput';

const setup = () => {
    let value = 'value';
    const onChange = sinon.spy();
    const error = 'error';
    const form = (
        <FormInput
            className=''
            type='text'
            name='user-input'
            value={ value }
            placeholder='type here'
            onChange={ onChange }
            error={ error }
            errorClassName='error-class'
        />
    );
    const shallowRender = shallow(form);

    return {
        value,
        onChange,
        error,
        form,
        shallowRender,
    };
};

describe('<FormInput />', () => {
    it('renders without crashing', () => {
        const { form } = setup();
        const div = document.createElement('div');

        ReactDOM.render(
            form,
            div
        );
    });

    it('renders a <FormGroup /> component', () => {
        const { shallowRender } = setup();

        expect(shallowRender.find(FormGroup)).to.have.length(1);
    });

    it('renders a <Input /> component', () => {
        const { shallowRender } = setup();

        expect(shallowRender.find(Input)).to.have.length(1);
    });

    it('passes value props to <Input />', () => {
        const { shallowRender, value } = setup();
        const input = shallowRender.find(Input);

        expect(input.props().value).to.equal(value);
    });

    it('passes onChange props to <Input />', () => {
        const { shallowRender, onChange } = setup();
        const input = shallowRender.find(Input);

        expect(input.props().onChange).to.equal(onChange);
    });

    it('renders a <FormFeedback /> component', () => {
        const { shallowRender } = setup();

        expect(shallowRender.find(FormFeedback)).to.have.length(1);
    });

    it('passes error props to <FormFeedback />', () => {
        const { shallowRender, error } = setup();
        const feedback = shallowRender.find(FormFeedback);

        expect(feedback.children().text()).to.equal(error);
    });
});
