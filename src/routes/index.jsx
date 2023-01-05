import Home from 'pages/Home';
import Login from 'pages/login';
import SongPage from 'pages/song';
import StatsPage from 'pages/stats';
import { LaunchScreen } from 'pages/launchScreen';
import { Welcome } from 'pages/welcome';
import { SignIn } from 'pages/signIn';
import SignUp from 'pages/signup';
import ForgotPassword from 'pages/forgotPassword';
import ResetPassword from 'pages/resetPassword';
import PlayList from 'pages/PlayList';
import Library from 'pages/Library';
import NewPassword from 'pages/newPassword/singup';
import Folders from 'pages/Folders';
import PlayLists from 'pages/Playlists';
import Albums from 'pages/Albums';
import Podcasts from 'pages/Podcasts';
import Artists from 'pages/Artists';
import Search from 'pages/Search';
import Folder from 'pages/Folder';

export const routes = {
    LAUNCHSCREEN: {
        path: '/',
        element: <LaunchScreen />,
    },
    WELCOME: {
        path: '/welcome',
        element: <Welcome />,
    },
    HOME: {
        path: '/home',
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
        path: '/playList',
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
        path: 'reset-Password',
        element: <ResetPassword />,
    },
    LIBRARY: {
        path: '/library',
        element: <Library />,
    },
    NewPassword: {
        path: 'new-Password',
        element: <NewPassword />,
    },
    FOLDERS: {
        path: '/folders',
        element: <Folders />,
    },
    PLAYLISTS: {
        path: '/playlists',
        element: <PlayLists />,
    },
    ALBUMS: {
        path: '/albums',
        element: <Albums />,
    },
    PODCASTS: {
        path: '/podcasts',
        element: <Podcasts />,
    },
    ARTISTS: {
        path: '/artists',
        element: <Artists />,
    },
    SEARCH: {
        path: '/search',
        element: <Search />,
    },
    FOLDER: {
        path: '/folder',
        element: <Folder />,
    },
};
