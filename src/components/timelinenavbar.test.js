import React from 'react';
import ReactDOM from 'react-dom';
import TimelineNavBar from './timelinenavbar';

it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(
        <TimelineNavBar
            username='User'
            onLogout={ () => {} }
        />,
        div
    );
});
