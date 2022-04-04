import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import React from 'react';
import GenericCard from '../../components/GenericCard';
import GenericTab from '../../components/GenericTab';
import { searchPeopleRequest, setPeopleRequest } from '../../store/actions/peopleActions';
import PageLoader from '../../components/PajeLoader/PajeLoader';
import GenericTextField from '../../components/TextField';
import GenericButton from '../../components/Button';

const People = () => {
    const { peopleData, isLoading } = useSelector((state) => state.people);
    const dispatch = useDispatch();

    const [input, setInput] = useState('');
    const [peopleType, setPeopleType] = useState('people');
    useEffect(() => {
        if (peopleType === 'people') {
            dispatch(setPeopleRequest());
        } else if (peopleType === 'search') {
            dispatch(searchPeopleRequest(input));
        }
    }, [peopleType]);
    const handleChange = (event) => {
        setInput(event.target.value);
    };
    const handleClick = () => {
        setPeopleType('search');
    };
    return (
        <Grid container justifyContent="center" spacing={3}>
            <Grid item xs={11}>
                <Grid container justifyContent="center">
                    <Grid item xs={12}>
                        <Grid item xs={8} sm={10} lg={8}>
                            <GenericTextField handleChange={handleChange} placeHolder="Search" />
                        </Grid>
                        <Grid item xs={4} sm={2} lg={4}>
                            <GenericButton handleClick={handleClick} input={input} title="Search" />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={11}>
                {isLoading && <PageLoader />}
                <Grid container spacing={2} justifyContent="center">
                    {peopleData.map((item, index) => (
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
