import { getUsers } from "../api"

export const setUsers=async(dispatch)=>{
    const data=await getUsers();
    console.log(data);
    dispatch ({type:"SET_USERS",payload:data});
}