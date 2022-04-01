import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material';

const StyledButton = styled(Button)(() => ({
    height: 30,
    backgroundColor: 'inherit',
}));
function GenericButton({ title, ...props }) {
    return <StyledButton {...props}>{title}</StyledButton>;
}

export default GenericButton;
