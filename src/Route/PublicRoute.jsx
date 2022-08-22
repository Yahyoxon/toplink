import { Navigate, Route } from "react-router-dom";
import useAuth from "../Context/AuthContext";

export default function PublicRoute(props) {
  const [token] = useAuth();

  if (token) {
    return <Navigate to="/" />;
  }
  return <Route {...props} />;
}
