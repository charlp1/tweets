import React from 'react';
import ReactDOM from 'react-dom';
import { TimelineScreen } from './timeline';

it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(
        <TimelineScreen
            users={{
                user: {
                    username: 'user',
                    firstname: 'User',
                    password: 'user'
                }
            }}
            user='user'
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
            logoutUser={ () => {} }
            addTweet={ () => {} }
            editTweet={ () => {} }
            deleteTweet={ () => {} }
            match={{
                params: {
                    username: 'user'
                }
            }}
            history={{
                push: () => {}
            }}
        />,
        div
    );
});
