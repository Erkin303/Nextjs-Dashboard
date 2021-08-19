const axios=require("axios");

export const getUsers=async()=>{
    try{
        const res=await axios.get(`https://jsonplaceholder.typicode.com/users?_limit=10`)
        return res.data;
    } catch (error){
        return {error:true}

    }
}