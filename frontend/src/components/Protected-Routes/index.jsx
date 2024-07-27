import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const isAuthenticatedUser = localStorage.getItem("token");

const ProtectedRoutes = () => {
  if (!isAuthenticatedUser) return <Navigate to='/login' />;
  return <Outlet />;
};

export default ProtectedRoutes;
