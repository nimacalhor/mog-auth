import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/auth-context";

function ProtectedRoute({ component: Component, restrictTo }) {
  const [userData] = useAuth();

  if (!userData) return <Navigate to="/auth" />;

  if (userData && !userData.isLoggedIn) {
    console.log("not logged in");
    return <Navigate to="/auth" />;
  }

  if (userData && restrictTo && !restrictTo.includes(userData.role)) {
    console.log("logged in but access denied");
    return <Navigate to="/" />;
  }

  return <Component />;
}

export default ProtectedRoute;
