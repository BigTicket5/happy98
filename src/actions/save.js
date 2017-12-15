import api from "../api";
export const saveRecords=(records)=>dispatch=>
	api.system.save(records).then(info=>{
		console.log(info);
	});