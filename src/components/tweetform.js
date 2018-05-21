import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    Button,
    Input,
    InputGroup,
    InputGroupAddon,
    FormGroup,
    FormFeedback,
} from 'reactstrap';

class TweetForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            message: '',
            text: ''
        };
    }

    handleInput(e) {
        this.setState({ text: e.target.value });
    }

    handleSubmit() {
        if (this.state.text) {
            let tweet = { text: this.state.text };

            this.setState(
                {
                    message : '',
                    text: ''
                },
                () => this.props.onSubmit(tweet)
            );
        } else {
            this.setState({
                message: 'Please provide a tweet message.'
            });
        }
    }

    render() {
        return (
            <FormGroup className='m-1'>
                <InputGroup>
                    <Input type='textarea'
                        value={ this.state.text }
                        placeholder='type here ...'
                        onChange={ this.handleInput.bind(this) }
                        invalid={ this.state.message ? true : false }
                    />
                    <InputGroupAddon addonType='append'>
                        <Button
                            color='primary'
                            onClick={ this.handleSubmit.bind(this) }>
                            Tweet
                        </Button>
                    </InputGroupAddon>
                    <FormFeedback>
                        { this.state.message }
                    </FormFeedback>
                </InputGroup>
            </FormGroup>
        );
    }
}

TweetForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default TweetForm;
