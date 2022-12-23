import Home from 'pages/Home';
import SongPage from 'pages/song';

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
