import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { Button, Checkbox, Form } from 'semantic-ui-react';
import axios from 'axios';

const Update = () => {

    let history = useHistory();

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [checkbox, setCheckbox] = useState(false);

    const [id, setID] = useState(null);

    useEffect(() => {
        setID(localStorage.getItem('ID'));
        setName(localStorage.getItem('First Name'));
        setLastName(localStorage.getItem('Last Name'));
        setCheckbox(localStorage.getItem('Checkbox Value'));
    }, [])

    const updateApiData = () => {
        axios.put(`https://613885d5163b560017039f42.mockapi.io/JSONPlaceholder/${ id }`, {
            name,
            lastName,
            checkbox
        }).then(() => {
            history.push('/read');
        });
    };

    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>First Name</label>
                    <input placeholder='First Name' value={name} onChange={(e) => setName(e.target.value)} />
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input placeholder='Last Name' value={lastName} onChange={(e) => setLastName(e.target.value)} />
                </Form.Field>
                <Form.Field>
                    <Checkbox label='I agree to the Terms and Conditions' checked={checkbox} onChange={(e) => setCheckbox(!checkbox)} />
                </Form.Field>
                <Button type='submit' onClick={updateApiData}>Update</Button>
            </Form>
        </div>
    )
}

export default Update;