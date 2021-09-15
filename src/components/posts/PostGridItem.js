import React from 'react';
import { Grid, List, Modal } from 'semantic-ui-react';

import { CommentsGridItem } from './CommentsGridItem';

export const PostGridItem = ({ postId, postTitle, postContent, postsComments, setOpen }) => {
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
                            {
                                postsComments !== undefined
                                    ?
                                    <CommentsGridItem
                                        postsComments={postsComments}
                                        postId={postId}
                                    />
                                    :
                                    null
                            }
                        </Modal.Description>
                    </Modal.Content>
                </Modal>
            </List>
        </Grid.Column>
    )
}
