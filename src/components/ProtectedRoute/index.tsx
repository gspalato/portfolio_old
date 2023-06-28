import { useLazyQuery, useQuery } from "@apollo/client";
import React, { useEffect, useMemo } from "react";
import { Navigate } from "react-router-dom";

import Loading from "@/app/Loading";

import Page from "@/components/Page";

import { useAuth } from "@/lib/auth";
import { CHECK_AUTH } from "@/lib/graphql/queries";


const ProtectedRoute: React.FC<React.PropsWithChildren> = (props) => {
    const { token } = useAuth();

    const [valid, setValid] = React.useState<boolean>(false);

    const [check, { loading, error }] = useLazyQuery(CHECK_AUTH, {
        variables: {
            token: token,
        },
        onCompleted: (data) => {
            let payload = data.isAuthenticated;
            setValid(payload.successful);
        },
        onError: (error) => {
            setValid(false);
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

    return valid ? (
        <>{props.children}</>
    ) : ( <Navigate to="/login" />)
}
export default ProtectedRoute;