import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import {
    Button,
    Row,
} from 'reactstrap';
import NavBar from './../components/navbar';
import TweetDetails from './../components/tweetdetails';
import { TweetScreen } from './tweet';

const setup = () => {
    const users = {
        user: {
            username: 'user',
            firstname: 'User',
            password: 'user'
        }
    };
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
    const id = '1';
    const goBack = sinon.spy();
    const screen = (
        <TweetScreen
            users={ users }
            tweets={ tweets }
            match={{
                params: { id }
            }}
            history={{ goBack }}
        />
    );
    const shallowRender = shallow(screen);

    return {
        users,
        tweets,
        id,
        goBack,
        screen,
        shallowRender,
    };
};

describe('<TweetScreen />', () => {
    it('renders without crashing', () => {
        const { screen } = setup();
        const div = document.createElement('div');

        ReactDOM.render(
            screen,
            div
        );
    });

    it('renders 2 <Row /> components', () => {
        const { shallowRender } = setup();

        expect(shallowRender.find(Row)).to.have.length(2);
    });

    it('renders a <NavBar /> components', () => {
        const { shallowRender } = setup();

        expect(shallowRender.find(NavBar)).to.have.length(1);
    });

    it('renders a <TweetDetails /> components', () => {
        const { shallowRender } = setup();

        expect(shallowRender.find(TweetDetails)).to.have.length(1);
    });

    it('renders a <Button /> components', () => {
        const { shallowRender } = setup();

        expect(shallowRender.find(Button)).to.have.length(1);
    });

    it('calls goBack when clicking button', () => {
        const { shallowRender, goBack } = setup();
        const button = shallowRender.find(Button);

        button.simulate('click');
        expect(goBack).to.have.property('callCount', 1);
    });
});
