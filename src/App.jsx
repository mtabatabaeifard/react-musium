import { Container } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import routes from 'routes';
import './App.css';

function App() {
    return (
        <Container>
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
        </Container>
    );
}

export default App;
