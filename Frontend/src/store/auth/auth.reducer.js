import { 
	AUTH_LOGIN_LOADING,
	AUTH_LOGIN_ERROR,
	AUTH_LOGIN_SUCCESS, 
	AUTH_LOGIN_LOGOUT,
	AUTH_SIGNUP_LOADING,
	AUTH_SIGNUP_ERROR,
	AUTH_SIGNUP_SUCCESS
} from "./auth.types";

const loginInitalState = {
	loading: false,
	data: {
		userId: "",
		isAuthorized: false,
	},
	error: false,
};

const signupInitalState = {
	loading: false,
	data: {
		message: "Not create account",
		status: false
	},
	error: false,
};

export const loginReducer = (state = loginInitalState, {type, payload}) => {
	switch (type){
		case AUTH_LOGIN_LOADING:{
			return {
				...state,
				loading: true,
			};
		}
		case AUTH_LOGIN_ERROR:{
			return {
				...state,
				loading: false,
				error: true
			};
		}
		case AUTH_LOGIN_SUCCESS:{
			return {
				...state,
				loading: false,
				error: false,
				data: {
					userId: payload,
					isAuthorized: true
				}
			};
		}
		case AUTH_LOGIN_LOGOUT:{
			return{
				...state,
				loading: false,
				error: false,
				data: {
					userId: "",
					isAuthorized: false
				}
			};
		}
		
		default:{
			return state;
		}
	};
};

export const signupReducer = (state = signupInitalState, {type, payload}) => {
	switch (type){
		case AUTH_SIGNUP_LOADING:{
			return {
				...state,
				loading: true,
			};
		}
		case AUTH_SIGNUP_ERROR:{
			return {
				...state,
				loading: false,
				error: true
			};
		}
		case AUTH_SIGNUP_SUCCESS:{
			return {
				...state,
				loading: false,
				error: false,
				data: {
					message: payload,
					status: true
				}, 
			};
		}
		default:{
			return state;
		}
	};
};