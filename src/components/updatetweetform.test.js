import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import {
    Button,
    ButtonGroup,
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
} from 'reactstrap';
import FormInput from './forminput';
import UpdateTweetForm from './updatetweetform';

const setup = () => {
    const data = {
        id: 1,
        text: 'tweet',
        user: 'user',
        firstname: 'User',
        created: 1,
        timestamp: ''
    };
    const onClickTweet = sinon.spy();
    const onEditTweet = sinon.spy();
    const onDeleteTweet = sinon.spy();
    const form = (
        <UpdateTweetForm
            data={ data }
            onClickTweet={ onClickTweet }
            onEditTweet={ onEditTweet }
            onDeleteTweet={ onDeleteTweet }
        />
    );
    const shallowRender = shallow(form);

    return {
        data,
        onClickTweet,
        onEditTweet,
        onDeleteTweet,
        form,
        shallowRender,
    };
};

describe('<UpdateTweetForm />', () => {
    it('renders without crashing', () => {
        const { form } = setup();
        const div = document.createElement('div');

        ReactDOM.render(
            form,
            div
        );
    });

    it('renders a <Card /> component', () => {
        const { shallowRender } = setup();

        expect(shallowRender.find(Card)).to.have.length(1);
    });

    it('renders a <CardBody /> component', () => {
        const { shallowRender } = setup();

        expect(shallowRender.find(CardBody)).to.have.length(1);
    });

    it('renders a <CardTitle /> component', () => {
        const { shallowRender } = setup();

        expect(shallowRender.find(CardTitle)).to.have.length(1);
    });

    it('displays first name in <CardTitle />', () => {
        const { shallowRender, data } = setup();
        const title = shallowRender.find(CardTitle);

        expect(title.children().text()).to.equal(data.firstname);
    });

    it('renders a <CardSubtitle /> component', () => {
        const { shallowRender } = setup();

        expect(shallowRender.find(CardSubtitle)).to.have.length(1);
    });

    it('displays timestamp in <CardSubtitle />', () => {
        const { shallowRender, data } = setup();
        const subtitle = shallowRender.find(CardSubtitle);

        expect(
            subtitle.children().text()
        ).to.equal(
            data.timestamp
        );
    });

    it('renders a <FormInput /> component', () => {
        const { shallowRender } = setup();

        expect(shallowRender.find(FormInput)).to.have.length(1);
    });

    it('passes text props to <FormInput />', () => {
        const { shallowRender, data } = setup();
        const input = shallowRender.find(FormInput);

        expect(input.props().value).to.equal(data.text);
    });

    it('renders a <ButtonGroup /> component', () => {
        const { shallowRender } = setup();

        expect(shallowRender.find(ButtonGroup)).to.have.length(1);
    });

    it('renders 3 <Button /> components', () => {
        const { shallowRender } = setup();

        expect(shallowRender.find(Button)).to.have.length(3);
    });

    it('calls onClickTweet on View button click', () => {
        const { shallowRender, onClickTweet } = setup();
        const buttons = shallowRender.find(Button);
        const viewButton = buttons.get(2);

        viewButton.props.onClick();
        expect(onClickTweet).to.have.property('callCount', 1);
    });

    it('calls onEditTweet on Edit button click', () => {
        const { shallowRender, onEditTweet } = setup();
        const buttons = shallowRender.find(Button);
        const editButton = buttons.get(0);

        shallowRender.setState({ text: 'test' });
        editButton.props.onClick();
        expect(onEditTweet).to.have.property('callCount', 1);
    });

    it('calls onDeleteTweet on Delete button click', () => {
        const { shallowRender, onDeleteTweet } = setup();
        const buttons = shallowRender.find(Button);
        const deleteButton = buttons.get(1);

        deleteButton.props.onClick();
        expect(onDeleteTweet).to.have.property('callCount', 1);
    });
});
