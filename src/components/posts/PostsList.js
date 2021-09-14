import React, { useState, useEffect } from 'react';
//import { useHistory } from 'react-router';
import { List, Modal, Comment, Grid, Button, Header, Form, Segment, Image, Dimmer, Loader } from 'semantic-ui-react';
import axios from 'axios';

import '../../styles.css';

const PostsList = () => {

    const userIdPassed = localStorage.getItem('userId');
    const userNamePassed = localStorage.getItem('userName');

    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(true);
    const [posts, setPosts] = useState([]);
    const [newPost, setNewPost] = useState([]);
    const [values, setValues] = useState([]);


    useEffect(() => {

        const url = 'https://613885d5163b560017039f42.mockapi.io/api/v1/users/' + JSON.parse(userIdPassed) + '/posts';
        axios.get(url)
            .then(response => {
                setPosts([...response.data]);
                setLoading(!loading);
            });

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
            <List selection verticalAlign='middle' >
                <Grid columns={3} divided container stackable>
                    <h1>Posts list for {userNamePassed}</h1>
                    {
                        loading
                            ?
                            <Segment>
                                <Dimmer active inverted>
                                    <Loader size='massive' active />
                                </Dimmer>
                                <Grid container verticalAlign='middle' doubling columns={3} centered>
                                    <Grid.Row>
                                        <Grid.Column>
                                            <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
                                        </Grid.Column>
                                        <Grid.Column>
                                            <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
                                        </Grid.Column>
                                        <Grid.Column>
                                            <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
                                        </Grid.Column>
                                    </Grid.Row>
                                </Grid>
                            </Segment>
                            :
                            <Grid.Row>
                                <Grid.Column mobile={16} tablet={8} computer={4}>
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
                                            <span>Create a new post: </span>
                                        </Modal.Header>
                                        <Modal.Content>
                                            <Modal.Description>
                                                <Form>
                                                    <Form.Field>
                                                        <label>Title</label>
                                                        <input
                                                            placeholder='Your comment title...'
                                                            autoComplete='off'
                                                            onChange={(e) => handleInputChange(e)}
                                                            name='postTitle'
                                                            autoFocus
                                                        />
                                                    </Form.Field>
                                                    <Form.Field>
                                                        <label>Post</label>
                                                        <input
                                                            placeholder='Your comment...'
                                                            autoComplete='off'
                                                            onChange={(e) => handleInputChange(e)}
                                                            name='postContent'

                                                        />
                                                    </Form.Field>
                                                    <Modal.Actions>
                                                        <Button
                                                            color="blue"
                                                            onClick={createPost}
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
                                {/* NEW POST LIST */}
                                {
                                    newPost
                                        ?
                                        newPost.map(({ postId, postContent, postTitle }) => {
                                            console.log(postId);
                                            return (
                                                <Grid.Column as="h2" mobile={16} tablet={8} computer={4} key={postId}>
                                                    <List selection verticalAlign='middle' className="list-item">
                                                        <Modal
                                                            key={postId}
                                                            onClose={() => setOpen(false)}
                                                            onOpen={() => setOpen(true)}
                                                            trigger={
                                                                <List.Item key={postId}>
                                                                    <List.Content >
                                                                        <List.Header as="h2">{postTitle}</List.Header>
                                                                        <h3>{postContent}</h3>
                                                                    </List.Content>
                                                                </List.Item>}
                                                            postcontent={postContent}
                                                        >
                                                            <Modal.Header>
                                                                <span>{postTitle}</span>
                                                            </Modal.Header>
                                                            <Modal.Content>
                                                                <Modal.Description>
                                                                    <p>{postContent}</p>
                                                                </Modal.Description>
                                                            </Modal.Content>
                                                        </Modal>
                                                    </List>
                                                </Grid.Column>
                                            )
                                        })
                                        :
                                        null
                                }
                                {/* API POSTS LIST */}
                                {
                                    posts.map(({ postTitle, postId, postContent, postsComments }) => {
                                        return (
                                            <Grid.Column as="h2" key={postId} mobile={16} tablet={8} computer={4}>
                                                <List selection verticalAlign='middle' className="list-item">
                                                    <Modal
                                                        key={postId}
                                                        onClose={() => setOpen(false)}
                                                        onOpen={() => setOpen(true)}
                                                        trigger={
                                                            <List.Item key={postId} >
                                                                <List.Content >
                                                                    <List.Header as="h2">{postTitle}</List.Header>
                                                                    <h3>{postContent}</h3>
                                                                </List.Content>
                                                            </List.Item>}

                                                    >
                                                        <Modal.Header>
                                                            <span>{postTitle}</span>
                                                        </Modal.Header>
                                                        <Modal.Content>
                                                            <Modal.Description>
                                                                <p>{postContent}</p>
                                                                {postsComments !== undefined
                                                                    ?
                                                                    <Comment.Group>
                                                                        <Header as='h3' dividing>
                                                                            Comments ({postsComments.length})
                                                                        </Header>

                                                                        <Comment key={postId}>
                                                                            <Comment.Avatar src={postsComments[0].commentAvatar} />
                                                                            <Comment.Content>
                                                                                <Comment.Author>{postsComments[0].commentAuthor}</Comment.Author>
                                                                                <Comment.Metadata>
                                                                                    <div>{
                                                                                        postsComments[0].commentDate}</div>
                                                                                </Comment.Metadata>
                                                                                <Comment.Text>{postsComments[0].commentContent}</Comment.Text>

                                                                                {/* TODO make post action for comments
                                                                    <Comment.Actions>
                                                                        <Comment.Action>Reply</Comment.Action>
                                                                    </Comment.Actions> 
                                                                    */}
                                                                            </Comment.Content>
                                                                        </Comment>
                                                                    </Comment.Group>
                                                                    :
                                                                    null
                                                                }
                                                            </Modal.Description>
                                                        </Modal.Content>
                                                    </Modal>
                                                </List>
                                            </Grid.Column>
                                        )
                                    })
                                }



                            </Grid.Row>
                    }
                </Grid>
            </List>


        </div >

    )
}

export default PostsList;
