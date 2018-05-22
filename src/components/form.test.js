import React from 'react';
import ReactDOM from 'react-dom';
import CustomForm from './form';

it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(
        <CustomForm
            message={ '' }
        >
            FORM
        </CustomForm>,
        div
    );
});
