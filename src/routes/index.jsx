import Home from 'pages/Home';
import Login from 'pages/login';
import SongPage from 'pages/song';
import StatsPage from 'pages/stats';
import { LaunchScreen } from 'pages/LaunchScreen';
import { Welcome } from 'pages/Welcome';
import { SignIn } from 'pages/signIn';
import SignUp from 'pages/singup';
import ForgotPassword from 'pages/forgotPassword';
import ResetPassword from 'pages/ResetPassword';
import PlayList from 'pages/PlayList';
import Library from 'pages/Library';
import Folders from 'pages/Folders';
import PlayLists from 'pages/Playlists';
import Albums from 'pages/Albums';
import Podcasts from 'pages/Podcasts';
import Artists from 'pages/Artists';
import Search from 'pages/Search';

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
        path: '/signin',
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
        path: '/signup',
        element: <SignUp />,
    },
    STATS: {
        path: '/stats',
        element: <StatsPage />,
    },
    ForgotPassword: {
        path: 'forgot-password',
        element: <ForgotPassword />,
    },
    ResetPassword: {
        path: 'Reset-Password',
        element: <ResetPassword />,
    },
    LIBRARY: {
        path: '/library',
        element: <Library />
    },
    FOLDERS: {
        path: '/folders',
        element: <Folders />
    },
    PLAYLISTS: {
        path: '/playlists',
        element: <PlayLists />
    },
    ALBUMS: {
        path: '/albums',
        element: <Albums />
    },
    PODCASTS: {
        path: '/podcasts',
        element: <Podcasts />

    },
    ARTISTS: {
        path: '/artists',
        element: <Artists />

    },
    SEARCH: {
        path: '/search',
        element: <Search />

    },
};
