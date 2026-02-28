import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ allowedRoles }) => {
  // We fetch the user data we saved during login
  const user = JSON.parse(localStorage.getItem("user"));
  console.log("ProtectedRoute User:", user);

  if (!user) {
    // Not logged in? Send them to login
    return <Navigate to="/login" replace />;
  }

  if (!allowedRoles.includes(user.role)) {
    // Logged in but wrong role? Send them to a "Not Authorized" or Home page
    return <Navigate to="/" replace />;
  }

  // If everything is fine, show the child routes (Outlet)
  return <Outlet />;
};

export default ProtectedRoute;
