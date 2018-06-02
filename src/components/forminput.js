import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
    FormGroup,
    FormFeedback,
    Input,
} from 'reactstrap';

class FormInput extends PureComponent {
    render() {
        const props = this.props;

        return (
            <FormGroup className={ `w-100 ${props.className}` }>
                <Input
                    type={ props.type }
                    name={ props.name }
                    value={ props.value }
                    placeholder={ props.placeholder }
                    onChange={ props.onChange }
                    invalid={ props.error ? true : false }
                />
                <FormFeedback className={ props.errorClassName }>
                    { props.error }
                </FormFeedback>
            </FormGroup>
        );
    }
}

FormInput.propTypes = {
    className: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    error: PropTypes.string,
    errorClassName: PropTypes.string,
};

export default FormInput;
