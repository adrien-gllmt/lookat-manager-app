import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";

import Dashboard from '../components/Dashboard';
import Menu from '../components/Menu';
import Search from "../components/Search";

function AppRouter() {
    return (
        <BrowserRouter basename={'/lookat-manager'}>
            <>
                <Menu />
                <Routes>
                    <Route element={<Dashboard/>} path="/" />
                    <Route element={<Search/>} path={"/search"} />
                    <Route element={<Navigate to="/" />} />
                </Routes>
            </>
        </BrowserRouter>
    );
}

export default AppRouter;
