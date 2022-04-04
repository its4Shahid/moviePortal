import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Grid } from '@mui/material';
import { useParams } from 'react-router-dom';
import Detail from '../Detail';
import GenericCard from '../../components/GenericCard';
import { getMovieDetailRequest } from '../../store/actions/movieActions';
import PageLoader from '../../components/PajeLoader/PajeLoader';

function MovieDetail() {
    const { movieDetail, isLoading } = useSelector((state) => state.movie);

    const dispatch = useDispatch();
    const { id } = useParams();
    useEffect(() => {
        dispatch(getMovieDetailRequest(id));
    }, [id]);

    const { overview, title, poster_path, release_date } = movieDetail && movieDetail.length && movieDetail[0];
    return (
        <Container maxWidth="xl">
            {isLoading && <PageLoader />}
            <Detail title={title} image={poster_path} overview={overview} air_date={release_date} />
        </Container>
    );
}

export default MovieDetail;
