import axios from 'axios';
export default{
	user:{
		login:(credentials)=>axios.post("http://localhost:8000/api/auth",{credentials}).then(res=>res.data.user)
	},
	system:{
		init:()=>axios.get("http://localhost:8000/initRent").then(res=>res.data.rentinit),
		save:(records)=>axios.post("http://localhost:8000/saveRecords",{records}).then(res=>res.data.info),
		initTenant:()=>axios.get("http://localhost:8000/initTenant").then(res=>res.data.tenantinit)
	}
};
