import React, { Component } from 'react';
import {
    Button,
    ButtonGroup,
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    FormFeedback,
    Input,
} from 'reactstrap';

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

    handleInput(e) {
        this.setState({ text: e.target.value });
    }

    handleEdit() {
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
                    <Input type='textarea'
                        value={ this.state.text }
                        placeholder='type here ...'
                        onChange={ this.handleInput.bind(this) }
                        invalid={ this.state.message ? true : false }
                    />
                    <FormFeedback>
                        { this.state.message }
                    </FormFeedback>
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
                            onClick={ this.handleEdit.bind(this) }
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

export default UpdateTweetForm;
