import React from 'react';
import ReactDOM from 'react-dom';
import { HomeScreen } from './home';

it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(
        <HomeScreen
            users={{
                user: {
                    username: 'user',
                    firstname: 'User',
                    password: 'user'
                }
            }}
            addUser={ () => {} }
            loginUser={ () => {} }
            history={{
                push: () => {}
            }}
        />,
        div
    );
});
