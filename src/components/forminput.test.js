import React from 'react';
import ReactDOM from 'react-dom';
import FormInput from './forminput';

it('renders without crashing', () => {
    const div = document.createElement('div');
    let value = 'type here';

    ReactDOM.render(
        <FormInput
            className=''
            type='text'
            name='user-input'
            value={ value }
            placeholder='type here'
            onChange={ () => {} }
            error=''
            errorClassName=''
        />,
        div
    );
});
