import React from "react";
import { Navigate } from "react-router-dom";

import { useAuth } from "@/lib/auth";

const ProtectedRoute: React.FC<React.PropsWithChildren> = (props) => {
    const { token, user } = useAuth();

    return token && user ? (
        <>{props.children}</>
    ) : ( <Navigate to="/login" />)
}
export default ProtectedRoute;