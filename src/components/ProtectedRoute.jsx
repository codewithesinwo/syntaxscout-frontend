import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ allowedRoles }) => {
  const user = JSON.parse(localStorage.getItem("user"));

  // Clean the role string to remove \n or spaces
  const userRole = user?.role?.trim();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Use the trimmed userRole for the check
  if (!allowedRoles.includes(userRole)) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
