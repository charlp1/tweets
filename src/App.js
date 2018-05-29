import React from 'react';
import { Provider } from 'react-redux';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';

import './App.css';
import store from './store';
import HomeLoadable from './containers/homeloadable';
import TimelineLoadable from './containers/timelineloadable';
import TweetLoadable from './containers/tweetloadable';
import InvalidLoadable from './containers/invalidloadable';

const App = () => (
    <Provider store={ store }>
        <Router>
            <div className='app w-100'>
                <Switch>
                    <Route exact path='/' component={ HomeLoadable } />
                    <Route exact path='/:username' component={ TimelineLoadable } />
                    <Route path='/tweet/:id' component={ TweetLoadable } />
                    <Route component={ InvalidLoadable } />
                </Switch>
            </div>
        </Router>
    </Provider>
);

export default App;
