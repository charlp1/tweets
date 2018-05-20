import {
    ADD_TWEET,
    EDIT_TWEET,
    DELETE_TWEET,
} from './../constants/tweets';

export const addTweet = (tweet) => ({
    type: ADD_TWEET,
    payload: tweet
});

export const editTweet = (tweet) => ({
    type: EDIT_TWEET,
    payload: tweet
});

export const deleteTweet = (tweet) => ({
    type: DELETE_TWEET,
    payload: tweet
});
