import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { Button, Checkbox, Form } from 'semantic-ui-react';
import axios from 'axios';

const Create = () => {

    let history = useHistory();

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [checkbox, setCheckbox] = useState(false);

    const postData = () => {
        axios.post(`https://613885d5163b560017039f42.mockapi.io/JSONPlaceholder`, {
            name,
            lastName,
            checkbox
        }).then(() => {
            history.push('/read');
        });
    };

    return (
        <Form className="create-form">
            <Form.Field>
                <label>Name</label>
                <input placeholder='Name' onChange={(e) => setName(e.target.value)} />
            </Form.Field>
            <Form.Field>
                <label>Last name</label>
                <input placeholder='Last name' onChange={(e) => setLastName(e.target.value)} />
            </Form.Field>
            <Form.Field>
                <Checkbox label="I agree to the Terms and Conditions" onChange={(e) => setCheckbox(!checkbox)} />
            </Form.Field>
            <Button type='submit' onClick={postData}>Submit</Button>
        </Form>
    )
}

export default Create;
