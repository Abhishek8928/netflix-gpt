import { createBrowserRouter } from "react-router-dom";
import Browse from "../Components/Browse";
import Home from "../Components/Home";
import Auth from "../Components/Auth";
const AppRoutes = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/auth/user",
        element: <Auth />,
    },
    {
        path: "/browse",
        element: <Browse />,
    },
])

export default AppRoutes;
