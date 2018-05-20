import React from 'react';
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

export default Tweet;
