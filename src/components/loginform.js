import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import CustomForm from './form';
import FormInput from './forminput';

class LoginForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            error: {
                username: '',
                password: ''
            }
        };
    }

    handleUserName = (e) => {
        this.setState({ username: e.target.value });
    }

    handlePassword = (e) => {
        this.setState({ password: e.target.value });
    }

    handleSubmit = () => {
        const state = this.state;
        const userName = state.username;
        const password = state.password;

        if (
            userName &&
            password
        ) {
            this.setState(
                {
                    error: {
                        username: '',
                        password: ''
                    }
                },
                () => {
                    this.props.onSubmit(this.state);
                }
            );
        } else {
            this.setState({
                error: {
                    username: userName ? '' :
                        'Please provide a username.',
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
                    onChange={ this.handleUserName }
                    error={ this.state.error.username }
                />
                <FormInput
                    placeholder='Password'
                    onChange={ this.handlePassword }
                    error={ this.state.error.password }
                />
                <Button
                    color='primary'
                    onClick={ this.handleSubmit }
                >
                    LOGIN
                </Button>
            </CustomForm>
        );
    }
}

LoginForm.propTypes = {
    message: PropTypes.string,
    onSubmit: PropTypes.func.isRequired,
};

export default LoginForm;
