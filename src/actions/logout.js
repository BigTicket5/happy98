import {USER_LOGGED_OUT} from "../types";
export const userLoggedOut = () =>({
	type:USER_LOGGED_OUT 
});
export const logout=()=>dispatch=>{
	localStorage.removeItem("happy98JWT");
	dispatch(userLoggedOut());
};