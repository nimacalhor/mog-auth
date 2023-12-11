import { createBrowserRouter } from "react-router-dom";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import Dashboard from "./pages/Dashboard";

const BrowserRouter = createBrowserRouter([
    {
        path: '/auth',
        Component: <Auth />
              
    },
    {
        path: '/',
        Component: <Home />      
    },
    {
        path: '/settings',
        Component: <Settings />      
    },
    {
        path: '/dashboard',
        Component: <Dashboard />      
    },
])

export default BrowserRouter