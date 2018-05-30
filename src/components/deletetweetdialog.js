import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import ModalDialog from './modal';

const DeleteTweetDialog = (props) => (
    <ModalDialog
        isOpen={ props.isOpen }
        onClose={ props.onClose }
        header='Delete Tweet'
        body={
            <div>
                Are you sure you want to delete the tweet?
            </div>
        }
        footer={
            <div>
                <Button color="danger"
                    onClick={ props.onDelete }>
                    DELETE
                </Button>
                { ' ' }
                <Button color="secondary"
                    onClick={ props.onClose }>
                    CANCEL
                </Button>
            </div>
        }
    />
);

DeleteTweetDialog.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default DeleteTweetDialog;
