import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    Button,
    ButtonGroup,
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
} from 'reactstrap';
import FormInput from './forminput';

class UpdateTweetForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            message: '',
            text: props.data.text
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            text: nextProps.data.text
        });
    }

    handleInput = (e) => {
        this.setState({ text: e.target.value });
    }

    handleEdit = () => {
        if (this.state.text) {
            let tweet = {
                ...this.props.data,
                text: this.state.text,
                created: (new Date()).getTime()
            };

            this.setState(
                {
                    message : '',
                    text: ''
                },
                () => {
                    this.props.onEditTweet(tweet);
                }
            );
        } else {
            this.setState({
                message: 'Please provide a tweet message.'
            });
        }
    }

    render() {
        let tweetData = this.props.data;

        return (
            <Card
                className='mb-2'
            >
                <CardBody>
                    <CardTitle>
                        { tweetData.firstname }
                    </CardTitle>
                    <CardSubtitle>
                        <small className='text-muted'>
                            { tweetData.timestamp }
                        </small>
                    </CardSubtitle>
                    <FormInput
                        type='textarea'
                        value={ this.state.text }
                        onChange={ this.handleInput }
                        error={ this.state.message }
                    />
                    <ButtonGroup
                        className='w-100 justify-content-end'
                    >
                        <Button
                            color='primary'
                            onClick={ this.props.onClickTweet }
                        >
                            View
                        </Button>
                        <Button
                            color='primary'
                            onClick={ this.handleEdit }
                        >
                            Update
                        </Button>
                        <Button
                            color='danger'
                            onClick={ this.props.onDeleteTweet }
                        >
                            Delete
                        </Button>
                    </ButtonGroup>
                </CardBody>
            </Card>
        );
    }
}

UpdateTweetForm.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.number,
        text: PropTypes.string,
        user: PropTypes.string,
        firstname: PropTypes.string,
        created: PropTypes.number,
        timestamp: PropTypes.string,
    }),
    onClickTweet: PropTypes.func.isRequired,
    onEditTweet: PropTypes.func.isRequired,
    onDeleteTweet: PropTypes.func.isRequired,
};

export default UpdateTweetForm;
