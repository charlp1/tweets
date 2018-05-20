import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Button,
    Row,
} from 'reactstrap';
import NavBar from './../components/navbar';
import TweetDetails from './../components/tweetdetails';

class TweetScreen extends Component {
    handleClickBack() {
        this.props.history.goBack();
    }

    render() {
        const match = this.props.match;
        const usersData = this.props.users;
        const tweetsData = this.props.tweets.data;
        let tweetData = tweetsData[match.params.id];

        tweetData.createdDate = new Date(tweetData.created);
        tweetData.firstName = usersData[tweetData.user].firstname;
        tweetData.timestamp = tweetData.createdDate.toDateString() +
            ' - ' + tweetData.createdDate.toLocaleTimeString();

        return (
            <Row className='w-100 h-100 m-0 flex-column bg-light'>
                <NavBar brand='TWEETS' />
                <Row className='m-0 p-3'>
                    <TweetDetails data={ tweetData } />
                    <Button
                        color='primary'
                        onClick={ this.handleClickBack.bind(this) }
                    >
                        Back
                    </Button>
                </Row>
            </Row>
        );
    }
};

const mapStateToProps = (state) => (
    {
        tweets: state.tweets,
        users: state.users
    }
);

export default connect(mapStateToProps)(TweetScreen);
