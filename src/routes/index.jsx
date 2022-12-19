import SongPage from 'pages/song';
import Home from 'pages/Home';

export const routes = {
    HOME: {
        path: '/',
        element: <Home />,
    },
    SONG: {
        path: '/song',
        element: <SongPage />,
    },
};
