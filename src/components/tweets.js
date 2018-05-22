import React from 'react';
import PropTypes from 'prop-types';

import Tweet from './tweet';
import UpdateTweetForm from './updatetweetform';

const Tweets = (props) => {
    const username = props.username;
    const tweets = props.tweets;
    const tweetItems = tweets.map(
        tweet => (
            tweet.user === username ? (
                <UpdateTweetForm
                    key={ tweet.id }
                    data={ tweet }
                    onClickTweet={
                        () => props.onClickTweet(tweet)
                    }
                    onEditTweet={ props.onEditTweet }
                    onDeleteTweet={
                        () => props.onDeleteTweet(tweet)
                    }
                />
            ) : (
                <Tweet
                    key={ tweet.id }
                    data={ tweet }
                    onClickTweet={
                        () => props.onClickTweet(tweet)
                    }
                />
            )
        )
    );

    return (
        <div className='flex-column p-3 tweets-container'>
            { tweetItems }
        </div>
    );
};

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
