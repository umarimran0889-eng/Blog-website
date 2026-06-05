import { Navigate, Outlet } from "react-router-dom";

const AuthGuard = ({ type }) => {
  const isAuthenticated = localStorage.getItem("isLoggedIn") === "true";

  if (type === "public") {
    return isAuthenticated ? <Navigate to="/dashboard" replace /> : <Outlet />;
  }

  if (type === "private") {
    return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default AuthGuard;