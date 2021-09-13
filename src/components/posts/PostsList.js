import React, { useState, useEffect } from 'react';
//import { useHistory } from 'react-router';
import { List, Modal, Comment, Grid, Button, Header, Form } from 'semantic-ui-react';
import axios from 'axios';

import '../../styles.css';

const PostsList = () => {

    const userIdPassed = localStorage.getItem('userId');
    const userNamePassed = localStorage.getItem('userName');

    const [open, setOpen] = useState(false)

    const [posts, setPosts] = useState([]);
    const [newPost, setNewPost] = useState([]);
    const [postContent] = useState('');

    const getApiData = () => {
        const url = 'https://613885d5163b560017039f42.mockapi.io/api/v1/users/' + JSON.parse(userIdPassed) + '/posts';
        axios.get(url)
            .then(response => {
                setPosts(response.data);
                console.log(posts);
            });
    };

    useEffect(() => {

        const url = 'https://613885d5163b560017039f42.mockapi.io/api/v1/users/' + JSON.parse(userIdPassed) + '/posts';
        axios.get(url)
            .then(response => {
                setPosts(response.data);
            });

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const postData = () => {
        const url = 'https://613885d5163b560017039f42.mockapi.io/api/v1/newPosts';
        axios.post(url, {
            postTitle: newPost,
            postContent
        }).then(
            setOpen(!open),
            setPosts(posts)
        )

    };

    return (
        <div className="posts-container">
            <List selection verticalAlign='middle' >
                <Grid columns={3} divided stackable >
                    <h1>Posts list for {userNamePassed}</h1>
                    <Grid.Row>
                        <Grid.Column>

                            <Modal
                                onClose={() => setOpen(false)}
                                onOpen={() => setOpen(true)}
                                open={open}
                                trigger={
                                    <Button className="create-button">
                                        <span>+</span><br /><span>Create a new post</span>
                                    </Button>
                                }
                            >
                                <Modal.Header>
                                    <span>Create a new post :</span>
                                </Modal.Header>
                                <Modal.Content>
                                    <Modal.Description>
                                        <Form onSubmit={postData}>
                                            <Form.Field>
                                                <label>Title</label>
                                                <input
                                                    placeholder='Your comment title...'
                                                    autoComplete='off'
                                                    onChange={(e) => setNewPost(e.target.value)}
                                                    name='postTitle'
                                                />
                                            </Form.Field>

                                            <Form.Field>
                                                <label>Post</label>
                                                <input
                                                    placeholder='Your comment...'
                                                    autoComplete='off'
                                                    name='postTitle'
                                                />
                                            </Form.Field>
                                            <Modal.Actions>
                                                <Button
                                                    color="blue"
                                                    onClick={postData}
                                                    type='submit'
                                                >
                                                    Create
                                                </Button>
                                            </Modal.Actions>
                                        </Form>
                                    </Modal.Description>
                                </Modal.Content>

                            </Modal>

                        </Grid.Column>
                        {
                            posts.map((post) => {
                                return (

                                    <Grid.Column as="h2" key={post.postId} >
                                        <List selection verticalAlign='middle' className="list-item">
                                            <Modal
                                                key={post.postId}
                                                onClose={() => setOpen(false)}
                                                onOpen={() => setOpen(true)}
                                                trigger={
                                                    <List.Item key={post.postId} >
                                                        <List.Content >
                                                            <List.Header as="h2">{post.postTitle}</List.Header>
                                                            <h3>{post.postContent}</h3>
                                                        </List.Content>
                                                    </List.Item>}
                                                postcontent={post.postContent}
                                            >
                                                <Modal.Header>
                                                    <span>{post.postTitle}</span>
                                                </Modal.Header>
                                                <Modal.Content>
                                                    <Modal.Description>
                                                        <p>{post.postContent}</p>
                                                        <Comment.Group>
                                                            <Header as='h3' dividing>
                                                                Comments ({post.postsComments.length})
                                                            </Header>

                                                            <Comment key={post.postId}>
                                                                <Comment.Avatar src={post.postsComments[0].commentAvatar} />
                                                                <Comment.Content>
                                                                    <Comment.Author>{post.postsComments[0].commentAuthor}</Comment.Author>
                                                                    <Comment.Metadata>
                                                                        <div>{
                                                                            post.postsComments[0].commentDate}</div>
                                                                    </Comment.Metadata>
                                                                    <Comment.Text>{post.postsComments[0].commentContent}</Comment.Text>

                                                                    {/* TODO make post action for comments
                                                                    <Comment.Actions>
                                                                        <Comment.Action>Reply</Comment.Action>
                                                                    </Comment.Actions> 
                                                                    */}
                                                                </Comment.Content>
                                                            </Comment>
                                                        </Comment.Group>
                                                    </Modal.Description>
                                                </Modal.Content>
                                            </Modal>
                                        </List>
                                    </Grid.Column>
                                )
                            })
                        }

                    </Grid.Row>

                </Grid>
            </List>


        </div >

    )
}

export default PostsList;
