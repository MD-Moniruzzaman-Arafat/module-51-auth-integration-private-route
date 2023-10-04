import { createBrowserRouter } from "react-router-dom";
import Root from "../compponents/Root/Root";
import Home from "../compponents/Home/Home";
import Registration from "../compponents/Registration/Registration";
import Login from "../compponents/Login/Login";
import Orders from "../compponents/Orders/Orders";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/registration",
                element: <Registration></Registration>
            },
            {
                path: "/orders",
                element: <PrivateRoute><Orders></Orders></PrivateRoute>
            }
        ]
    },
]);

export default router;