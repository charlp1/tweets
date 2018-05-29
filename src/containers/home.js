import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addUser } from './../actions/users';
import { loginUser } from './../actions/user';

import {
    FaHome,
} from 'react-icons/lib/fa';
import {
    Row,
} from 'reactstrap';
import NavBar from './../components/navbar';
import Tabs from './../components/tabs';
import LoginForm from './../components/loginform';
import RegistrationForm from './../components/registrationform';

class HomeScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loginError: '',
            registrationError: ''
        };
    }

    handleLogin = (user) => {
        const users = this.props.users;
        const username = user.username;

        if (
            users[username] &&
            users[username].password === user.password
        ) {
            this.props.loginUser(user.username);
            this.props.history.push(`/${user.username}`);
        } else {
            this.setState({
                loginError: 'Invalid username or password.'
            });
        }
    }

    handleRegistration = (user) => {
        const users = this.props.users;

        if (users[user.username]) {
            this.setState({
                registrationError: 'Username already exists.'
            });
        } else {
            this.props.addUser(user);
            this.props.loginUser(user.username);
            this.props.history.push(`/${user.username}`);
        }
    }

    render() {
        return (
            <Row
                className='forms-container flex-column bg-light h-100
                align-items-center justify-content-start m-0'
            >
                <NavBar
                    brand={(
                        <FaHome />
                    )}
                />
                <Tabs tabs={[
                    {
                        id: '1',
                        label: 'LOGIN',
                        content: (
                            <LoginForm
                                onSubmit={ this.handleLogin }
                                message={ this.state.loginError }
                            />
                        )
                    },
                    {
                        id: '2',
                        label: 'REGISTER',
                        content: (
                            <RegistrationForm
                                onSubmit={ this.handleRegistration }
                                message={ this.state.registrationError }
                            />
                        )
                    }
                ]} />
            </Row>
        );
    }
}

HomeScreen.propTypes = {
    users: PropTypes.objectOf(
        PropTypes.shape({
            username: PropTypes.string,
            firstname: PropTypes.string,
            password: PropTypes.string,
        })
    ),
    addUser: PropTypes.func.isRequired,
    loginUser: PropTypes.func.isRequired,
    history: PropTypes.shape({
        push: PropTypes.func.isRequired,
    }),
};

const mapStateToProps = (state) => (
    {
        users: state.users,
    }
);

const mapDispatchToProps = (dispatch) => (
    bindActionCreators(
        {
            addUser,
            loginUser
        },
        dispatch
    )
);

export { HomeScreen };
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeScreen);
