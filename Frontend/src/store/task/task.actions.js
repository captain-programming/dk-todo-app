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

import axios from "axios";

export const getTask = (userid) => async (dispatch) =>{
	// console.log(userid)

	dispatch({type: TASK_GET_LOADING});

	try{
		let headers = {
			userid: userid
		};

		let res = await axios.get("https://todoappwithdk.herokuapp.com/tasks", {
			headers: headers
		})

		dispatch({type: TASK_GET_SUCCESS, payload: res.data});

	}catch(e){
		dispatch({type: TASK_GET_ERROR});
	}
};
export const createTask = (taskDetails, userid) => async (dispatch) =>{
	// console.log(taskDetails, userid)

	dispatch({type: TASK_CREATE_LOADING});

	let {task, important, urgent} = taskDetails;
	try{
		const fullDate = new Date().toLocaleString('en-us',{
			day:'numeric',
			month:'short', 
			year:'numeric'
		});

		let data = {
			task: task,
			important: important,
			urgent: urgent,
			completed: false,
			date: fullDate, 
		};
		let headers = {
			userid: userid
		};

		let res = await axios.post("https://todoappwithdk.herokuapp.com/tasks", data, {
			headers: headers
		})

		dispatch({type: TASK_CREATE_SUCCESS, payload: res.data});

	}catch(e){
		dispatch({type: TASK_CREATE_ERROR});
	}
};

export const deleteTask = (taskId, userid) => async (dispatch) =>{
	// console.log(creds);
	dispatch({type: TASK_DELETE_LOADING});

	try{
		let headers = {
			userid: userid
		};

		let res = await axios.delete(`https://todoappwithdk.herokuapp.com/tasks/${taskId}`, {
			headers: headers
		})

		// console.log(res);
		dispatch({type: TASK_DELETE_SUCCESS, payload: res.data});

	}catch(e){
		dispatch({type: TASK_DELETE_ERROR});
	}
};