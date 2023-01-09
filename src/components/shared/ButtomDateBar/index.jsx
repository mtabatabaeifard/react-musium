import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import trackData from '../../../db/tracks.json';

function LinkTab(props) {
    return (
        <Tab
            sx={{
                color: '#ffff',
                fontSize: '11px',
                fontWeight: 700,
                lineHeight: '13px',
                letterSpacing: '0.055rem',
                marginTop: '110px',
                fontFamily: 'Century Gothic',
            }}
            component="a"
            onClick={(event) => {
                event.preventDefault();
            }}
            {...props}
        />
    );
}
const tracksDate = trackData.songs.map((item) => {
    const releaseDate = new Date(item.date);
    const presentDate = new Date();
    const difference = presentDate.getTime() - releaseDate.getTime();
    return difference;
});
// eslint-disable-next-line no-console

export function BottomDateBar() {
    const [value, setValue] = React.useState(0);
    const [sort, setSort] = React.useState(0);

    const handelSort = () => {
        if (sort === 30) {
            // eslint-disable-next-line no-console
            console.log(30);
        }
        if (sort === 180) {
            // eslint-disable-next-line no-console
            console.log(180);
        }
        if (sort === 365) {
            // eslint-disable-next-line no-console
            console.log(365);
        }
        if (sort === '') {
            // eslint-disable-next-line no-console
            console.log('alltime');
        }
    };
    handelSort();

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box
            sx={{
                height: '207px',
                width: '400px',
                background:
                    'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 77.93%)',
                top: ' 810px',
                position: 'fixed',
                marginLeft: '15px',
            }}>
            <Tabs
                TabIndicatorProps={{
                    sx: {
                        backgroundColor: 'transparent',
                    },
                }}
                value={value}
                onChange={handleChange}
                aria-label="nav tabs example">
                <LinkTab onClick={() => setSort(30)} label="30 days" />
                <LinkTab onClick={() => setSort(180)} label="6 Month" />
                <LinkTab onClick={() => setSort(365)} label="1 Year" />
                <LinkTab
                    // eslint-disable-next-line no-console
                    onClick={() => console.log(tracksDate)}
                    label="sort by time"
                />
            </Tabs>
        </Box>
    );
}
