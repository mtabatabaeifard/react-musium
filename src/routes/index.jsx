import Home from 'pages/Home';
import SongPage from 'pages/song';
import StatsPage from 'pages/stats';

export const routes = {
    HOME: {
        path: '/',
        element: <Home />,
    },
    SONG: {
        path: '/song',
        element: <SongPage />,
    },
    STATS: {
        path: '/stats',
        element: <StatsPage />,
    },
};
