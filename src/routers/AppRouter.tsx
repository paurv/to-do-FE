import { Routes, Route, BrowserRouter  } from "react-router-dom";

import { DashboardRoutes } from './DashboardRoutes';
import { LoginScreen } from '../modules/login/components/LoginScreen';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<LoginScreen />} />
                <Route path="/*" element={ <DashboardRoutes/> } />
            </Routes>
        </BrowserRouter>
    )
}
