import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './navbar';

it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(
        <NavBar
            brand='Home'
        >
            Links
        </NavBar>,
        div
    );
});
