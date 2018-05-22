import React from 'react';
import ReactDOM from 'react-dom';
import LoginForm from './loginform';

it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(
        <LoginForm
            message=''
            onSubmit={ () => {} }
        />,
        div
    );
});
