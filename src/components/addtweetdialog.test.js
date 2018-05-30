import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import ModalDialog from './modal';
import AddTweetDialog from './addtweetdialog';

const setup = () => {
    const dialog = (
        <AddTweetDialog
            isOpen={ false }
            onClose={ () => {} }
            onAdd={ () => {} }
        />
    );
    const shallowRender = shallow(dialog);

    return {
        dialog,
        shallowRender,
    };
};

describe('<AddTweetDialog />', () => {
    it('renders without crashing', () => {
        const { dialog } = setup();
        const div = document.createElement('div');

        ReactDOM.render(
            dialog,
            div
        );
    });

    it('renders a <ModalDialog /> component', () => {
        const { shallowRender } = setup();

        expect(shallowRender.find(ModalDialog)).to.have.length(1);
    });
});
