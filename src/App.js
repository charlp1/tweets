import React from 'react';
import { Provider } from 'react-redux';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';

import './App.css';
import store from './store';
import HomeScreen from './containers/home';
import TimelineScreen from './containers/timeline';
import TweetScreen from './containers/tweet';
import InvalidScreen from './containers/invalid';

const App = () => (
    <Provider store={ store }>
        <Router>
            <div className='app w-100'>
                <Switch>
                    <Route exact path='/'component={ HomeScreen } />
                    <Route exact path='/:username' component={ TimelineScreen } />
                    <Route path='/tweet/:id' component={ TweetScreen } />
                    <Route component={ InvalidScreen } />
                </Switch>
            </div>
        </Router>
    </Provider>
);

export default App;
