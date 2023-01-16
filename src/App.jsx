import useLogin from 'hooks/useLogin';
import { Route, Routes } from 'react-router-dom';
import { routes } from 'routes';

import './assets/styles/global/index.css';

function App() {
    useLogin();
    return (
        <Routes>
            {Object.keys(routes).map((route) => {
                return (
                    <Route
                        element={routes[route].element}
                        path={routes[route].path}
                    />
                );
            })}
        </Routes>
    );
}

export default App;
