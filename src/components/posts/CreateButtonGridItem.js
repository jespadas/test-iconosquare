import React from 'react';
import { Grid, Modal, Form, Button } from 'semantic-ui-react';

export const CreateButtonGridItem = ({ setOpen, open, handleInputChange, createPost }) => {
    return (

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
    )
}
