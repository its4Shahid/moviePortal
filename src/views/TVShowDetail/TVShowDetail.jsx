import { Title } from '@mui/icons-material';
import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import GenericCard from '../../components/GenericCard';
import { getTvShowdetailRequest, getTvShowReviewsRequest } from '../../store/actions/tvshowActions';
import Detail from '../Detail';
import MoviesModal from '../MoviesModal';

function TVShowDetail() {
    const data = useSelector((state) => state.TVShows.tvShowDetail);
    const reviews = useSelector((state) => state.TVShows.reviews);
    const dispatch = useDispatch();
    const { id } = useParams();
    console.log('reviews:', reviews);
    useEffect(() => {
        dispatch(getTvShowdetailRequest(id));
        dispatch(getTvShowReviewsRequest(id));
    }, [id]);
    console.log('Data:', data);
    const { poster_path, name, overview, first_air_date } = data && data.length && data[0];

    return (
        <Grid container justifyContent="center" direction="column" spacing={2}>
            <Grid item xs={11}>
                <Detail title={name} image={poster_path} overview={overview} air_date={first_air_date} />
            </Grid>
            <Grid item container direction="row" spacing={2} flexWrap="nowrap" overflow="scroll" xs={11}>
                {data &&
                    data.length &&
                    data.map((item) => {
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
        </Grid>
    );
}

export default TVShowDetail;
