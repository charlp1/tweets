import React from 'react';
import ReactDOM from 'react-dom';
import TweetForm from './tweetform';

it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(
        <TweetForm
            onSubmit={ () => {} }
        />,
        div
    );
});
