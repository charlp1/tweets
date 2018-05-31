import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import { Button } from 'reactstrap';
import CustomForm from './form';
import FormInput from './forminput';
import LoginForm from './loginform';

const setup = () => {
    const message = 'message';
    const onSubmit = sinon.spy();
    const form = (
        <LoginForm
            message={ message }
            onSubmit={ onSubmit }
        />
    );
    const shallowRender = shallow(form);

    return {
        message,
        onSubmit,
        form,
        shallowRender,
    };
};

describe('<LoginForm />', () => {
    it('renders without crashing', () => {
        const { form } = setup();
        const div = document.createElement('div');

        ReactDOM.render(
            form,
            div
        );
    });

    it('renders a <CustomForm /> component', () => {
        const { shallowRender } = setup();

        expect(shallowRender.find(CustomForm)).to.have.length(1);
    });

    it('passes message props to <CustomForm />', () => {
        const { shallowRender, message } = setup();
        const form = shallowRender.find(CustomForm);

        expect(form.props().message).to.equal(message);
    });

    it('renders 2 <FormInput /> components', () => {
        const { shallowRender } = setup();

        expect(shallowRender.find(FormInput)).to.have.length(2);
    });

    it('renders a <Button /> component', () => {
        const { shallowRender } = setup();

        expect(shallowRender.find(Button)).to.have.length(1);
    });

    it('button has LOGIN text', () => {
        const { shallowRender } = setup();
        const button = shallowRender.find(Button);

        expect(button.children().text()).to.equal('LOGIN');
    });

    it('button is disabled by default', () => {
        const { shallowRender } = setup();
        const button = shallowRender.find(Button);

        expect(button.props().disabled).to.equal(true);
    });

    it('button is enabled when form is filled', () => {
        const { shallowRender } = setup();

        shallowRender.setState({
            username: 'test',
            password: 'test'
        });
        shallowRender.update();

        const button = shallowRender.find(Button);

        expect(button.props().disabled).to.equal(false);
    });

    it('calls onSubmit when button is clicked', () => {
        const { shallowRender, onSubmit } = setup();

        shallowRender.setState({
            username: 'tester-user',
            password: 'tester-password'
        });
        shallowRender.update();

        const button = shallowRender.find(Button);

        button.simulate('click');
        expect(onSubmit).to.have.property('callCount', 1);
    });
});
