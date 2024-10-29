import React from "react";
import { useSelector } from 'react-redux'

function Redux() {
    const { authenticated, userType } = useSelector((state) => state.authenticator);
    if (authenticated && userType === 'user') {
        return (
            <>
                <h1>Authenticated.</h1>
            </>
        )
    } else {
        return (
            <>
                <h1>Not authenticated.</h1>
            </>
        )
    }
 
}

export default Redux