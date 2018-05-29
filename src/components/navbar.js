import React from 'react';
import PropTypes from 'prop-types';
import {
    Navbar,
    NavbarBrand,
} from 'reactstrap';

const NavBar = (props) => (
    <Navbar
        color='primary'
        dark
        expand='md'
        className='w-100'
    >
        <NavbarBrand
            className='text-white'
        >
            { props.brand }
        </NavbarBrand>
        { props.children }
    </Navbar>
);

NavBar.propTypes = {
    brand: PropTypes.node,
    children: PropTypes.node,
};

export default NavBar;
