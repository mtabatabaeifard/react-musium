import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import findeReleaseDate from 'utils/releaseDate';

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
export function BottomDateBar() {
    const [value, setValue] = React.useState(0);
    // const [listByDate, setListByDate] = React.useState('')
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    function filtredItems() {
        const countDays = findeReleaseDate();
        [countDays].map((item) => {
            // eslint-disable-next-line no-console
            return item;
        });
    }

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
                <LinkTab label="30 days" />
                <LinkTab label="6 Month" />
                <LinkTab label="1 Year" />
                <LinkTab
                    // eslint-disable-next-line no-console
                    onClick={() => filtredItems()}
                    label="Life Time"
                />
            </Tabs>
        </Box>
    );
}
