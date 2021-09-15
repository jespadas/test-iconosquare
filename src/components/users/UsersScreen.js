import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { UsersTable } from './UsersTable';
import { ListLoader } from '../ui/ListLoader';
import '../../styles.css';

const UsersScreen = () => {

    const [apiData, setApiData] = useState([]);
    const [loading, setLoading] = useState(true);

    const getUsers = () => {
        const url = `https://613885d5163b560017039f42.mockapi.io/api/v1/users/`;
        axios.get(url)
            .then(response => {
                setApiData(response.data);
                setLoading(!loading);
            });
    };

    useEffect(() => {
        getUsers();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    const setData = (data) => {
        let { userId, userName, userPosts } = data;
        localStorage.setItem('userId', JSON.stringify(userId));
        localStorage.setItem('userName', userName);
        localStorage.setItem('userPosts', userPosts)
    };

    return (
        <div className="container">

            {
                loading
                    ?
                    <ListLoader />
                    :
                    <UsersTable setData={setData} apiData={apiData} loading={loading} />
            }

        </div>
    )
}

export default UsersScreen;