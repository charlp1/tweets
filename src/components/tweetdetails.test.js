import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { Table } from 'reactstrap';
import TweetDetails from './tweetdetails';

const setup = () => {
    const data = {
        id: 1,
        text: 'tweet',
        firstName: 'User',
        timestamp: '60'
    };
    const details = (
        <TweetDetails
            data={ data }
        />
    );
    const shallowRender = shallow(details);

    return {
        data,
        details,
        shallowRender,
    };
};

describe('<TweetDetails />', () => {
    it('renders without crashing', () => {
        const { details } = setup();
        const div = document.createElement('div');

        ReactDOM.render(
            details,
            div
        );
    });

    it('renders a <Table /> component', () => {
        const { shallowRender } = setup();

        expect(shallowRender.find(Table)).to.have.length(1);
    });

    it('displays details of the tweet', () => {
        const { shallowRender, data } = setup();
        const rows = shallowRender.find('tr');
        const expectedData = [
            data.id,
            data.text,
            data.timestamp,
            data.firstName
        ];

        rows.forEach((row, i) => {
            expect(
                row.children().last().text()
            ).to.equal(
                `${expectedData[i]}`
            );
        });
    });
});
