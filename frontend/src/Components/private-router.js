import React from 'react';
import {BrowserRouter as Outlet, Route, Navigate } from 'react-router-dom';

function PrivateRoute({children}) {
    const auth = localStorage.getItem("name"); // determine if authorized, from context or however you're doing it

    // If authorized, return an outlet that will render child elements
    // If not, return element that will navigate to login page
    return auth ? children : <Navigate to={"/login"} />;
}

export default PrivateRoute
