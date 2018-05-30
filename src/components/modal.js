import React from 'react';
import PropTypes from 'prop-types';
import {
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
        { props.footer &&
            <ModalFooter>
                { props.footer }
            </ModalFooter>
        }
    </Modal>
);

ModalDialog.propTypes = {
    header: PropTypes.string,
    body: PropTypes.node,
    footer: PropTypes.node,
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default ModalDialog;
