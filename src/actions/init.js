import api from "../api";
export const initrent=()=>dispatch=>api.system.init().then(rentinit=>rentinit);
export const inittenant=()=>dispatch=>api.system.initTenant().then(tenantinit=>tenantinit);