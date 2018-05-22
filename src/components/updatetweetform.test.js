import React from 'react';
import ReactDOM from 'react-dom';
import UpdateTweetForm from './updatetweetform';

it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(
        <UpdateTweetForm
            data={{
                id: 1,
                text: 'tweet',
                user: 'user',
                firstname: 'User',
                created: 1,
                timestamp: ''
            }}
            onClickTweet={ () => {} }
            onEditTweet={ () => {} }
            onDeleteTweet={ () => {} }
        />,
        div
    );
});
