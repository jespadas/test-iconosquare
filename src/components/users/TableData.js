import React from 'react';
import { Link } from 'react-router-dom';
import { Table, Button } from 'semantic-ui-react';

export const TableData = ({ data, setData }) => {
    return (
        <Table.Row key={data.userId}>
            <Table.Cell>{data.userName}</Table.Cell>
            <Table.Cell>{data.userAddress}</Table.Cell>
            <Table.Cell>{data.userPhone}</Table.Cell>
            <Table.Cell><a href={data.userWebsite}>{data.userWebsite}</a></Table.Cell>
            <Table.Cell>
                <Link to={`/user/${ data.userId }/posts`}>
                    <Button color="blue" onClick={() => setData(data)}>List Posts</Button>
                </Link>
            </Table.Cell>
        </Table.Row>
    )
}
