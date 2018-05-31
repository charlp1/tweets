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

    handleInputChange = (e) => {
        const target = e.target;

        this.setState({
            [target.name]: target.value
        });
    }

    handleSubmit = () => {
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
