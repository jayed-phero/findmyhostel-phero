import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Contact from "../Pages/Contact/Contact";
import Dashboard from "../Pages/Dashboad/Dashboard";
import DashboardHome from "../Pages/Dashboad/DashboardHome";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Registration/Login";
import PrivateRoute from "./PrivateRoute";

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
                element: <Login />
            },
            {
                path: 'contact',
                element: <Contact />
            }
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><Dashboard /></PrivateRoute>,
        children: [
            {
                path: '',
                element: <DashboardHome />
            }
        ]
    }
])

export default routes;