import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid } from '@mui/material';
import React from 'react';
import GenericCard from '../../components/GenericCard';
import GenericTab from '../../components/GenericTab';
import {
    getPopularTvShowsRequest,
    getTopRatedTvShowsRequest,
    setTVShowsRequest,
} from '../../store/actions/tvshowActions';
import { Link } from 'react-router-dom';

const TVShows = () => {
    const data = useSelector((state) => state.TVShows.tvShows);
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const [showDetail, setShowDetail] = useState({});
    const [showType, setShowType] = useState('all'); //all,trending,recent movie type
    useEffect(() => {
        if (showType === 'all') {
            dispatch(setTVShowsRequest());
        } else if (showType === 'popular') {
            dispatch(getPopularTvShowsRequest());
        } else if (showType === 'topRated') {
            dispatch(getTopRatedTvShowsRequest());
        }
    }, [showType]);

    // const handleOnclick = (event) => {
    //     const id = event.currentTarget.id;
    //     setShowDetail(
    //         data.find((item) => {
    //             return `${item.id}` === `${id}`;
    //         }),
    //     );
    //     setOpen(true);
    // };
    const handleClose = () => {
        setOpen(false);
    };
    const getAllHandler = () => {
        setShowType('all');
    };
    const getPopularHandler = () => {
        setShowType('popular');
    };
    const getLatestHandler = () => {
        setShowType('topRated');
    };
    return (
        <>
            {/* <MoviesModal open={open} handleClose={handleClose} showDetail={showDetail} /> */}
            <Grid container justifyContent="center" spacing={3}>
                <Grid item xs={11}>
                    <Grid container justifyContent="center">
                        <Grid item>
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
                    <Grid container spacing={2}>
                        {data.map((item, index) => (
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
