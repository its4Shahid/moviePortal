import { Grid } from '@mui/material';
import React from 'react';
import GenericCard from '../GenericCard';

const DataList = (props) => {
    const { data } = props;
    return (
        <Grid container spacing={2}>
            {data.map((item, index) => (
                <Grid item key={index}>
                    <GenericCard title={item.title} subtitle={item.subtitle} image={item.image} />
                </Grid>
            ))}
        </Grid>
    );
};
export default DataList;
