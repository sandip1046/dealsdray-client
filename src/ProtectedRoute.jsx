// src/components/ProtectedRoute.js;
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ element }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  // If not authenticated, check if we are already on or navigating to the signin page
  if (!isAuthenticated && location.pathname !== '/signin') {
    alert("Please sign in to access the website.");
    return <Navigate to="/signin" />;
  }
  return element;
};

export default ProtectedRoute;
