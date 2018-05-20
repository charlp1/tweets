import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { logoutUser } from './../actions/user';
import {
    addTweet,
    editTweet,
    deleteTweet,
} from './../actions/tweets';

import {
    Row,
} from 'reactstrap';
import TimelineNavBar from './../components/timelinenavbar';
import TweetForm from './../components/tweetform';
import Tweets from './../components/tweets';
import ModalDialog from './../components/modal';

class TimelineScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tweets: [],
            selectedTweet: {},
            modal: false
        };
    }

    componentDidMount() {
        this.updateTweets(
            this.buildTweetsList(this.props)
        );
    }

    componentWillReceiveProps(props) {
        this.updateTweets(
            this.buildTweetsList(props)
        );
    }

    buildTweetsList(props) {
        const users = props.users;
        const tweetsData = props.tweets.data;
        const tweets = Object.keys(tweetsData)
            .map(
                tweetId => {
                    let tweet = {
                        ...tweetsData[tweetId]
                    };
                    let createdDate = new Date(tweet.created);

                    tweet.firstname = users[tweet.user].firstname;
                    tweet.timestamp = createdDate.toDateString() +
                        ' - ' + createdDate.toLocaleTimeString();

                    return tweet;
                }
            ).sort(
                (prev, next) => (next.created - prev.created)
            );

        return tweets;
    }

    updateTweets(tweets) {
        this.setState({ tweets });
    }

    handleLogout() {
        this.props.logoutUser();
        this.props.history.push('/');
    }

    handleAddTweet(tweet) {
        this.props.addTweet({
            user: this.props.match.params.username,
            text: tweet.text,
            created: (new Date()).getTime()
        });
    }

    handleEditTweet(tweet) {
        this.props.editTweet(tweet);
    }

    handleDeleteTweet() {
        this.props.deleteTweet(this.state.selectedTweet);
        this.hideDeleteDialog();
    }

    handleClickTweet(tweet) {
        this.props.history.push(`/tweet/${tweet.id}`);
    }

    showDeleteDialog(tweet) {
        this.setState({
            selectedTweet: tweet,
            modal: true
        });
    }

    hideDeleteDialog() {
        this.setState({
            selectedTweet: {},
            modal: false
        });
    }

    render() {
        let match = this.props.match;

        return (
            <Row className='flex-column h-100 m-0 bg-dark'>
                <TimelineNavBar
                    username={ match.params.username }
                    onLogout={ this.handleLogout.bind(this) }
                />
                <Tweets
                    username={ match.params.username }
                    tweets={ this.state.tweets }
                    onClickTweet={ this.handleClickTweet.bind(this) }
                    onEditTweet={ this.handleEditTweet.bind(this) }
                    onDeleteTweet={ this.showDeleteDialog.bind(this) }
                />
                <TweetForm
                    onSubmit={ this.handleAddTweet.bind(this) }
                />
                <ModalDialog
                    header='Delete Tweet'
                    body='Are you sure you want to delete the tweet?'
                    button={{
                        label: 'Delete',
                        action: this.handleDeleteTweet.bind(this)
                    }}
                    isOpen={ this.state.modal }
                    onClose={ this.hideDeleteDialog.bind(this) }
                />
            </Row>
        );
    }
}

const mapStateToProps = (state) => (
    {
        tweets: state.tweets,
        users: state.users
    }
);

const mapDispatchToProps = (dispatch) => (
    bindActionCreators(
        {
            logoutUser,
            addTweet,
            editTweet,
            deleteTweet
        },
        dispatch
    )
);

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(TimelineScreen);
