import React from 'react';
import ReactDOM from 'react-dom';
import Message from './message';

it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(
        <Message
            type='info'
            text='message'
        />,
        div
    );
});
