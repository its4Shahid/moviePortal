import { Button, Grid, TextField } from '@mui/material';
import React from 'react';

function Search(props) {
    const { handleChange, handleClick, disableStatus, input } = props;
    return (
        <Grid container justifyContent="left" direction="row" spacing={2}>
            <Grid item xs={4}>
                <TextField variant="outlined" onChange={handleChange} fullWidth placeholder="Search"></TextField>
            </Grid>
        </Grid>
    );
}

export default Search;
