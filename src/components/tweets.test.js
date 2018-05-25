import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Tweet from './tweet';
import UpdateTweetForm from './updatetweetform';
import Tweets from './tweets';

const setup = () => {
    const username = 'user';
    const tweetsData = [
        {
            id: 1,
            text: 'tweet 1',
            user: 'user',
            firstname: 'User',
            created: 1,
            timestamp: '10'
        },
        {
            id: 2,
            text: 'tweet 2',
            user: 'test',
            firstname: 'Test',
            created: 2,
            timestamp: '20'
        }
    ];
    const onClickTweet = sinon.spy();
    const onEditTweet = sinon.spy();
    const onDeleteTweet = sinon.spy();
    const tweets = (
        <Tweets
            username={ username }
            tweets={ tweetsData }
            onClickTweet={ onClickTweet }
            onEditTweet={ onEditTweet }
            onDeleteTweet={ onDeleteTweet }
        />
    );
    const shallowRender = shallow(tweets);

    return {
        username,
        tweetsData,
        onClickTweet,
        onEditTweet,
        onDeleteTweet,
        tweets,
        shallowRender,
    };
};

describe('<Tweets />', () => {
    it('renders without crashing', () => {
        const { tweets } = setup();
        const div = document.createElement('div');

        ReactDOM.render(
            tweets,
            div
        );
    });

    it('renders 2 tweet items', () => {
        const { shallowRender, tweetsData } = setup();

        expect(shallowRender.children()).to.have.length(tweetsData.length);
    });

    it('renders an item as a <Tweet /> component', () => {
        const { shallowRender } = setup();

        expect(shallowRender.find(Tweet)).to.have.length(1);
    });

    it('renders an item as a <UpdateTweetForm /> component', () => {
        const { shallowRender } = setup();

        expect(shallowRender.find(UpdateTweetForm)).to.have.length(1);
    });
});
