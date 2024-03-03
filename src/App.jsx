import AppRoutes from "./assets/route/routes";
import React,{ BrowserRouter } from 'react-router-dom'
const App = () => {
    return (
        <>
            <BrowserRouter>
                <AppRoutes />
            </BrowserRouter>
        </>
    );
}

export default App;