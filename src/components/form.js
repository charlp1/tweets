import React from 'react';
import {
    Jumbotron,
    Form,
} from 'reactstrap';

import Message from './message';

const CustomForm = (props) => (
    <Jumbotron className='bg-light'>
        <Form className='text-center'>
            <Message text={ props.message } />
            { props.children }
        </Form>
    </Jumbotron>
);

export default CustomForm;
