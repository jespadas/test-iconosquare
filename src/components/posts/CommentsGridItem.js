import React from 'react';
import { Comment, Header } from 'semantic-ui-react';

export const CommentsGridItem = ({ postsComments, postId }) => {
    return (
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
    )
}
