import React from 'react';
import ReactDOM from 'react-dom';
import InvalidScreen from './invalid';

it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(
        <InvalidScreen
            history={{
                push: () => {}
            }}
        />,
        div
    );
});
