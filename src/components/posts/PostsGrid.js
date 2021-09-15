import React from 'react';
import { List, Grid } from 'semantic-ui-react';

import { PostsLoader } from '../ui/PostsLoader';
import { CreateButtonGridItem } from './CreateButtonGridItem';
import { NewPostGridItem } from './NewPostGridItem';
import { PostGridItem } from './PostGridItem';

export const PostsGrid = ({ userNamePassed, loading, handleInputChange, setOpen, open, createPost, newPost, posts }) => {
    return (
        <List selection verticalAlign='middle' >
            <Grid columns={3} divided container stackable>
                <h1>Posts list for {userNamePassed}</h1>
                {
                    loading
                        ?
                        <PostsLoader />
                        :
                        <Grid.Row>
                            <CreateButtonGridItem
                                handleInputChange={handleInputChange}
                                open={open}
                                setOpen={setOpen}
                                createPost={createPost}
                            />
                            {/* NEW POST LIST */}
                            {
                                newPost
                                    ?
                                    newPost.map(({ postId, postContent, postTitle }) => {

                                        return (
                                            <NewPostGridItem
                                                postId={postId}
                                                postContent={postContent}
                                                postTitle={postTitle}
                                                setOpen={setOpen}
                                            />
                                        )
                                    })
                                    :
                                    null
                            }
                            {/* API POSTS LIST */}
                            {
                                posts.map(({ postTitle, postId, postContent, postsComments }) => {
                                    return (
                                        <PostGridItem
                                            postTitle={postTitle}
                                            postId={postId}
                                            postContent={postContent}
                                            postsComments={postsComments}
                                            setOpen={setOpen}
                                        />
                                    )
                                })
                            }
                        </Grid.Row>
                }
            </Grid>
        </List>
    )
}
