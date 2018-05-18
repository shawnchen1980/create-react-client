import * as types from './types';
import axios from 'axios';
export const signInSubmit=({email,password})=>(dispatch)=>{
    axios.post("/signin",{email,password}).then(res=>{console.log(res.data);dispatch(signInUser(res.data))})
};
export const signInUser=(user)=>({type:types.AUTH_SIGNIN,payload:user});
export const signOut=()=>({type:types.AUTH_SIGNOUT});
export const setID=(userID)=>({type:types.PROFILE_SETID,payload:userID});

export const getID=(token)=>dispatch=>{
    axios.get("/getid",{headers:{"Authorization":`${token}`}}).then(res=>{console.log(res.data);dispatch(setID(res.data.user))}).catch(e=>{console.log(e);dispatch(setID("Unknown"))});

};

export const imageUpload=(file)=>(dispatch)=>{
    console.log(file);
  axios.get("/getuploadurl").then(res=>{return axios.put(res.data,file,{headers:{"Content-Type":"image/jpeg"}})}).then(()=>{console.log("done");});

};