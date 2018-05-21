import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'reactstrap';

const Message = (props) => (
    <Alert
        color={ props.type ? props.type : 'danger' }
        isOpen={ props.text ? true : false }
    >
        { props.text }
    </Alert>
);

Message.propTypes = {
    type: PropTypes.string,
    text: PropTypes.string,
};

export default Message;
