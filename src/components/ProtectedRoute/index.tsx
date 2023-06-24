import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { CHECK_AUTH } from "@/lib/graphql/queries";


const ProtectedRoute: React.FC<React.PropsWithChildren> = (props) => {
    const navigate = useNavigate();
    
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const checkHasToken = () => {
        const userToken = localStorage.getItem('reality-token');

        if (!userToken || userToken === 'undefined') {
            setIsAuthenticated(false);
            return navigate('/login');
        }

        setIsAuthenticated(true);
    }

    const checkTokenValidity = () => {
        useQuery<any>(CHECK_AUTH, {
            variables: {
                token: sessionStorage.getItem('reality-token') ?? ""
            },
            onCompleted: (data) => {
                const payload = data.isAuthenticated;
    
                setIsAuthenticated(payload.successful);
            },
            onError: (error) => {
                setIsAuthenticated(false);
                console.log(error);
            }
        });
    }

    useEffect(() => {
        checkHasToken();
        // checkTokenValidity();
    }, [isAuthenticated]);

    return (
        <> { isAuthenticated ? props.children : null } </>
    );
}
export default ProtectedRoute;