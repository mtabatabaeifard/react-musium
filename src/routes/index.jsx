import Home from 'pages/Home';
import SongPage from 'pages/song';
import { LaunchScreen } from 'pages/launchScreen';
import { Welcome } from 'pages/welcome';
import { SignIn } from 'pages/signIn';

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
};
