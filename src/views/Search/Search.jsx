import { Button, Grid, TextField } from '@mui/material';
import React from 'react';

function Search() {
    return (
        <Grid container justifyContent="center">
            <Grid item xs={11}>
                <TextField variant="outlined" fullWidth placeholder="Search"></TextField>
                <Button variant="filled" color="primary">
                    Search
                </Button>
            </Grid>
        </Grid>
    );
}

export default Search;
