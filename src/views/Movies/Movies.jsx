import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container, Grid, Box } from '@mui/material';
import React from 'react';
import GenericCard from '../../components/GenericCard';
import GenericTab from '../../components/GenericTab';
import {
    getTopRatedMoviesRequest,
    getPopularMoviesRequest,
    setMovieRequest,
    searchMovieRequest,
} from '../../store/actions/movieActions';
import MoviesModal from '../MoviesModal';
import PageLoader from '../../components/PajeLoader/PajeLoader';

import GenericTextField from '../../components/TextField';
import GenericButton from '../../components/Button';
import Search from '../Search';
import SimpleAccordion from '../../components/SimpleAccordian';

const Movies = () => {
    const { movies, isLoading } = useSelector((state) => state.movie);

    const dispatch = useDispatch();
    const [input, setInput] = useState('');
    const [movieType, setMovieType] = useState('all'); //all,trending,recent movie type
    useEffect(() => {
        if (movieType === 'all') {
            dispatch(setMovieRequest());
        } else if (movieType === 'latest') {
            dispatch(getTopRatedMoviesRequest());
        } else if (movieType === 'popular') {
            dispatch(getPopularMoviesRequest());
        } else if (movieType === 'search') {
            dispatch(searchMovieRequest(input));
            setMovieType('');
        }
    }, [movieType]);

    const getAllHandler = () => {
        setMovieType('all');
    };
    const getPopularHandler = () => {
        setMovieType('popular');
    };
    const getLatestHandler = () => {
        setMovieType('latest');
    };

    const handleClick = () => {
        setMovieType('search');
    };
    const handleChange = (event) => {
        setInput(event.target.value);
    };

    return (
        <Box>
            <Search handleChange={handleChange} handleClick={handleClick} inputText={input} />
            <SimpleAccordion />
            <Container maxWidth="xl" sx={{ marginTop: '20px' }}>
                <Grid container justifyContent="center" spacing={3}>
                    <Grid item xs={11}>
                        <Grid container justifyContent="center">
                            <Grid item>
                                {isLoading && <PageLoader />}
                                <GenericTab
                                    all="ALL MOVIES"
                                    popular="POPULAR MOVIES"
                                    latest="LATEST MOVIES"
                                    getAllHandler={getAllHandler}
                                    getPopularHandler={getPopularHandler}
                                    getLatestHandler={getLatestHandler}
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={1}>
                            {isLoading && <PageLoader />}
                            {movies &&
                                movies.length &&
                                movies.map((item, index) => (
                                    <Grid xs={4} md={4} lg={3} item key={index} sx={{ widt: '60%' }}>
                                        <Link to={`/movie/detail/${item.id}`}>
                                            <GenericCard
                                                id={item.id}
                                                title={item.title}
                                                subtitle={item.release_date}
                                                image={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                                            />
                                        </Link>
                                    </Grid>
                                ))}
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};
export default Movies;
