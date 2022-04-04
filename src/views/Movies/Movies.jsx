import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Grid } from '@mui/material';
import React from 'react';
import GenericCard from '../../components/GenericCard';
import GenericTab from '../../components/GenericTab';
import { getTopRatedMoviesRequest, getPopularMoviesRequest, setMovieRequest } from '../../store/actions/movieActions';
import MoviesModal from '../MoviesModal';

const Movies = () => {
    const data = useSelector((state) => state.movie.movies);
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const [movieDetail, setMovieDetail] = useState({});
    const [movieType, setMovieType] = useState('all'); //all,trending,recent movie type

    useEffect(() => {
        if (movieType === 'all') {
            dispatch(setMovieRequest());
        } else if (movieType === 'latest') {
            dispatch(getTopRatedMoviesRequest());
        } else if (movieType === 'popular') {
            dispatch(getPopularMoviesRequest());
        }
    }, [movieType]);
    // const navigate = useNavigate();
    // const handleOnclick = (event) => {
    //     const id = event.currentTarget.id;
    //     navigate('');
    //     // setMovieDetail(
    //     //     data.find((item) => {
    //     //         return `${item.id}` === `${id}`;
    //     //     }),
    //     // );
    //     // setOpen(true);
    // };
    const handleClose = () => {
        setOpen(false);
    };
    const getAllHandler = () => {
        setMovieType('all');
    };
    const getPopularHandler = () => {
        setMovieType('popular');
    };
    const getLatestHandler = () => {
        setMovieType('latest');
    };
    return (
        <>
            <MoviesModal open={open} handleClose={handleClose} movieDetail={movieDetail} />
            <Grid container justifyContent="center" spacing={3}>
                <Grid item xs={11}>
                    <Grid container justifyContent="center">
                        <Grid item>
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
                    <Grid container spacing={2}>
                        {data.map((item, index) => (
                            <Grid item key={index}>
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
        </>
    );
};
export default Movies;
