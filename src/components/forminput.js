import React from 'react';
import {
    FormGroup,
    FormFeedback,
    Input,
} from 'reactstrap';

const FormInput = (props) => (
    <FormGroup>
        <Input
            placeholder={ props.placeholder }
            onChange={ props.onChange }
            invalid={ props.error ? true : false }
        />
        <FormFeedback>
            { props.error }
        </FormFeedback>
    </FormGroup>
);

export default FormInput;
