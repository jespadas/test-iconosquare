import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Read = () => {

    const [apiData, setApiData] = useState([]);

    useEffect(() => {
        axios.get(`https://613885d5163b560017039f42.mockapi.io/JSONPlaceholder`)
            .then((response) => {
                setApiData(response.data);
            });
    }, []);

    const setData = (data) => {
        let { id, name, lastName, checkbox } = data;
        localStorage.setItem('ID', id);
        localStorage.setItem('First Name', name);
        localStorage.setItem('Last Name', lastName);
        localStorage.setItem('Checkbox Value', checkbox);
    };

    const getData = () => {
        axios.get(`https://613885d5163b560017039f42.mockapi.io/JSONPlaceholder/`)
            .then((getData) => {
                setApiData(getData.data);
            });
    };

    const deleteData = (id) => {
        axios.delete(`https://613885d5163b560017039f42.mockapi.io/JSONPlaceholder/${ id }`)
            .then(() => {
                getData();
            })
    };

    return (
        <div>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>First Name</Table.HeaderCell>
                        <Table.HeaderCell>Last Name</Table.HeaderCell>
                        <Table.HeaderCell>Checked</Table.HeaderCell>
                        <Table.HeaderCell>Update</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {apiData.map((data) => {
                        return (
                            <Table.Row key={data.id}>
                                <Table.Cell>{data.name}</Table.Cell>
                                <Table.Cell>{data.lastName}</Table.Cell>
                                <Table.Cell>{data.checkbox ? 'Checked' : 'Unchecked'}</Table.Cell>
                                <Link to='/update'>
                                    <Table.Cell><Button onClick={() => setData(data)}>Update</Button></Table.Cell>
                                </Link>
                                <Table.Cell><Button onClick={() => deleteData(data.id)}>Delete</Button></Table.Cell>
                            </Table.Row>
                        )
                    })}
                </Table.Body>

            </Table>

        </div>
    )
}

export default Read;