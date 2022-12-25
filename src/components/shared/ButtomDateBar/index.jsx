import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

function LinkTab(props) {
    return (
        <Tab
            sx={{
                color: '#ffff',
                fontSize: '11px',
                fontWeight: 700,
                lineHeight: '13px',
                letterSpacing: '0.055rem',
                marginTop: '130px',
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

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box
            sx={{
                width: '100%',
                height: '207px',
                padding: '2rem',
                background:
                    'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 77.93%)',
                position: 'absolute',
                top: ' 670px',
            }}>
            <Tabs
                value={value}
                onChange={handleChange}
                aria-label="nav tabs example">
                <LinkTab label="30Days" href="/drafts" />
                <LinkTab label="6 Month" href="/trash" />
                <LinkTab label="1 Year" href="/spam" />
                <LinkTab label="Life Time" href="/spam" />
            </Tabs>
        </Box>
    );
}
