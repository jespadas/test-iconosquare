import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { PostsGrid } from './PostsGrid';
import '../../styles.css';

const PostsScreen = () => {

    const userIdPassed = localStorage.getItem('userId');
    const userNamePassed = localStorage.getItem('userName');

    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(true);
    const [posts, setPosts] = useState([]);
    const [newPost, setNewPost] = useState([]);
    const [values, setValues] = useState([]);

    const getPosts = () => {
        const url = 'https://613885d5163b560017039f42.mockapi.io/api/v1/users/' + JSON.parse(userIdPassed) + '/posts';
        axios.get(url)
            .then(response => {
                setPosts([...response.data]);
                setLoading(!loading);
            });
    }

    useEffect(() => {

        getPosts();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const createPost = () => {
        setNewPost(newPost => [...newPost, values]);
        setOpen(!open)
        console.log(newPost, 'createpost');
    }

    const handleInputChange = ({ target }) => {
        const { name, value } = target;
        const postId = Math.floor(Math.random() * 100);
        setValues({ ...values, [name]: value, postId });
    };

    return (
        <div className="container">
            <PostsGrid
                userNamePassed={userNamePassed}
                loading={loading}
                handleInputChange={handleInputChange}
                setOpen={setOpen}
                open={open}
                createPost={createPost}
                newPost={newPost}
                posts={posts}
            />
        </div >
    )
}

export default PostsScreen;
