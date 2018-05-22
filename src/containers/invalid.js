import React from 'react';
import PropTypes from 'prop-types';
import {
    Row,
    Button,
} from 'reactstrap';
import NavBar from './../components/navbar';

const InvalidScreen = (props) => (
    <Row className='w-100 h-100 m-0 flex-column bg-light'>
        <NavBar brand='TWEETS' />
        <Row className='m-auto p-3 text-center' >
            <p>
                Page Not Found
                <br/>
                <Button
                    color='primary'
                    className='mt-2'
                    onClick={
                        () => props.history.push('/')
                    }
                >
                    Back to Home Page
                </Button>
            </p>
        </Row>
    </Row>
);

InvalidScreen.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired,
    }),
};

export default InvalidScreen;
