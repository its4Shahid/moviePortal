import { TextField } from '@mui/material';
import React from 'react';

const GenericTextField = (props) => {
    const { handleChange, placeHolder } = props;
    return <TextField variant="outlined" onChange={handleChange} fullWidth placeholder={placeHolder}></TextField>;
};

export default GenericTextField;
