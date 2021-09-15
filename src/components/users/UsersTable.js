import React, { useState } from 'react';

import { Table } from 'semantic-ui-react';
import { TableData } from './TableData';

export const UsersTable = ({ setData, apiData }) => {

    const [users] = useState(apiData);

    return (
        <Table singleLine>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>NAME</Table.HeaderCell>
                    <Table.HeaderCell>ADDRESS</Table.HeaderCell>
                    <Table.HeaderCell>PHONE</Table.HeaderCell>
                    <Table.HeaderCell>WEBSITE</Table.HeaderCell>
                    <Table.HeaderCell>EDIT</Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                {users.map((data) => {
                    return (
                        <TableData setData={setData} data={data} />
                    )
                })}
            </Table.Body>

        </Table>
    )
}
