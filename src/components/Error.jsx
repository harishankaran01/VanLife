import React from 'react';
import { useRouteError } from 'react-router-dom';

export default function RouteError() {
    let error = useRouteError()
   
    return (
        <h1>Error:{error.message}</h1>
    )
}
