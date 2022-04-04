import React from 'react';
import { Grid, Typography } from '@mui/material';

function Detail(props) {
    const { title, overview, image, air_date } = props;
    return (
        <Grid container justifyContent="center">
            <Grid item xs={11}>
                <Grid bgcolor="Grey" container direction="row" spacing={2} wrap="nowrap" sx={{ width: '100%' }}>
                    <Grid item xs={4}>
                        {image && <img src={`https://image.tmdb.org/t/p/w300${image}`} />}
                    </Grid>
                    <Grid item xs={11}>
                        <Grid container spacing={1} direction="column">
                            <Grid item xs={4}>
                                <Typography variant="h4">{title}</Typography>
                                <Typography variant="body">({air_date})</Typography>
                            </Grid>
                            <Grid item xs={8} sx={{ width: '50%' }}>
                                <Typography variant="h5">Overview</Typography>
                                <Typography gutterBottom variant="body" style={{ overflowWrap: 'break-word' }}>
                                    {overview}
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="h5"></Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Detail;
