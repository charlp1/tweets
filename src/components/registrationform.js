import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import CustomForm from './form';
import FormInput from './forminput';

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

    handleUserName(e) {
        this.setState({ username: e.target.value });
    }

    handleFirstName(e) {
        this.setState({ firstname: e.target.value });
    }

    handlePassword(e) {
        this.setState({ password: e.target.value });
    }

    handleSubmit() {
        const state = this.state;
        const username = state.username;
        const firstname = state.firstname;
        const password = state.password;

        if (
            username &&
            firstname &&
            password
        ) {
            this.props.onSubmit(state);
        } else {
            this.setState({
                error: {
                    username: username ? '' :
                        'Please provide a username.',
                    firstname: firstname ? '' :
                        'Please provide a first name.',
                    password: password ? '' :
                        'Please provide a password.'
                }
            });
        }
    }

    render() {
        return (
            <CustomForm message={ this.props.message }>
                <FormInput
                    placeholder='User name'
                    onChange={ this.handleUserName.bind(this) }
                    error={ this.state.error.username }
                />
                <FormInput
                    placeholder='First name'
                    onChange={ this.handleFirstName.bind(this) }
                    error={ this.state.error.firstname }
                />
                <FormInput
                    placeholder='Password'
                    onChange={ this.handlePassword.bind(this) }
                    error={ this.state.error.password }
                />
                <Button
                    color='primary'
                    onClick={ this.handleSubmit.bind(this) }
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
