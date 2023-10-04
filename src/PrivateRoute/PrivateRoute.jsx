import { useContext } from "react";
import PropTypes from 'prop-types';
import { Navigate } from "react-router-dom";
import { authContext } from "../context/Context";


const PrivateRoute = ({ children }) => {

    const { user, loder } = useContext(authContext);
    if (loder) {
        return 'Loding...'
    }
    if (user) {
        return children;
    }

    return <Navigate to={"/login"}></Navigate>
};

PrivateRoute.propTypes = {
    children: PropTypes.node
}

export default PrivateRoute;