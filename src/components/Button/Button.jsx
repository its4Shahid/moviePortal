import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material';

function GenericButton(props) {
    const { title, input, onclick, buttonStyle, size } = props;
    return (
        <Button
            variant="contained"
            onClick={onclick}
            size={size}
            disabled={input === '' ? true : false}
            sx={buttonStyle}
        >
            {title}
        </Button>
    );
}

export default GenericButton;
