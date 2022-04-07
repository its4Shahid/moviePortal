import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import GenericCard from '../../components/GenericCard';
import PageLoader from '../../components/PajeLoader/PajeLoader';
import { getTvShowdetailRequest, getTvShowReviewsRequest } from '../../store/actions/tvshowActions';
import Detail from '../Detail';

function TVShowDetail() {
    const { tvShowDetail, isLoading } = useSelector((state) => state.TVShows);

    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        dispatch(getTvShowdetailRequest(id));
    }, [id]);

    const { poster_path, name, overview, first_air_date } = tvShowDetail && tvShowDetail.length && tvShowDetail[0];

    return (
        <Container maxWidth="xl" sx={{ marginTop: '20px' }}>
            {isLoading && <PageLoader />}
            <Detail title={name} image={poster_path} overview={overview} air_date={first_air_date} />

            <Box sx={{ width: '90%', p: 2 }}>
                <Typography variant="h6">Related TV Shows</Typography>
                <Grid container spacing={1} flexWrap="nowrap" overflow="scroll">
                    {tvShowDetail &&
                        tvShowDetail.length &&
                        tvShowDetail.map((item) => {
                            return item.seasons.map((season, index) => (
                                <Grid item xs={3} key={season.id} sx={{ display: 'inline-flex' }}>
                                    <GenericCard
                                        id={season.id}
                                        title={season.name}
                                        subtitle={season.air_date}
                                        image={
                                            season.poster_path && `https://image.tmdb.org/t/p/w300${season.poster_path}`
                                        }
                                    />
                                </Grid>
                            ));
                        })}
                </Grid>
            </Box>
        </Container>
    );
}

export default TVShowDetail;
