import React from 'react';
import {
    Alert,
} from 'reactstrap';

const Loading = ({
    pastDelay,
    timedOut,
    error,
}) => {
    if (error) {
        return (
            <div
                className='w-100 h-100 row m-0'
            >
                <Alert color='danger'
                    className='m-auto'
                >
                    <h4>
                        Oops, something went wrong!
                    </h4>
                    <p>
                        For now, try going back.
                    </p>
                </Alert>
            </div>
        );
    } else if (timedOut) {
        return (
            <div
                className='w-100 h-100 row m-0'
            >
                <Alert color='warning'
                    className='m-auto'
                >
                    <h4>
                        Taking too long to load
                    </h4>
                    <p>
                        Please try again in a while.
                    </p>
                </Alert>
            </div>
        );
    } else if (pastDelay) {
        return (
            <div
                className='w-100 h-100 row m-0'
            >
                <Alert color='info'
                    className='m-auto'
                >
                    <h4>
                        Loading
                    </h4>
                </Alert>
            </div>
        );
    } else {
        return null;
    }
};

export default Loading;
