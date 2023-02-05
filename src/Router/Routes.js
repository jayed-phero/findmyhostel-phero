import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Dashboard from "../Pages/Dashboad/Dashboard";
import DashboardHome from "../Pages/Dashboad/DashboardHome";
import DashHome from "../Pages/Dashboad/DashboardHome/DashHome";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Registration/Login";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'login',
                element: <Login/>
            },
            {
                path: 'dashhome',
                element: <DashHome/>
            }
        ]
    },
    {
        path: 'dashboard',
        element: <Dashboard />,
        children: [
            {
                path: '',
                element: <DashboardHome />
            }
        ]
    }
])

export default routes;