import React from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
} from 'reactstrap';

const ModalDialog = (props) => (
    <Modal
        isOpen={ props.isOpen }
        toggle={ props.onClose }
        className={ props.className }
    >
        <ModalHeader toggle={ props.onClose }>
            { props.header }
        </ModalHeader>
        <ModalBody>
            { props.body }
        </ModalBody>
        <ModalFooter>
            <Button color="danger"
                onClick={ props.button.action }>
                { props.button.label }
            </Button>
            { ' ' }
            <Button color="secondary"
                onClick={ props.onClose }>
                Cancel
            </Button>
        </ModalFooter>
    </Modal>
);

export default ModalDialog;
