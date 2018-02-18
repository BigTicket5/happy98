import {USER_LOGGED_IN} from "../types";
import api from "../api";

export const userLoggedIn = (user)=>({
	type: USER_LOGGED_IN,
	user
});

export const login=(credentials)=>dispatch=>
	api.user.login(credentials).then(user=>{
		localStorage.setItem('happy98JWT',user.token);
		localStorage.setItem('role',JSON.stringify(user.role));
		dispatch(userLoggedIn(user));
});