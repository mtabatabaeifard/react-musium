import Home from 'pages/Home';
import Login from 'pages/login';
import SingUp from 'pages/singup';
import SongPage from 'pages/song';
import StatsPage from 'pages/stats';
import { LaunchScreen } from 'pages/LaunchScreen';
import { Welcome } from 'pages/Welcome';
import { SignIn } from 'pages/signIn';
import PlayList from 'pages/PlayList';

export const routes = {
    LAUNCHSCREEN: {
        path: '/',
        element: <LaunchScreen />,
    },
    WELCOME: {
        path: '/Welcome',
        element: <Welcome />,
    },
    HOME: {
        path: '/Home',
        element: <Home />,
    },
    SIGNIN: {
        path: '/sign-in',
        element: <SignIn />,
    },
    SONG: {
        path: '/song',
        element: <SongPage />,
    },
    PlayList: {
        path: '/PlayList',
        element: <PlayList />,
    },

    Login: {
        path: '/login',
        element: <Login />,
    },
    SingUp: {
        path: '/singup',
        element: <SingUp />,
    },
    STATS: {
        path: '/stats',
        element: <StatsPage />,
    },
};
