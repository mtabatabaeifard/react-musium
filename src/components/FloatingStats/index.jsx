import * as React from 'react';
// import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Zoom from '@mui/material/Zoom';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { StatsCart } from '../shared/StatsCart';
// import { BottomDateBar } from '../shared/ButtomDateBar';
import tracksData from '../../db/tracks.json';
import './styles.css';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
        <Typography
            component="div"
            hidden={value !== index}
            id={`action-tabpanel-${index}`}
            aria-labelledby={`action-tab-${index}`}
            {...other}>
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </Typography>
    );
}

TabPanel.propTypes = {
    // eslint-disable-next-line react/require-default-props
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};
[tracksData].map((item) => {
    // eslint-disable-next-line no-console
    return console.log(item);
});
function a11yProps(index) {
    return {
        id: `action-tab-${index}`,
        'aria-controls': `action-tabpanel-${index}`,
    };
}
export function FloatingStats() {
    const theme = useTheme();
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const transitionDuration = {
        enter: theme.transitions.duration.enteringScreen,
        exit: theme.transitions.duration.leavingScreen,
    };

    const fabs = [
        {
            color: 'primary',
            label: 'Add',
        },
        {
            color: 'secondary',
            label: 'Edit',
        },
        {
            color: 'inherit',
            label: 'Expand',
        },
    ];

    return (
        <Box
            sx={{
                backgroundColor: '#0000',
                padding: '20px',
                position: 'relative',
                minHeight: 600,
                fontFamily: 'Century Gothic',
            }}>
            <AppBar position="static" color="default">
                <Tabs
                    sx={{
                        textShadow: '0px 0px 4px #39C0D4',
                        color: ' theme.palette.primary.main',
                        backgroundColor: theme.palette.primary.dark,
                    }}
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    TabIndicatorProps={{
                        sx: {
                            backgroundColor: theme.palette.primary.main,
                            height: 2,
                            boxShadow: '0px 0px 4px #00C2CB',
                        },
                    }}
                    variant="fullWidth">
                    <Tab
                        sx={{
                            color: theme.palette.text.primary,
                            fontSize: '16px',
                            lineHeight: '20px',
                            textAlign: 'center',
                            letterSpacing: '0.06rem',
                            fontStyle: 'normal',
                            fontWeight: 700,
                            textShadow: '0px 0px 4px #39C0D4',
                        }}
                        label="Tracks"
                        {...a11yProps(0)}
                    />
                    <Tab
                        sx={{
                            color: theme.palette.text.primary,
                            fontSize: '16px',
                            lineHeight: '20px',
                            textAlign: 'center',
                            letterSpacing: '0.06rem',
                            fontStyle: 'normal',
                            fontWeight: 700,
                        }}
                        label="Artist"
                        {...a11yProps(1)}
                    />
                    <Tab
                        sx={{
                            color: theme.palette.text.primary,
                            fontSize: '16px',
                            lineHeight: '20px',
                            textAlign: 'center',
                            letterSpacing: '0.06rem',
                            fontStyle: 'normal',
                            fontWeight: 700,
                        }}
                        label="Albums"
                        {...a11yProps(2)}
                    />
                </Tabs>
            </AppBar>

            {fabs.map((fab, index) => (
                <Zoom
                    color="#39C0D4"
                    in={value === index}
                    timeout={transitionDuration}
                    style={{
                        transitionDelay: `${
                            value === index ? transitionDuration.exit : 0
                        }ms`,
                    }}
                    unmountOnExit>
                    <Box
                        className="tracksCart"
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '18px',
                            pt: '25px',
                            maxHeight: '800px',
                            overflowY: 'scroll',
                        }}>
                        <Link to="/song">
                            <StatsCart
                                number="#1"
                                trackArtist="swim"
                                trackName="Chase Atlantic"
                            />
                        </Link>
                        <Link to="/song">
                            <StatsCart
                                number="#2"
                                trackArtist="Time"
                                trackName="Nf"
                            />
                        </Link>
                        <Link to="/song">
                            <StatsCart
                                number="#3"
                                trackArtist="Movies"
                                trackName="Conan Gray"
                            />
                        </Link>
                        <Link to="/song">
                            <StatsCart
                                number="#4"
                                trackArtist="lowkey"
                                trackName="NIKI"
                            />
                        </Link>
                        <Link to="/song">
                            <StatsCart
                                number="#5"
                                trackArtist="Hurt"
                                trackName="NewJeans"
                            />
                        </Link>
                        <Link to="/song">
                            <StatsCart
                                number="#6"
                                trackArtist="aespa"
                                trackName="ILLUSION"
                            />
                        </Link>
                        <Link to="/song">
                            <StatsCart
                                number="#7"
                                trackArtist="BLACKPINK"
                                trackName="Pink venom"
                            />
                        </Link>
                        <Link to="/song">
                            <StatsCart
                                number="#8"
                                trackArtist="Hurt"
                                trackName="moods"
                            />
                        </Link>
                        <Link to="/song">
                            <StatsCart
                                number="#8"
                                trackArtist="Hurt"
                                trackName="moods"
                            />
                        </Link>
                        <Link to="/song">
                            <StatsCart
                                number="#8"
                                trackArtist="Hurt"
                                trackName="moods"
                            />
                        </Link>
                        <Link to="/song">
                            <StatsCart
                                number="#8"
                                trackArtist="Hurt"
                                trackName="moods"
                            />
                        </Link>
                        <Link to="/song">
                            <StatsCart
                                number="#8"
                                trackArtist="Hurt"
                                trackName="moods"
                            />
                        </Link>
                    </Box>
                </Zoom>
            ))}
        </Box>
    );
}
