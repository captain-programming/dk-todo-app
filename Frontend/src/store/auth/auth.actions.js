import { 
	AUTH_LOGIN_LOADING,
	AUTH_LOGIN_ERROR,
	AUTH_LOGIN_SUCCESS, 
	AUTH_LOGIN_LOGOUT,
	AUTH_SIGNUP_LOADING,
	AUTH_SIGNUP_ERROR,
	AUTH_SIGNUP_SUCCESS
} from "./auth.types";
import axios from "axios";

export const login = (creds) => async (dispatch) =>{
	// console.log(creds);
	dispatch({type: AUTH_LOGIN_LOADING});
	try{
		let res = await axios.post("https://todoappwithdk.herokuapp.com/users/login", {
			email: creds.email,
			password: creds.password
		})

		// console.log(res);
		dispatch({type: AUTH_LOGIN_SUCCESS, payload: res.data});

	}catch(e){
		dispatch({type: AUTH_LOGIN_ERROR});
	}
};

export const createAccount = (creds) => async (dispatch) =>{
	// console.log(creds);
	dispatch({type: AUTH_SIGNUP_LOADING});
	try{
		let res = await axios.post("https://todoappwithdk.herokuapp.com/users/signup", {
			name: creds.name,
			email: creds.email,
			password: creds.password,
			role: "User"
		})

		// console.log(res);
		dispatch({type: AUTH_SIGNUP_SUCCESS, payload: res.data});

	}catch(e){
		dispatch({type: AUTH_SIGNUP_ERROR});
	}
};

export const logout = () => ({type: AUTH_LOGIN_LOGOUT});