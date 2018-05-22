import React from 'react';
import ReactDOM from 'react-dom';
import ModalDialog from './modal';

it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(
        <ModalDialog
            header='Dialog'
            body={(
                <div>dialog content</div>
            )}
            footer={(
                <div>dialog footer</div>
            )}
            isOpen={ false }
            onClose={ () => {} }
        />,
        div
    );
});
