import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import { Grid, styled, Stack } from '@mui/material';

import headerImg from '../../media/images/TMDB.svg';
import '../../style/views/Header.css';
import { Link } from 'react-router-dom';

const Item = styled(Box)(({ theme }) => ({
    padding: theme.spacing(1),
}));
const Header = () => {
    return (
        <Grid container>
            <Grid item xs={12}>
                <AppBar position="static" sx={{ bgcolor: '#032541', marginBottom: '20px', width: '100%' }}>
                    <Toolbar>
                        <Box className="header-content">
                            <Box className="sub-media" sx={{ flexGrow: 1 }}>
                                <Box className="nav-wrapper">
                                    <a className="logo">
                                        <img src={headerImg} alt="NoImg" />
                                    </a>
                                    <Stack direction="row">
                                        <Link to="/movies" style={{ color: 'white', textDecoration: 'none' }}>
                                            <Item>Movies</Item>
                                        </Link>
                                        <Link to="/tvshows" style={{ color: 'white', textDecoration: 'none' }}>
                                            <Item>TV Shows</Item>
                                        </Link>
                                        <Link to="/people" style={{ color: 'white', textDecoration: 'none' }}>
                                            <Item>People</Item>
                                        </Link>
                                    </Stack>
                                </Box>
                            </Box>
                        </Box>
                    </Toolbar>
                </AppBar>
            </Grid>
        </Grid>
    );
};
export default Header;
