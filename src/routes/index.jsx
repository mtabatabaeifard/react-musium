import Home from 'pages/Home';
import Login from 'pages/login';
import SingUp from 'pages/singup';
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
    Login: {
        path: '/login',
        element: <Login />,
    },
    SingUp: {
        path: '/singup',
        element: <SingUp />,
    },
};
