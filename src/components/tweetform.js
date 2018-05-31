import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    FaPaperPlane,
} from 'react-icons/lib/fa';
import {
    Button,
    InputGroup,
    InputGroupAddon,
    FormGroup,
} from 'reactstrap';
import FormInput from './forminput';

class TweetForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            message: '',
            text: ''
        };
    }

    handleInput = (e) => {
        this.setState({ text: e.target.value });
    }

    handleSubmit = () => {
        if (this.state.text) {
            const tweet = { text: this.state.text };

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
            <FormGroup className='p-2 mb-0 bg-primary'>
                <InputGroup className='flex-row flex-nowrap'>
                    <FormInput
                        className='mb-0'
                        type='textarea'
                        value={ this.state.text }
                        onChange={ this.handleInput }
                        error={ this.state.message }
                        errorClassName='pl-2 text-white'
                    />
                    <InputGroupAddon
                        addonType='append'
                        className='pl-2'
                    >
                        <Button
                            color='primary'
                            disabled={ !this.state.text }
                            onClick={ this.handleSubmit }>
                            <FaPaperPlane />
                        </Button>
                    </InputGroupAddon>
                </InputGroup>
            </FormGroup>
        );
    }
}

TweetForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default TweetForm;
