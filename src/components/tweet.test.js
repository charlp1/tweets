import React from 'react';
import ReactDOM from 'react-dom';
import Tweet from './tweet';

it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(
        <Tweet
            onClickTweet={ () => {} }
            data={{
                id: 1,
                text: 'tweet',
                user: 'user',
                firstname: 'User',
                created: 1,
                timestamp: ''
            }}
        />,
        div
    );
});
