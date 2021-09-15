import React from 'react';
import { Grid, List, Modal } from 'semantic-ui-react';

export const NewPostGridItem = ({ postId, postContent, postTitle, setOpen }) => {
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
}
