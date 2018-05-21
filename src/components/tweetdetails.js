import React from 'react';
import PropTypes from 'prop-types';
import {
    Table,
} from 'reactstrap';

const TweetDetails = (props) => (
    <Table borderless>
        <tbody>
            <tr>
                <td>id</td>
                <td>{ props.data.id }</td>
            </tr>
            <tr>
                <td>tweet</td>
                <td>{ props.data.text }</td>
            </tr>
            <tr>
                <td>posted on</td>
                <td>{ props.data.timestamp }</td>

            </tr>
            <tr>
                <td>posted by</td>
                <td>{ props.data.firstName }</td>
            </tr>
        </tbody>
    </Table>
);

TweetDetails.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.number,
        text: PropTypes.string,
        timestamp: PropTypes.string,
        firstName: PropTypes.string,
    }),
};

export default TweetDetails;
