import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
	const {isAuthorized} = useSelector((store) => store.loginReducer.data);

  if(isAuthorized){
		return children;
	}

	// console.log(isAuthorized)

	return <Navigate to='/sign-in' />
}

export default PrivateRoute;