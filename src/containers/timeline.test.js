import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import {
    Row,
} from 'reactstrap';
import TimelineNavBar from './../components/timelinenavbar';
import Tweets from './../components/tweets';
import AddTweetDialog from './../components/addtweetdialog';
import DeleteTweetDialog from './../components/deletetweetdialog';
import { TimelineScreen } from './timeline';

const setup = () => {
    const users = {
        user: {
            username: 'user',
            firstname: 'User',
            password: 'user'
        }
    };
    const user = 'user';
    const tweets = {
        counter: 1,
        data: {
            1: {
                id: 1,
                text: 'tweet',
                user: 'user',
                created: 1
            }
        }
    };
    const screen = (
        <TimelineScreen
            users={ users }
            user={ user }
            tweets={ tweets }
            logoutUser={ () => {} }
            addTweet={ () => {} }
            editTweet={ () => {} }
            deleteTweet={ () => {} }
            match={{
                params: {
                    username: user
                }
            }}
            history={{
                push: () => {}
            }}
        />
    );
    const shallowRender = shallow(screen);

    return {
        users,
        user,
        tweets,
        screen,
        shallowRender,
    };
};

describe('<TimelineScreen />', () => {
    it('renders without crashing', () => {
        const { screen } = setup();
        const div = document.createElement('div');

        ReactDOM.render(
            screen,
            div
        );
    });

    it('renders a <Row /> component', () => {
        const { shallowRender } = setup();

        expect(shallowRender.find(Row)).to.have.length(1);
    });

    it('renders a <TimelineNavBar /> component', () => {
        const { shallowRender } = setup();

        expect(shallowRender.find(TimelineNavBar)).to.have.length(1);
    });

    it('renders a <Tweets /> component', () => {
        const { shallowRender } = setup();

        expect(shallowRender.find(Tweets)).to.have.length(1);
    });

    it('renders a <AddTweetDialog /> component', () => {
        const { shallowRender } = setup();

        expect(shallowRender.find(AddTweetDialog)).to.have.length(1);
    });

    it('renders a <DeleteTweetDialog /> component', () => {
        const { shallowRender } = setup();

        expect(shallowRender.find(DeleteTweetDialog)).to.have.length(1);
    });
});
