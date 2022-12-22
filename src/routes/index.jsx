import Home from 'pages/Home';
import SongPage from 'pages/song';
import PlayList from 'pages/PlayList';

export const routes = {
    HOME: {
        path: '/',
        element: <Home />,
    },
    SONG: {
        path: '/song',
        element: <SongPage />,
    },
    PlayList: {
        path: '/PlayList',
        element: <PlayList />,
    },

};
