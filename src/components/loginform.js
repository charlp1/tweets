import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import CustomForm from './form';
import FormInput from './forminput';
import Validation from './../utils/validation';

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
        const userNameError = Validation.username(state.username);
        const passwordError = Validation.password(state.password);

        if (
            userNameError ||
            passwordError
        ) {
            this.setState({
                error: {
                    username: userNameError,
                    password: passwordError
                }
            });
        } else {
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
        }
    }

    render() {
        const state = this.state;
        const disabled = !(state.username && state.password);

        return (
            <CustomForm message={ this.props.message }>
                <FormInput
                    name='username'
                    placeholder='User name'
                    onChange={ this.handleInputChange }
                    error={ state.error.username }
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
