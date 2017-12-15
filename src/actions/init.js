import api from "../api";
export const initrent=()=>dispatch=>api.system.init().then(rentinit=>rentinit);