import { Grid, Typography } from '@mui/material';
import React from 'react';

const data = [
    { id: 1, image: 'https://picsum.photos/200/300', title: 'Pics Art', subtitle: 'Subtitle' },
    { id: 2, image: 'https://picsum.photos/200/300', title: 'Pics Art', subtitle: 'Subtitle' },
    { id: 3, image: 'https://picsum.photos/200/300', title: 'Pics Art', subtitle: 'Subtitle' },
    { id: 4, image: 'https://picsum.photos/200/300', title: 'Pics Art', subtitle: 'Subtitle' },
    { id: 5, image: 'https://picsum.photos/200/300', title: 'Pics Art', subtitle: 'Subtitle' },
    { id: 6, image: 'https://picsum.photos/200/300', title: 'Pics Art', subtitle: 'Subtitle' },
    { id: 7, image: 'https://picsum.photos/200/300', title: 'Pics Art', subtitle: 'Subtitle' },
    { id: 8, image: 'https://picsum.photos/200/300', title: 'Pics Art', subtitle: 'Subtitle' },
    { id: 9, image: 'https://picsum.photos/200/300', title: 'Pics Art', subtitle: 'Subtitle' },
    { id: 10, image: 'https://picsum.photos/200/300', title: 'Pics Art', subtitle: 'Subtitle' },
    { id: 11, image: 'https://picsum.photos/200/300', title: 'Pics Art', subtitle: 'Subtitle' },
];

function ImageSlide() {
    return (
        <Grid container direction="column">
            <Grid item xs={3} sm={12} md={3} lg={10}>
                <Typography variant="h5">Known For</Typography>
            </Grid>
            <Grid item xs={3} sm={12} md={9} lg={12}>
                <Grid
                    container
                    direction="row"
                    flexWrap="nowrap"
                    spacing={2}
                    sx={{
                        overflow: 'scroll',
                        maxWidth: '800px',
                    }}
                >
                    {data.map((item) => (
                        <Grid item xs={3} sm={12} md={9} lg={12}>
                            <img src={item.image} />
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Grid>
    );
}

export default ImageSlide;
