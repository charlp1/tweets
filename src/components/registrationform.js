import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import CustomForm from './form';
import FormInput from './forminput';
import Validation from './../utils/validation';

class RegistrationForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            firstname: '',
            password: '',
            error: {
                username: '',
                firstname: '',
                password: ''
            }
        };
    }

    handleInputChange = (e) => {
        const target = e.target;

        this.setState((state) => ({
            ...state,
            [target.name]: target.value,
            error: {
                ...this.state.error,
                [target.name]: Validation[target.name](target.value)
            }
        }));
    }

    handleSubmit = () => {
        const state = this.state;
        const usernameError = Validation.username(state.username);
        const firstnameError = Validation.firstname(state.firstname);
        const passwordError = Validation.password(state.password);

        if (
            usernameError ||
            firstnameError ||
            passwordError
        ) {
            this.setState({
                error: {
                    username: usernameError,
                    firstname: firstnameError,
                    password: passwordError
                }
            });
        } else {
            this.props.onSubmit(state);
        }
    }

    render() {
        const state = this.state;
        const disabled = !(
            state.username && state.firstname && state.password
        );

        return (
            <CustomForm message={ this.props.message }>
                <FormInput
                    name='username'
                    placeholder='User name'
                    onChange={ this.handleInputChange }
                    error={ state.error.username }
                />
                <FormInput
                    name='firstname'
                    placeholder='First name'
                    onChange={ this.handleInputChange }
                    error={ state.error.firstname }
                />
                <FormInput
                    name='password'
                    placeholder='Password'
                    onChange={ this.handleInputChange }
                    error={ state.error.password }
                />
                <Button
                    color='primary'
                    disabled={ disabled }
                    onClick={ this.handleSubmit }
                >
                    REGISTER
                </Button>
            </CustomForm>
        );
    }
}

RegistrationForm.propTypes = {
    message: PropTypes.string,
    onSubmit: PropTypes.func.isRequired,
};

export default RegistrationForm;
