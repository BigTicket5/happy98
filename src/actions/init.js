import api from "../api";
export const initrent=()=>dispatch=>api.system.init().then(rentinit=>rentinit);
export const inittenant=()=>dispatch=>api.system.initTenant().then(tenantinit=>tenantinit);
export const initrentalproperty=(rentalproperty)=>dispatch=>api.system.initRentalProp(rentalproperty).then(rentprop=>rentprop);