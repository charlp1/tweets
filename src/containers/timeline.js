import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
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
import Tweets from './../components/tweets';
import AddTweetDialog from './../components/addtweetdialog';
import DeleteTweetDialog from './../components/deletetweetdialog';

class TimelineScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tweets: [],
            selectedTweet: {},
            modal: {
                add: false,
                delete: false,
            },
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

    handleLogout = () => {
        this.props.logoutUser();
        this.props.history.push('/');
    }

    handleAddTweet = (tweet) => {
        this.props.addTweet({
            user: this.props.match.params.username,
            text: tweet.text,
            created: (new Date()).getTime()
        });
    }

    handleEditTweet = (tweet) => {
        this.props.editTweet(tweet);
    }

    handleDeleteTweet = () => {
        this.props.deleteTweet(this.state.selectedTweet);
        this.hideDeleteDialog();
    }

    handleClickTweet = (tweet) => {
        this.props.history.push(`/tweet/${tweet.id}`);
    }

    showDeleteDialog = (tweet) => {
        this.setState({
            selectedTweet: tweet,
            modal: {
                add: false,
                delete: true,
            }
        });
    }

    hideDeleteDialog = () => {
        this.setState({
            selectedTweet: {},
            modal: {
                add: false,
                delete: false,
            }
        });
    }

    showAddDialog = () => {
        this.setState({
            modal: {
                add: true,
                delete: false,
            }
        });
    }

    hideAddDialog = () => {
        this.setState({
            modal: {
                add: false,
                delete: false,
            }
        });
    }

    render() {
        const match = this.props.match;

        if (match.params.username !== this.props.user) {
            return (
                <Redirect to='/' />
            );
        }

        return (
            <Row className='flex-column h-100 m-0 bg-dark'>
                <TimelineNavBar
                    username={ match.params.username }
                    onAddTweet={ this.showAddDialog }
                    onLogout={ this.handleLogout }
                />
                <Tweets
                    username={ match.params.username }
                    tweets={ this.state.tweets }
                    onClickTweet={ this.handleClickTweet }
                    onEditTweet={ this.handleEditTweet }
                    onDeleteTweet={ this.showDeleteDialog }
                />
                <AddTweetDialog
                    isOpen={ this.state.modal.add }
                    onClose={ this.hideAddDialog }
                    onAdd={ this.handleAddTweet }
                />
                <DeleteTweetDialog
                    isOpen={ this.state.modal.delete }
                    onClose={ this.hideDeleteDialog }
                    onDelete={ this.handleDeleteTweet }
                />
            </Row>
        );
    }
}

TimelineScreen.propTypes = {
    users: PropTypes.objectOf(
        PropTypes.shape({
            username: PropTypes.string,
            firstname: PropTypes.string,
            password: PropTypes.string,
        })
    ),
    user: PropTypes.string,
    tweets: PropTypes.shape({
        counter: PropTypes.number,
        data: PropTypes.shape({
            id: PropTypes.number,
            text: PropTypes.string,
            user: PropTypes.string,
            created: PropTypes.number,
        })
    }),
    logoutUser: PropTypes.func.isRequired,
    addTweet: PropTypes.func.isRequired,
    editTweet: PropTypes.func.isRequired,
    deleteTweet: PropTypes.func.isRequired,
    match: PropTypes.shape({
        params: PropTypes.shape({
            username: PropTypes.string,
        })
    }),
    history: PropTypes.shape({
        push: PropTypes.func.isRequired,
    }),
};

const mapStateToProps = (state) => (
    {
        users: state.users,
        user: state.user,
        tweets: state.tweets,
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

export { TimelineScreen };
export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(TimelineScreen);
