import { createBrowserRouter } from "react-router-dom";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";

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
        element: <ProtectedRoute component={Settings} restrictTo={["admin"]}/>     
    },
    {
        path: '/dashboard',
        element: <ProtectedRoute component={Dashboard} />    
    },
])

export default BrowserRouter