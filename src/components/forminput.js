import React from 'react';
import PropTypes from 'prop-types';
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

FormInput.propTypes = {
    placeholder: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    error: PropTypes.string,
};

export default FormInput;
