import { Route, Routes } from 'react-router-dom';
import { routes } from 'routes';
import './App.css';

function App() {
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
