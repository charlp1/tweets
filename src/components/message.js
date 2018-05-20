import React from 'react';
import { Alert } from 'reactstrap';

const Message = (props) => (
    <Alert
        color={ props.type ? props.type : 'danger' }
        isOpen={ props.text ? true : false }
    >
        { props.text }
    </Alert>
);

export default Message;
