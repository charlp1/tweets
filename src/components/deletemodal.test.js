import React from 'react';
import ReactDOM from 'react-dom';
import DeleteModalDialog from './deletemodal';

it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(
        <DeleteModalDialog
            isOpen={ false }
            onClose={ () => {} }
            onDelete={ () => {} }
        />,
        div
    );
});
