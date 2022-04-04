import React from 'react';
import { Box, Grid, Typography } from '@mui/material';

function Detail(props) {
    const { title, overview, image, air_date } = props;
    return (
        <Grid container>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                {image && <img src={`https://image.tmdb.org/t/p/w300${image}`} />}
            </Grid>
            <Grid item xs={12} sm={6} md={8} lg={9}>
                <Box>
                    <Typography variant="h4">{title}</Typography>
                    <Typography variant="body">({air_date})</Typography>
                </Box>
                <Box>
                    <Typography variant="h5">Overview</Typography>
                    <Typography gutterBottom variant="body" style={{ overflowWrap: 'break-word' }}>
                        {overview}
                    </Typography>
                </Box>
            </Grid>
        </Grid>
    );
}

export default Detail;
