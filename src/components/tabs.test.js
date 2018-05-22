import React from 'react';
import ReactDOM from 'react-dom';
import Tabs from './tabs';

it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(
        <Tabs
            tabs={[
                {
                    id: '1',
                    label: 'Tab 1',
                    content: 'This is tab 1'
                },
                {
                    id: '2',
                    label: 'Tab 2',
                    content: 'This is tab 2'
                }
            ]}
        />,
        div
    );
});
