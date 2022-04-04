import { Grid, Typography, Container, Box } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getPeopleDetialRequest } from '../../store/actions/peopleActions';
import ImageSlide from '../ImageSlide/ImageSlide';

const PeopleDetail = () => {
    const data = useSelector((state) => state.people.people_detail);
    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        dispatch(getPeopleDetialRequest(id));
    }, [id]);
    console.log(data);
    const { profile_path, birthday, gender, known_for_department, place_of_birth, name, popularity, biography } =
        data && data.length && data[0];
    return (
        <Box>
            <Container maxWidth="lg">
                <Grid container spacing={10}>
                    <Grid item xs={6} md={4} lg={3}>
                        <Box>
                            {profile_path && (
                                <img
                                    src={`https://image.tmdb.org/t/p/w300${profile_path}`}
                                    sx={{ height: '300px', width: '100%' }}
                                />
                            )}
                        </Box>
                        <Box>
                            <Typography variant="h5">Personal Info</Typography>

                            <Box>
                                <Typography variant="h6">Known For</Typography>
                                <Typography variant="body">{known_for_department}</Typography>
                            </Box>
                            <Box>
                                <Typography variant="h6">Known Credits</Typography>
                                <Typography variant="body">{popularity}</Typography>
                            </Box>
                            <Box>
                                <Typography variant="h6">Gender</Typography>
                                <Typography variant="body">{gender === 1 ? 'Female' : 'Male'}</Typography>
                            </Box>
                            <Box>
                                <Typography variant="h6">Birth Date</Typography>
                                <Typography variant="body">({birthday})</Typography>
                            </Box>
                            <Box>
                                <Typography variant="h6">Place of Birth</Typography>
                                <Typography variant="body">{place_of_birth}</Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={6} md={8} lg={9}>
                        <Box sx={{ marginLeft: '10px' }}>
                            <Box>
                                <Typography variant="h4">{name}</Typography>
                            </Box>
                            <Box>
                                <Typography variant="h5">Biography</Typography>
                                <Typography variant="body">{biography}</Typography>
                            </Box>
                            <Box>
                                <ImageSlide />
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default PeopleDetail;
