import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import '../../styles.css';

const UserList = () => {

    const [apiData, setApiData] = useState([]);

    const getUsers = () => {
        const url = `https://613885d5163b560017039f42.mockapi.io/api/v1/users/`;
        axios.get(url)
            .then(response => {
                setApiData(response.data);
            });
    };

    useEffect(() => {
        getUsers();
    }, []);


    const setData = (data) => {
        let { userId, userName, userPosts } = data;
        localStorage.setItem('userId', JSON.stringify(userId));
        localStorage.setItem('userName', userName);
        localStorage.setItem('userPosts', userPosts)
    };

    return (
        <>
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
                    {apiData.map((data) => {
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
                    })}
                </Table.Body>

            </Table>

        </>
    )
}

export default UserList;