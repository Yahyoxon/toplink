
import {   Navigate,Route } from 'react-router-dom';
import useAuth from '../Context/AuthContext';

export default function PrivateRoute(props){
	const [token] = useAuth();
	if (!token) {
		return <Navigate to='/loginpage' />;
	}
	return <Route {...props}  />;
}

