import React from 'react';
import ReactDOM from 'react-dom';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import ErrorBoundary from './errorboundary';

const setup = () => {
    const children = <div>error</div>;
    const boundary = (
        <ErrorBoundary>
            { children }
        </ErrorBoundary>
    );
    const shallowRender = shallow(boundary);

    return {
        children,
        boundary,
        shallowRender,
    };
};

describe('<ErrorBoundary />', () => {
    it('renders without crashing', () => {
        const { boundary } = setup();
        const div = document.createElement('div');

        ReactDOM.render(boundary, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders children', () => {
        const { shallowRender, children } = setup();

        expect(shallowRender.contains(children)).to.equal(true);
    });

    it('renders message on error', () => {
        const { shallowRender } = setup();

        shallowRender.setState({ info: 'error' });
        expect(shallowRender.find('h2')).to.have.length(1);
    });
});
