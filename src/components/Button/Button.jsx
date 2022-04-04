import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material';

const StyledButton = styled(Button)(() => ({
    height: 50,
}));
function GenericButton(props) {
    const { title, input, handleClick } = props;
    return (
        <StyledButton variant="contained" onClick={handleClick} disabled={input === '' ? true : false}>
            {title}
        </StyledButton>
    );
}

export default GenericButton;
