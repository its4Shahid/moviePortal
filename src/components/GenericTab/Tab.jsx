import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

const GenericTab = (props) => {
    const [value, setValue] = React.useState('one');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const { all, popular, latest, getAllHandler, getPopularHandler, getLatestHandler, tabStyle } = props;

    return (
        <Box sx={{ width: '100%' }}>
            <Tabs
                value={value}
                onChange={handleChange}
                textColor="secondary"
                indicatorColor="secondary"
                aria-label="secondary tabs example"
                sx={tabStyle}
            >
                <Tab value="one" onClick={getAllHandler} label={all} />
                <Tab value="two" onClick={getPopularHandler} label={popular} />
                <Tab value="three" onClick={getLatestHandler} label={latest} />
            </Tabs>
        </Box>
    );
};
export default GenericTab;
