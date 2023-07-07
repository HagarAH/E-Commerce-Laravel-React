import {createBrowserRouter, Navigate} from "react-router-dom";
import Login from "./views/Login";
import Signup from "./views/Signup";
import NotFound from "./views/NotFound";
import Guest from "./components/Guest";
import Default from "./components/Default";
import Hero from "./views/Hero";

const router = createBrowserRouter([


    {
        path: '/',
        element: <Default/>,
        children: [
            {
                path: '/',
                element: <Navigate to='/hero'/>
            },
            {
                path: '/hero',
                element: <Hero/>
            }
        ]
    }, {
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
        path: '*',
        element: <NotFound/>
    }


])

export default router;
