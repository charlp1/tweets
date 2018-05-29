import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { Alert } from 'reactstrap';
import Loading from './loading';

describe('<Loading />', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');

        ReactDOM.render(
            <Loading />,
            div
        );
    });

    it('renders an error message', () => {
        const shallowRender = shallow(
            <Loading error={true} />
        );

        expect(
            shallowRender.find('h4').children().text()
        ).to.equal(
            'Oops, something went wrong!'
        );
    });

    it('renders a timedout message', () => {
        const shallowRender = shallow(
            <Loading timedOut={true} />
        );

        expect(
            shallowRender.find('h4').children().text()
        ).to.equal(
            'Taking too long to load'
        );
    });

    it('renders a loading message', () => {
        const shallowRender = shallow(
            <Loading pastDelay={true} />
        );

        expect(
            shallowRender.find('h4').children().text()
        ).to.equal(
            'Loading'
        );
    });

    it('renders nothing', () => {
        const shallowRender = shallow(
            <Loading />
        );

        expect(
            shallowRender.text()
        ).to.equal(
            ''
        );
    });
});
