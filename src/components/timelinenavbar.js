import React, { Component } from 'react';
import PropTypes from 'prop-types';
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

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState(
            (state) => ({
                isOpen: !state.isOpen
            })
        );
    }

    render() {
        return (
            <NavBar brand='TWEETS'>
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
                                    onClick={ this.props.onLogout }
                                >
                                    logout
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
