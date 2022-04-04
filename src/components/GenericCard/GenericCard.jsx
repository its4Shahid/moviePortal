import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';

const GenericCard = (props) => {
    const { title, image, subtitle, id, handleOnclick } = props;
    return (
        <Grid container>
            <Grid item xs={12}>
                <Card id={id} onClick={handleOnclick} sx={{ width: '300px', minHeight: '550px' }}>
                    <CardMedia component="img" image={image} alt="green iguana" sx={{ width: '300px' }} />
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                            {title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {subtitle}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
};
export default GenericCard;
