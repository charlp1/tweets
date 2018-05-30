import React from 'react';
import PropTypes from 'prop-types';
import ModalDialog from './modal';
import TweetForm from './../components/tweetform';

const AddTweetDialog = (props) => (
    <ModalDialog
        isOpen={ props.isOpen }
        onClose={ props.onClose }
        header='Add Tweet'
        body={
            <TweetForm
                onSubmit={ props.onAdd }
            />
        }
    />
);

AddTweetDialog.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    onAdd: PropTypes.func.isRequired,
};

export default AddTweetDialog;
