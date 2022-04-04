import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Grid, Box } from '@mui/material';

const GenericCard = (props) => {
    const { title, image, subtitle, id, handleOnclick } = props;
    return (
        <Card id={id} onClick={handleOnclick} sx={{ display: 'inline-block', width: '1', height: '100%' }}>
            <CardMedia component="img" image={image} alt="green iguana" />

            <CardContent>
                <Typography gutterBottom variant="subtitle2" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {subtitle}
                </Typography>
            </CardContent>
        </Card>
    );
};
export default GenericCard;
