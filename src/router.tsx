import {createBrowserRouter} from "react-router-dom";
import Login from "./views/Login";
import Signup from "./views/Signup";
import NotFound from "./views/NotFound";
import Guest from "./components/Guest";
import Default from "./components/Default";
import Dashboard from "./views/Users/Dashboard";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Guest/>,
        children: [
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/signup',
                element: <Signup/>
            },
        ]
    },

    {
        path: '/',
        element: <Default/>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard/>
            }
        ]
    },

    {
        path: '*',
        element: <NotFound/>
    }


])

export default router;
