import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    FaChevronRight,
    FaEdit,
    FaTrash,
} from 'react-icons/lib/fa';
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

    static getDerivedStateFromProps(nextProps, prevState) {
        return {
            text: nextProps.data.text
        };
    }

    handleInput = (e) => {
        this.setState({ text: e.target.value });
    }

    handleEdit = () => {
        if (this.state.text) {
            const tweet = {
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
        const tweetData = this.props.data;

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
                        className='w-100 justify-content-start'
                    >
                        <Button
                            outline
                            color='primary'
                            className='border-0 rounded'
                            onClick={ this.handleEdit }
                        >
                            <FaEdit />
                        </Button>
                        <Button
                            outline
                            color='danger'
                            className='border-0 rounded'
                            onClick={ this.props.onDeleteTweet }
                        >
                            <FaTrash />
                        </Button>
                        <Button
                            outline
                            color='primary'
                            className='border-0 rounded ml-auto'
                            onClick={ this.props.onClickTweet }
                        >
                            View <FaChevronRight />
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
