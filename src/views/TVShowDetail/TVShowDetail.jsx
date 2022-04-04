import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import GenericCard from '../../components/GenericCard';
import PageLoader from '../../components/PajeLoader/PajeLoader';
import { getTvShowdetailRequest, getTvShowReviewsRequest } from '../../store/actions/tvshowActions';
import Detail from '../Detail';

function TVShowDetail() {
    const { tvShowDetail, isLoading } = useSelector((state) => state.TVShows);
    //  const reviews = useSelector((state) => state.TVShows.reviews);
    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        dispatch(getTvShowdetailRequest(id));
        // dispatch(getTvShowReviewsRequest(id));
    }, [id]);

    const { poster_path, name, overview, first_air_date } = tvShowDetail && tvShowDetail.length && tvShowDetail[0];

    return (
        <Container maxWidth="xl">
            {isLoading && <PageLoader />}

            <Detail title={name} image={poster_path} overview={overview} air_date={first_air_date} />

            <Grid container direction="row" spacing={2} flexWrap="nowrap" overflow="scroll">
                {tvShowDetail &&
                    tvShowDetail.length &&
                    tvShowDetail.map((item) => {
                        return item.seasons.map((season, index) => (
                            <Grid item key={season.id}>
                                <GenericCard
                                    id={season.id}
                                    title={season.name}
                                    subtitle={season.air_date}
                                    image={season.poster_path && `https://image.tmdb.org/t/p/w300${season.poster_path}`}
                                />
                            </Grid>
                        ));
                    })}
            </Grid>
        </Container>
    );
}

export default TVShowDetail;
