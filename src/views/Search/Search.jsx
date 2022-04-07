import { NoEncryption } from '@mui/icons-material';
import { Container, Grid, Typography, Box, makeStyles } from '@mui/material';
import React from 'react';
import GenericButton from '../../components/Button';
import GenericTextField from '../../components/TextField';
import image from '../../media/images/bgImage.jpeg';

const styles = {
    backgroundImage: `url(${image})`,
};
const buttonStyle = {
    borderRadius: '50px',
    padding: '0.9rem 1.2rem',
    left: '0.9rem',
};
const tabStyle = {
    borderRadius: '50px',
};
const searchTextStyle = {
    backgroundColor: 'white',
    borderRadius: '50px',
    backgroundPosition: 'top-center',
    pl: 2,
};

function Search(props) {
    const { handleChange, handleClick, disableStatus, inputText } = props;

    return (
        <Box>
            <Container maxWidth="xl" sx={styles}>
                <Box sx={{ p: 9 }}>
                    <Grid container justifyContent="center">
                        <Grid item xs={12}>
                            <Box sx={{ mb: 4 }}>
                                <Typography variant="h3" sx={{ color: 'white' }}>
                                    Welcome.
                                </Typography>
                                <Typography variant="h5" sx={{ color: 'white' }}>
                                    Millions of movies, TV shows and people to discover. Explore now.
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12}>
                            <Box>
                                <GenericTextField
                                    placeholder="Search"
                                    fullWidth
                                    onchange={handleChange}
                                    searchTextStyle={searchTextStyle}
                                    InputProps={{
                                        endAdornment: (
                                            <GenericButton
                                                onclick={handleClick}
                                                title="search"
                                                size="large"
                                                buttonStyle={buttonStyle}
                                                input={inputText}
                                            />
                                        ),
                                    }}
                                />
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
}

export default Search;
