import { useLazyQuery, useQuery } from "@apollo/client";
import React, { useEffect, useMemo } from "react";
import { Navigate } from "react-router-dom";

import Loading from "@/app/Loading";

import Page from "@/components/Page";

import { useAuth } from "@/lib/auth";
import { CHECK_AUTH } from "@/lib/graphql/queries";


const ProtectedRoute: React.FC<React.PropsWithChildren> = (props) => {
    const { token } = useAuth();

    const { isTokenValid, setTokenValidity, expire } = useAuth();

    const [check, { loading, error }] = useLazyQuery(CHECK_AUTH, {
        variables: {
            token: token,
        },
        onCompleted: (data) => {
            let payload = data.isAuthenticated;
            setTokenValidity(payload.successful);

            if (!payload.successful)
                expire();
        },
        onError: () => {
            setTokenValidity(false);
            expire();
        }
    });

    useEffect(() => {
        check();
    }, [token]);

    if (loading)
        return <Loading />;

    if (error) {
        console.log(error);
        return ( <Navigate to="/login" />);
    }

    return isTokenValid ? (
        <>{props.children}</>
    ) : ( <Navigate to="/login" />)
}
export default ProtectedRoute;