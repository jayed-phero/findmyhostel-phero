import React, { useContext, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const [loading, setLoading] = useState(true)
    const fmhToken = localStorage.getItem("fmhToken")
    console.log(fmhToken)
    const location = useLocation()

    if (fmhToken === "1234567890") {
        return children
    }

    return <Navigate to='/login' state={{ from: location }} replace />
};

export default PrivateRoute;