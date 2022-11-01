import { 
	TASK_CREATE_SUCCESS,
	TASK_CREATE_LOADING,
	TASK_CREATE_ERROR,
	TASK_DELETE_ERROR,
	TASK_DELETE_LOADING,
	TASK_DELETE_SUCCESS,
	TASK_GET_ERROR,
	TASK_GET_SUCCESS,
	TASK_GET_LOADING
} from "./task.types";

//get initial
const getTaskInitialState = {
	loading: false,
	data: {
		data: [],
		status: false
	},
	error: false,
};

//create initial
const createTaskInitialState = {
	loading: false,
	data: {
		message: "Not create task",
		status: false
	},
	error: false,
};

//delete initial
const deleteTaskInitialState = {
	loading: false,
	data: {
		message: "Not delete task",
		status: false
	},
	error: false,
};

//get reducer
export const getTaskReducer = (state = getTaskInitialState, {type, payload}) => {
	switch (type){
		case TASK_GET_LOADING:{
			return {
				...state,
				loading: true,
			};
		}
		case TASK_GET_ERROR:{
			return {
				...state,
				loading: false,
				error: true
			};
		}
		case TASK_GET_SUCCESS:{
			return {
				...state,
				loading: false,
				error: false,
				data: {
					data: payload,
					status: true
				}
			};
		}
		default:{
			return state;
		}
	};
};

//create reducer
export const createTaskReducer = (state = createTaskInitialState, {type, payload}) => {
	switch (type){
		case TASK_CREATE_LOADING:{
			return {
				...state,
				loading: true,
			};
		}
		case TASK_CREATE_ERROR:{
			return {
				...state,
				loading: false,
				error: true
			};
		}
		case TASK_CREATE_SUCCESS:{
			return {
				...state,
				loading: false,
				error: false,
				data: {
					message: payload,
					status: true
				}
			};
		}
		default:{
			return state;
		}
	};
};

//delete reducer
export const deleteTaskReducer = (state = deleteTaskInitialState, {type, payload}) => {
	switch (type){
		case TASK_DELETE_LOADING:{
			return {
				...state,
				loading: true,
			};
		}
		case TASK_DELETE_ERROR:{
			return {
				...state,
				loading: false,
				error: true
			};
		}
		case TASK_DELETE_SUCCESS:{
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