import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import {
    Button,
    InputGroup,
    InputGroupAddon,
    FormGroup,
} from 'reactstrap';
import FormInput from './forminput';
import TweetForm from './tweetform';

const setup = () => {
    const onSubmit = sinon.spy();
    const form = (
        <TweetForm
            onSubmit={ onSubmit }
        />
    );
    const shallowRender = shallow(form);

    return {
        onSubmit,
        form,
        shallowRender,
    }
};

describe('<TweetForm />', () => {
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

    it('renders a <InputGroup /> component', () => {
        const { shallowRender } = setup();

        expect(shallowRender.find(InputGroup)).to.have.length(1);
    });

    it('renders a <FormInput /> component', () => {
        const { shallowRender } = setup();

        expect(shallowRender.find(FormInput)).to.have.length(1);
    });

    it('renders a <InputGroupAddon /> component', () => {
        const { shallowRender } = setup();

        expect(shallowRender.find(InputGroupAddon)).to.have.length(1);
    });

    it('renders a <Button /> component', () => {
        const { shallowRender } = setup();

        expect(shallowRender.find(Button)).to.have.length(1);
    });

    it('displays message when no input is provided', () => {
        const { shallowRender } = setup();
        const button = shallowRender.find(Button);

        button.simulate('click');
        expect(
            shallowRender.state().message
        ).to.equal(
            'Please provide a tweet message.'
        );
    });

    it('calls onSubmit when input is provided', () => {
        const { shallowRender, onSubmit } = setup();
        const button = shallowRender.find(Button);

        shallowRender.setState({ text: 'test' });
        button.simulate('click');
        expect(onSubmit).to.have.property('callCount', 1);
    });
});
