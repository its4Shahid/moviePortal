import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid } from '@mui/material';
import { useParams } from 'react-router-dom';
import Detail from '../Detail';
import GenericCard from '../../components/GenericCard';
import { getMovieDetailRequest } from '../../store/actions/movieActions';

function MovieDetail() {
    const data = useSelector((state) => state.movie.movieDetail);

    const dispatch = useDispatch();
    const { id } = useParams();
    useEffect(() => {
        dispatch(getMovieDetailRequest(id));
    }, [id]);
    console.log('🚀 ~ file: MovieDetail.jsx ~ line 11 ~ MovieDetail ~ data', data);
    const { overview, title, poster_path, release_date } = data && data.length && data[0];
    return (
        <Grid container justifyContent="center" direction="column" spacing={1}>
            <Grid item xs={11}>
                <Detail title={title} image={poster_path} overview={overview} air_date={release_date} />
            </Grid>
            <Grid item container direction="row" spacing={2} flexWrap="nowrap" overflow="scroll" xs={11}>
                {/* {data &&
                    data.length &&
                    data.map((item) => {
                        return item.seasons.map((season) => (
                            <Grid item key={season.id}>
                                <GenericCard
                                    id={season.id}
                                    title={season.name}
                                    subtitle={season.air_date}
                                    image={season.poster_path && `https://image.tmdb.org/t/p/w300${season.poster_path}`}
                                />
                            </Grid>
                        ));
                    })} */}
            </Grid>
        </Grid>
    );
}

export default MovieDetail;
