import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import {
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
} from 'reactstrap';
import ModalDialog from './modal';

const setup = () => {
    const header = 'Dialog Header';
    const body = <div>dialog content</div>;
    const footer = <div>dialog footer</div>;
    const onClose = sinon.spy(); 
    const dialog = (
        <ModalDialog
            header={ header }
            body={ body }
            footer={ footer }
            isOpen={ false }
            onClose={ onClose }
        />
    );
    const shallowRender = shallow(dialog);

    return {
        header,
        body,
        footer,
        onClose,
        dialog,
        shallowRender
    };
};

describe('<ModalDialog />', () => {
    it('renders without crashing', () => {
        const { dialog } = setup();
        const div = document.createElement('div');

        ReactDOM.render(
            dialog,
            div
        );
    });

    it('renders a <Modal /> component', () => {
        const { shallowRender } = setup();

        expect(shallowRender.find(Modal)).to.have.length(1);
    });

    it('renders a <ModalHeader /> component', () => {
        const { shallowRender } = setup();
        const modalHeader = shallowRender.find(ModalHeader);

        expect(modalHeader).to.have.length(1);
    });

    it('renders header props in <ModalHeader />', () => {
        const { shallowRender, header } = setup();
        const modalHeader = shallowRender.find(ModalHeader);

        expect(modalHeader.children().text()).to.equal(header);
    });

    it('renders a <ModalBody /> component', () => {
        const { shallowRender } = setup();
        const modalBody = shallowRender.find(ModalBody);

        expect(modalBody).to.have.length(1);
    });

    it('renders body props in <ModalBody />', () => {
        const { shallowRender, body } = setup();
        const modalBody = shallowRender.find(ModalBody);

        expect(modalBody.children().contains(body)).to.equal(true);
    });

    it('renders a <ModalFooter /> component', () => {
        const { shallowRender } = setup();
        const modalFooter = shallowRender.find(ModalFooter);

        expect(modalFooter).to.have.length(1);
    });

    it('renders footer props in <ModalFooter />', () => {
        const { shallowRender, footer } = setup();
        const modalFooter = shallowRender.find(ModalFooter);

        expect(modalFooter.children().contains(footer)).to.equal(true);
    });

    it('calls onClose props', () => {
        const { shallowRender, onClose } = setup();

        shallowRender.props().toggle();
        expect(onClose).to.have.property('callCount', 1);
    });
});
