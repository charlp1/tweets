import React, { Component, StrictMode } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import {
    FaChevronLeft,
    FaComment,
} from 'react-icons/lib/fa';
import {
    Button,
    Row,
} from 'reactstrap';
import NavBar from './../components/navbar';
import TweetDetails from './../components/tweetdetails';

class TweetScreen extends Component {
    handleClickBack = () => {
        this.props.history.goBack();
    }

    getTweetData(props) {
        const match = props.match;
        const tweetsData = props.tweets.data;

        return tweetsData[match.params.id];
    }

    formatTweetData(data, props) {
        const usersData = props.users;
        let tweetData = { ...data };

        tweetData.createdDate = new Date(tweetData.created);
        tweetData.firstName = usersData[tweetData.user].firstname;
        tweetData.timestamp = tweetData.createdDate.toDateString() +
            ' - ' + tweetData.createdDate.toLocaleTimeString();

        return tweetData;
    }

    render() {
        let tweetData = this.getTweetData(this.props);

        if (!tweetData) {
            return (
                <Redirect to='/' />
            );
        }

        tweetData = this.formatTweetData(tweetData, this.props);

        return (
            <Row className='w-100 h-100 m-0 flex-column bg-light'>
                <StrictMode>
                    <NavBar
                        brand={(
                            <div className='icon-container'>
                                <FaComment /> TWEET
                            </div>
                        )}
                    />
                    <Row className='m-0 p-3'>
                        <TweetDetails data={ tweetData } />
                        <Button
                            color='primary'
                            className='icon-container'
                            onClick={ this.handleClickBack }
                        >
                            <FaChevronLeft /> back
                        </Button>
                    </Row>
                </StrictMode>
            </Row>
        );
    }
};

TweetScreen.propTypes = {
    users: PropTypes.objectOf(
        PropTypes.shape({
            username: PropTypes.string,
            firstname: PropTypes.string,
            password: PropTypes.string,
        })
    ),
    tweets: PropTypes.shape({
        counter: PropTypes.number,
        data: PropTypes.shape({
            id: PropTypes.number,
            text: PropTypes.string,
            user: PropTypes.string,
            created: PropTypes.number,
        })
    }),
    match: PropTypes.shape({
        params: PropTypes.shape({
            id: PropTypes.string,
        })
    }),
    history: PropTypes.shape({
        goBack: PropTypes.func.isRequired,
    }),
};

const mapStateToProps = (state) => (
    {
        tweets: state.tweets,
        users: state.users
    }
);

export { TweetScreen };
export default connect(mapStateToProps)(TweetScreen);
