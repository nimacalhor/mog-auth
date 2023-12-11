import { createBrowserRouter } from "react-router-dom";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import Dashboard from "./pages/Dashboard";

const BrowserRouter = createBrowserRouter([
    {
        path: '/auth',
        element: <Auth />
              
    },
    {
        path: '/',
        element: <Home />      
    },
    {
        path: '/settings',
        element: <Settings />      
    },
    {
        path: '/dashboard',
        element: <Dashboard />      
    },
])

export default BrowserRouter