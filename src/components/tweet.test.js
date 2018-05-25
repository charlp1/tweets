import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import {
    Card,
    CardBody,
    CardTitle,
    CardText,
} from 'reactstrap';
import Tweet from './tweet';

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
    const tweet = (
        <Tweet
            onClickTweet={ onClickTweet }
            data={ data}
        />
    );
    const shallowRender = shallow(tweet);

    return {
        data,
        onClickTweet,
        tweet,
        shallowRender,
    };
};

describe('<Tweet />', () => {
    it('renders without crashing', () => {
        const { tweet } = setup();
        const div = document.createElement('div');

        ReactDOM.render(
            tweet,
            div
        );
    });

    it('renders a <Card /> component', () => {
        const { shallowRender } = setup();

        expect(shallowRender.find(Card)).to.have.length(1);
    });

    it('clicking card calls onClickTweet', () => {
        const { shallowRender, onClickTweet } = setup();

        shallowRender.simulate('click');
        expect(onClickTweet).to.have.property('callCount', 1);
    });

    it('renders a <CardBody /> component', () => {
        const { shallowRender } = setup();

        expect(shallowRender.find(CardBody)).to.have.length(1);
    });

    it('renders a <CardTitle /> component', () => {
        const { shallowRender } = setup();

        expect(shallowRender.find(CardTitle)).to.have.length(1);
    });

    it('displays firstname', () => {
        const { shallowRender, data } = setup();
        const title = shallowRender.find(CardTitle);

        expect(title.children().text()).to.equal(data.firstname);
    });

    it('renders a <Card /> component', () => {
        const { shallowRender } = setup();

        expect(shallowRender.find(Card)).to.have.length(1);
    });

    it('renders 2 <CardText /> components', () => {
        const { shallowRender } = setup();

        expect(shallowRender.find(CardText)).to.have.length(2);
    });

    it('displays tweet text', () => {
        const { shallowRender, data } = setup();
        const cardText = shallowRender.find(CardText).first();

        expect(cardText.children().text()).to.equal(data.text);
    });

    it('displays tweet timestamp', () => {
        const { shallowRender, data } = setup();
        const cardText = shallowRender.find(CardText).last();

        expect(cardText.children().text()).to.equal(data.timestamp);
    });
});
