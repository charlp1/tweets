import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    FaComment,
    FaSignOut,
} from 'react-icons/lib/fa';
import {
    Collapse,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Nav,
    NavbarToggler,
    UncontrolledDropdown,
} from 'reactstrap';
import NavBar from './navbar';

class TimelineNavBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        };
    }

    toggle = () => {
        this.setState(
            (state) => ({
                isOpen: !state.isOpen
            })
        );
    }

    render() {
        return (
            <NavBar
                brand={(
                    <div className='icon-container'>
                        <FaComment /> TWEETS
                    </div>
                )}
            >
                <NavbarToggler
                    onClick={ this.toggle }
                />
                <Collapse isOpen={ this.state.isOpen } navbar>
                    <Nav className='ml-auto' navbar>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                { this.props.username }
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem
                                    className='icon-container'
                                    onClick={ this.props.onLogout }
                                >
                                    <FaSignOut /> logout
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                </Collapse>
            </NavBar>
        );
    }
}

TimelineNavBar.propTypes = {
    username: PropTypes.string,
    onLogout: PropTypes.func.isRequired,
};

export default TimelineNavBar;
