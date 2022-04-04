import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import React from 'react';
import GenericCard from '../../components/GenericCard';
import GenericTab from '../../components/GenericTab';
import { setPeopleRequest } from '../../store/actions/peopleActions';

const People = () => {
    const data = useSelector((state) => state.people.peopleData);
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const [peopleDetail, setPeopleDetail] = useState({});
    useEffect(() => {
        dispatch(setPeopleRequest());
    }, []);

    // const handleOnclick = (event) => {
    //     const id = event.currentTarget.id;
    //     setPeopleDetail(
    //         data.find((item) => {
    //             return `${item.id}` === `${id}`;
    //         }),
    //     );
    //     setOpen(true);
    // };

    return (
        <Grid container justifyContent="center" spacing={3}>
            <Grid item xs={11}>
                <Grid container spacing={2}>
                    {data.map((item, index) => (
                        <Grid item key={index}>
                            <Link to={`/people/detail/${item.id}`}>
                                <GenericCard
                                    id={item.id}
                                    title={item.name}
                                    image={`https://image.tmdb.org/t/p/w300${item.profile_path}`}
                                />
                            </Link>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Grid>
    );
};
export default People;
