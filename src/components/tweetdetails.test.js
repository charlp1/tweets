import React from 'react';
import ReactDOM from 'react-dom';
import TweetDetails from './tweetdetails';

it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(
        <TweetDetails
            data={{
                id: 1,
                text: 'tweet',
                firstname: 'User',
                timestamp: ''
            }}
        />,
        div
    );
});
