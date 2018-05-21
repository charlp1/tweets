import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import classnames from 'classnames';

import { addUser } from './../actions/users';
import { loginUser } from './../actions/user';

import {
    Nav,
    NavItem,
    NavLink,
    TabContent,
    TabPane,
    Row,
} from 'reactstrap';
import NavBar from './../components/navbar';
import LoginForm from './../components/loginform';
import RegistrationForm from './../components/registrationform';

class HomeScreen extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);

        this.state = {
            activeTab: '1',
            loginError: '',
            registrationError: ''
        };
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    handleLogin(user) {
        let users = this.props.users;
        let username = user.username;

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

    handleRegistration(user) {
        let users = this.props.users;

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
                <NavBar brand='HOME' />
                <Nav
                    tabs
                    className='mt-auto'
                >
                    <NavItem>
                        <NavLink
                            className={
                                classnames({
                                    active: this.state.activeTab === '1'
                                })
                            }
                            onClick={
                                () => { this.toggle('1'); }
                            }
                        >
                            LOGIN
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={
                                classnames({
                                    active: this.state.activeTab === '2'
                                })
                            }
                            onClick={
                                () => { this.toggle('2'); }
                            }
                        >
                            REGISTER
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent
                    className='h-50 mb-auto'
                    activeTab={ this.state.activeTab }
                >
                    <TabPane tabId='1'>
                        <Row>
                            <LoginForm
                                onSubmit={ this.handleLogin.bind(this) }
                                message={ this.state.loginError }
                            />
                        </Row>
                    </TabPane>
                    <TabPane tabId='2'>
                        <Row>
                            <RegistrationForm
                                onSubmit={ this.handleRegistration.bind(this) }
                                message={ this.state.registrationError }
                            />
                        </Row>
                    </TabPane>
                </TabContent>
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
    user: PropTypes.string,
    addUser: PropTypes.func.isRequired,
    loginUser: PropTypes.func.isRequired,
    history: PropTypes.object,
};

const mapStateToProps = (state) => (
    {
        users: state.users,
        user: state.user
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

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeScreen);
