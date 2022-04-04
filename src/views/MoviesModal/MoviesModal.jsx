import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Grid } from '@mui/material';

const style = {
    bgcolor: 'black',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
};

const MoviesModal = ({ handleClose, open, movieDetail }) => {
    const { title, overview, release_date, poster_path } = movieDetail;
    console.log(movieDetail);
    return (
        <Grid container>
            <Grid item xs={12}>
                <Modal open={open} onClose={handleClose}>
                    <Grid container sx={style} direction="row" spacing={3}>
                        <Grid item xs={6}>
                            <img src={`https://image.tmdb.org/t/p/w300${poster_path}`} />
                        </Grid>
                        <Grid item xs={6}>
                            <Grid container direction="column" spacing={1}>
                                <Grid item>
                                    <Typography variant="h5">{title}</Typography>
                                    <Typography variant="body">({release_date})</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="h6">Overview</Typography>
                                    <Typography variant="body">{overview}</Typography>
                                </Grid>
                                <Grid container>
                                    <Grid></Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Modal>
            </Grid>
        </Grid>
    );
};
export default MoviesModal;
