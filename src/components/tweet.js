import React from 'react';
import PropTypes from 'prop-types';
import {
    Card,
    CardBody,
    CardTitle,
    CardText,
} from 'reactstrap';

const Tweet = (props) => (
    <Card
        className='mb-2'
        onClick={ props.onClickTweet }
    >
        <CardBody>
            <CardTitle>
                { props.data.firstname }
            </CardTitle>
            <CardText>
                { props.data.text }
            </CardText>
            <CardText>
                <small className='text-muted'>
                    { props.data.timestamp }
                </small>
            </CardText>
        </CardBody>
    </Card>
);

Tweet.propTypes = {
    onClickTweet: PropTypes.func.isRequired,
    data: PropTypes.shape({
        id: PropTypes.number,
        text: PropTypes.string,
        user: PropTypes.string,
        firstname: PropTypes.string,
        created: PropTypes.number,
        timestamp: PropTypes.string,
    }),
};

export default Tweet;
