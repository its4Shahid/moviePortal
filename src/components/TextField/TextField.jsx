import { TextField } from '@mui/material';
import React from 'react';

const GenericTextField = (props) => {
    const { onchange, placeholder, searchTextStyle, InputProps, color, variant } = props;
    return (
        <TextField
            variant={variant}
            onChange={onchange}
            fullWidth
            placeholder={placeholder}
            sx={searchTextStyle}
            InputProps={InputProps}
            color={color}
        ></TextField>
    );
};

export default GenericTextField;
