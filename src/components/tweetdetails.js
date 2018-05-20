import React from 'react';
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

export default TweetDetails;
