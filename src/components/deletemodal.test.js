import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import ModalDialog from './modal';
import DeleteModalDialog from './deletemodal';

const setup = () => {
    const dialog = (
        <DeleteModalDialog
            isOpen={ false }
            onClose={ () => {} }
            onDelete={ () => {} }
        />
    );
    const shallowRender = shallow(dialog);

    return {
        dialog,
        shallowRender,
    };
};

describe('<DeleteModalDialog />', () => {
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
