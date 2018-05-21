import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    ListGroup,
} from 'reactstrap';

import Tweet from './tweet';
import UpdateTweetForm from './updatetweetform';

class Tweets extends Component {
    render() {
        let tweets = this.props.tweets;
        let username = this.props.username;

        return (
            <div className='flex-column p-3 tweets-container'>
                <ListGroup>
                    {
                        tweets.map(
                            tweet => (
                                tweet.user === username ? (
                                    <UpdateTweetForm
                                        key={ tweet.id }
                                        data={ tweet }
                                        onClickTweet={
                                            () => this.props.onClickTweet(tweet)
                                        }
                                        onEditTweet={ this.props.onEditTweet }
                                        onDeleteTweet={
                                            () => this.props.onDeleteTweet(tweet)
                                        }
                                    />
                                ) : (
                                    <Tweet
                                        key={ tweet.id }
                                        data={ tweet }
                                        onClickTweet={
                                            () => this.props.onClickTweet(tweet)
                                        }
                                    />
                                )
                            )
                        )
                    }
                </ListGroup>
            </div>
        );
    }
}

Tweets.propTypes = {
    username: PropTypes.string.isRequired,
    tweets: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            text: PropTypes.string,
            user: PropTypes.string,
            firstname: PropTypes.string,
            created: PropTypes.number,
            timestamp: PropTypes.string,
        })
    ),
    onClickTweet: PropTypes.func.isRequired,
    onEditTweet: PropTypes.func.isRequired,
    onDeleteTweet: PropTypes.func.isRequired,
};

export default Tweets;
