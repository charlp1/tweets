import React from 'react';
import PropTypes from 'prop-types';
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

ModalDialog.propTypes = {
    header: PropTypes.string,
    body: PropTypes.string,
    button: PropTypes.shape({
        label: PropTypes.string.isRequired,
        action: PropTypes.func.isRequired,
    }),
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default ModalDialog;
