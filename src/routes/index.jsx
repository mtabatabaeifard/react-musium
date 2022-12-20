import { Home } from 'pages/Home';
import { SongPage } from 'pages/song';
import { LaunchScreen } from 'pages/LaunchScreen';
import { Welcome } from 'pages/Welcome';

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
    SONG: {
        path: '/song',
        element: <SongPage />,
    },
};
