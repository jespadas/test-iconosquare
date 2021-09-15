import React from 'react';
import { Segment, Dimmer, Grid, Loader, Image } from 'semantic-ui-react';

export const PostsLoader = () => {
    return (
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
    )
}
