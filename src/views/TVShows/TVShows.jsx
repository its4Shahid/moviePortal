import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid } from '@mui/material';
import React from 'react';
import GenericCard from '../../components/GenericCard';
import GenericTab from '../../components/GenericTab';
import {
    getPopularTvShowsRequest,
    getTopRatedTvShowsRequest,
    searchTvShowRequest,
    setTVShowsRequest,
} from '../../store/actions/tvshowActions';
import { Link } from 'react-router-dom';
import PageLoader from '../../components/PajeLoader/PajeLoader';
import GenericTextField from '../../components/TextField';
import GenericButton from '../../components/Button';

const TVShows = () => {
    const { tvShows, isLoading } = useSelector((state) => state.TVShows);
    const dispatch = useDispatch();
    const [input, setInput] = useState('');
    const [showType, setShowType] = useState('all'); //all,trending,recent movie type
    useEffect(() => {
        if (showType === 'all') {
            dispatch(setTVShowsRequest());
        } else if (showType === 'popular') {
            dispatch(getPopularTvShowsRequest());
        } else if (showType === 'topRated') {
            dispatch(getTopRatedTvShowsRequest());
        } else if (showType === 'search') {
            dispatch(searchTvShowRequest(input));
        }
    }, [showType]);

    const getAllHandler = () => {
        setShowType('all');
    };
    const getPopularHandler = () => {
        setShowType('popular');
    };
    const getLatestHandler = () => {
        setShowType('topRated');
    };
    const handleChange = (event) => {
        setInput(event.target.value);
    };
    const handleClick = () => {
        setShowType('search');
    };
    return (
        <>
            <Grid container justifyContent="center" spacing={3}>
                <Grid item xs={11}>
                    <Grid container justifyContent="center">
                        <Grid container justifyContent="center">
                            <Grid item xs={12}>
                                <Grid item xs={8} sm={10} lg={8}>
                                    <GenericTextField handleChange={handleChange} placeHolder="Search" />
                                </Grid>
                                <Grid item xs={4} sm={2} lg={4}>
                                    <GenericButton handleClick={handleClick} input={input} title="Search" />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid container justifyContent="center">
                            <Grid item>
                                {isLoading && <PageLoader />}
                                <GenericTab
                                    all="ALL TV SHOWS"
                                    popular="POPULAR TV SHOWS"
                                    latest="TOP RATED"
                                    getAllHandler={getAllHandler}
                                    getPopularHandler={getPopularHandler}
                                    getLatestHandler={getLatestHandler}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                        {isLoading && <PageLoader />}
                        {tvShows.map((item, index) => (
                            <Grid item key={index}>
                                <Link to={`/tvShows/details/${item.id}`}>
                                    <GenericCard
                                        id={item.id}
                                        title={item.name}
                                        subtitle={item.first_air_date}
                                        image={item.poster_path && `https://image.tmdb.org/t/p/w300${item.poster_path}`}
                                    />
                                </Link>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
};
export default TVShows;
