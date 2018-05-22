import React from 'react';
import ReactDOM from 'react-dom';
import Tweets from './tweets';

it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(
        <Tweets
            username='user'
            tweets={[
                {
                    id: 1,
                    text: 'tweet',
                    user: 'user',
                    firstname: 'User',
                    created: 1,
                    timestamp: ''
                }
            ]}
            onClickTweet={ () => {} }
            onEditTweet={ () => {} }
            onDeleteTweet={ () => {} }
        />,
        div
    );
});
