import React from 'react';
import PropTypes from 'prop-types';
import {
    Jumbotron,
    Form,
} from 'reactstrap';

import Message from './message';

const CustomForm = (props) => (
    <Jumbotron className='bg-light p-4'>
        <Form className='text-center'>
            <Message text={ props.message } />
            { props.children }
        </Form>
    </Jumbotron>
);

CustomForm.propTypes = {
    message: PropTypes.string,
    children: PropTypes.node,
};

export default CustomForm;
