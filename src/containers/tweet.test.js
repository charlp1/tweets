import React from 'react';
import ReactDOM from 'react-dom';
import { TweetScreen } from './tweet';

it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(
        <TweetScreen
            users={{
                user: {
                    username: 'user',
                    firstname: 'User',
                    password: 'user'
                }
            }}
            tweets={{
                counter: 1,
                data: {
                    1: {
                        id: 1,
                        text: 'tweet',
                        user: 'user',
                        created: 1
                    }
                }
            }}
            match={{
                params: {
                    id: '1'
                }
            }}
            history={{
                goBack: () => {}
            }}
        />,
        div
    );
});
