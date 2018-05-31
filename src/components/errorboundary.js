import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);

        this.state = {
            error: null,
            info: null,
        };
    }

    componentDidCatch(error, info) {
        this.setState({
            error,
            info,
        });
    }

    render() {
        if (this.state.info) {
            return (
                <div
                    className='alert m-auto p-3 text-danger bg-light border-danger'
                >
                    <h2>
                        Oh no!
                    </h2>
                    <p>
                        Something went terribly wrong
                    </p>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
