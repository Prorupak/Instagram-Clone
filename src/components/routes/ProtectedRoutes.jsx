import React from "react";
import PropTypes from 'prop-types';
import { Outlet, Navigate } from "react-router-dom";
import { LOGIN } from "../../constants";

export const ProtectedRoutes= ({ user }) => {
    const isLoggedIn = Boolean(user);
    return isLoggedIn ? <Outlet /> : <Navigate to={LOGIN} />;
};

ProtectedRoutes.propTypes = {
    user: PropTypes.object,
};